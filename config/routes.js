const router = require('express').Router();
const postsController = require('../controllers/posts');
const sessionsController = require('../controllers/sessions');
const registrationsController = require('../controllers/registrations');
const secureRoute = require('../lib/secureRoute');
const upload = require('../lib/upload');
const oauth = require('../controllers/oauth');


router.get('/', (req, res) => res.render('statics/index'));

router.route('/posts')
  .get(postsController.index)
  .post(secureRoute, upload.single('image'), postsController.create);

router.route('/posts/new')
  .get(secureRoute, postsController.new);

router.route('/posts/:id')
  .get(postsController.show)
  .put(secureRoute, postsController.update)
  .delete(secureRoute, postsController.delete);

router.route('/posts/:id/edit')
  .get(secureRoute, postsController.edit);

router.route('/posts/:id/comments')
  .post(secureRoute, postsController.createComment);

router.route('/posts/:id/comments/:commentId')
  .delete(secureRoute, postsController.deleteComment);


router.route('/register')
  .get(registrationsController.new)
  .post(upload.single('image'), registrationsController.create);

router.route('/users/:id')
  .get(secureRoute, registrationsController.show)
  .put(secureRoute, registrationsController.update)
  .delete(secureRoute, registrationsController.delete);

router.route('/users/:id/edit')
  .get(secureRoute, registrationsController.edit);

router.route('/oauth/github')
  .get(oauth.github);

router.route('/login')
  .get(sessionsController.new)
  .post(sessionsController.create);

router.route('/logout')
  .get(sessionsController.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
