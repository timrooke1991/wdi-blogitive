const User = require('../models/user');
const Post = require('../models/post');

function newRoute(req, res) {
  return res.render('registrations/new');
}

function createRoute(req, res, next) {
  console.log(req.body);
  if(req.file) req.body.image = req.file.key;
  User
    .create(req.body)
    .then(() => res.redirect('/login'))
    .catch((err) => {
      next(err);
    });
}

function showRoute(req, res, next) {
  console.log(req.user);
  User
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((profile) => {
      // if(!user) return res.notFound();
      Post
        .find({ createdBy: req.params.id })
        .exec()
        .then((posts) => {
          console.log(posts);
          res.render('registrations/show', { profile, posts });
        })
        .catch((err) => {
          next(err);
        });
    });

}
function editRoute(req, res) {
  return res.render('registrations/edit');
}

function updateRoute(req, res, next) {
  for(const field in req.body) {
    req.user[field] = req.body[field];
  }

  req.user
    .save()
    .then(() => res.redirect(`/posts`))
    .catch((err) => {
      // if(err.name === 'ValidationError') return res.badRequest(`/users/${req.user.id}/edit`, err.toString());
      next(err);
    });
}

function deleteRoute(req, res, next) {
  return req.user.remove()
    .then(() => {
      req.session.regenerate(() => res.redirect('/'));
    })
    .catch(next);
}

module.exports = {
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
