const rp = require('request-promise');
const config = require('../config/oauth');
const User = require('../models/user');

function github(req, res, next) {
  console.log(config.github.accessTokenUrl);
  return rp({
    method: 'POST',
    url: config.github.accessTokenUrl,
    qs: {
      client_id: config.github.clientId,
      client_secret: config.github.clientSecret,
      code: req.query.code
    },
    json: true
  })
  .then((token) => {
    console.log(token);
    return rp({
      method: 'GET',
      url: config.github.profileUrl,
      qs: token,
      json: true,
      headers: { 'User-Agent': 'timrooke1991' }
    });
  })
  .then((profile) => {
    console.log(profile);
    return User.findOne({ $or:
      [{ email: profile.email }, { githubId: profile.id }] })
    .then((user) => {
      if(!user) {
        user = new User({
          username: profile.login,
          email: profile.email
        });
        if (profile.email) user.email = profile.email;
      }
      user.githubId = profile.id;
      user.image = user.image || profile.avatar_url;
      return user.save();
    })
    .then((user) => {
      req.session.userId = user.id;
      req.session.isAuthenticated = true;

      req.flash('info', `Welcome ${user.username}!`);
      res.redirect('/posts');
    });
  })
  .catch(next);
}



function instagram (req, res, next) {

  console.log('query', req.query);
  return rp({
    method: 'POST',
    url: config.instagram.accessTokenUrl,
    form: {
      client_id: config.instagram.clientId,
      client_secret: config.instagram.clientSecret,
      grant_type: 'authorization_code',
      redirectUri: process.env.NODE_ENV === 'production' ? 'https://aqueous-lake-61312.herokuapp.com/oauth/instagram' : 'http://localhost:8000/oauth/instagram',
      code: req.query.code
    },
    json: true
  })
  .then((token) => {
    console.log('token', token);
    return User
    .findOne({ $or: [{ email: token.user.email }, { instagramId: token.user.id }] })
    .then((user) => {
      if(!user) {
        user = new User({
          username: token.user.username,
          image: token.user.profile_picture
        });
      }

      user.instagramId = token.user.id;
      return user.save();
    });
  })
  .then((user) => {
    req.session.userId = user.id;
    req.session.isAuthenticated = true;

    req.flash('info', `Welcome back, ${user.username}!`);
    res.redirect(`/posts`);
  })
  .catch(next);
}

function facebook(req, res, next) {
  return rp({
    method: 'GET',
    url: config.facebook.accessTokenUrl,
    qs: {
      client_id: config.facebook.clientId,
      redirectUri: process.env.NODE_ENV === 'production' ? 'https://aqueous-lake-61312.herokuapp.com/oauth/facebook' : 'http://localhost:8000/oauth/facebook',
      client_secret: config.facebook.clientSecret,
      code: req.query.code
    },
    json: true
  })
  .then((token) => {
    console.log(token);
    return rp({
      method: 'GET',
      url: 'https://graph.facebook.com/v2.5/me?fields=id,name,email,picture.height(961)',
      qs: {
        access_token: token.access_token
      },
      json: true
    })
    .then((profile) => {
      console.log('User profile', profile);
      return User
      .findOne( {$or: [{ email: profile.email}, {facebookId: profile.id}] })
      .then((user) => {
        if(!user) {
          user = new User({
            username: profile.name,
            email: profile.email,
            image: profile.picture.data.url
          });
        }
        user.facebookId = profile.id;

        console.log(user);
        return user.save();
      });
    })
    .then((user) => {
      req.session.userId = user.id;
      req.session.isAuthenticated = true;

      req.flash('info', `Welcome back, ${user.username}!`);
      res.redirect(`/posts`);
    })
    .catch(next);
  });
}


module.exports = {
  github,
  instagram,
  facebook
};
