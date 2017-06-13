const Post = require('../models/post');
const time_ago_in_words = require('time_ago_in_words');
const nlu = require('../config/watson.js');

function indexPost(req, res, next) {
  const regex = new RegExp(req.query.q, 'i');
  const query  = { $or: [{ categories: regex }, { title: regex }] };

  Post
    .find(query)
    .populate('createdBy')
    .exec()
    .then((posts) => res.render('posts/index', { posts }))
    .catch(next);
}

function newPost(req, res) {
  console.log(req.user);
  return res.render('posts/new');
}

function createPost(req, res, next) {

  req.body.createdBy = req.user;
  if(req.file) req.body.image = req.file.key;

  // Passing in the body of the form to be analysed by IBM Watson
  const parameters = {
    'text': req.body.body,
    'features': {
      'sentiment': {},
      'emotion': {},
      'relations': {
        'limit': 5
      },
      'categories': {
        'limit': 5
      },
      'entities': {
        'emotion': true,
        'sentiment': true,
        'limit': 5
      },
      'concepts': {
        'emotion': true,
        'sentiment': true,
        'limit': 5
      }
    }
  };

  // IBM Watson Function
  nlu.analyze(parameters, function (err, response) {
    if (err) {
      console.log('error:', err);
    } else {

      req.body.sentiment = response.sentiment.document.score;

      response.categories.forEach((category) => {
        const convertToStringList = category.label.split('/').join(',');
        console.log(convertToStringList);
        req.body.categories += convertToStringList;
      });

      const dedupedStr = req.body.categories.split(',').filter(function(item, pos,self) {
        return self.indexOf(item) === pos;
      });

      req.body.categories = dedupedStr;
      req.body.entities = response.entities;
      req.body.concepts = response.concepts;
    }

    Post
    .create(req.body)
    .then((post) => {
      res.redirect(`/posts/${post.id}`);
    })
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/posts`, err.toString());
      next(err);
    });
    // End of IBM Analysis
  });
}

function showPost(req, res, next) {
  Post
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((post) => {
      if(!post) return res.notFound();
      return res.render('posts/show', { post, time_ago_in_words });
    })
    .catch(next);
}

function editPost(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.redirect();
      if(!post.belongsTo(req.user)) return res.unauthorized(`/posts/${post.id}`, 'You do not have permission to edit that resource');
      return res.render('posts/edit', { post });
    })
    .catch(next);
}

function updatePost(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();
      for(const field in req.body) {
        post[field] = req.body[field];
      }

      return post.save();
    })
    .then(() => res.redirect(`/posts/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/posts/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function deletePost(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();
      if(!post.belongsTo(req.user)) return res.unauthorized(`/posts/${post.id}`, 'You do not have permission to edit that resource');
      return post.remove();
    })
    .then(() => res.redirect('/posts'))
    .catch(next);
}

function createCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  const parameters = {
    'text': req.body.content,
    'features': {
      'sentiment': {},
      'emotion': {},
      'entities': {
        'emotion': true,
        'sentiment': true,
        'limit': 3
      }
    }
  };

  // IBM Watson Function
  nlu.analyze(parameters, function (err, response) {
    if (err) {
      console.log('error:', err);
    } else {

      req.body.sentiment = response.sentiment.document.score;
      req.body.entities = response.entities;

      Post
      .findById(req.params.id)
      .exec()
      .then((post) => {
        if(!post) return res.notFound();

        post.comments.push(req.body); // create an embedded record
        return post.save();
      })
      .then((post) => res.redirect(`/posts/${post.id}`))
      .catch(next);
    }
  });
}


function deleteCommentRoute(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();
      // get the embedded record by it's id
      const comment = post.comments.id(req.params.commentId);
      comment.remove();
      return post.save();
    })
    .then((post) => res.redirect(`/posts/${post.id}`))
    .catch(next);
}

module.exports = {
  index: indexPost,
  new: newPost,
  create: createPost,
  show: showPost,
  edit: editPost,
  update: updatePost,
  delete: deletePost,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
