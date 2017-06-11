const rp = require('request-promise');
const oauth = require('../config/oauth');
const User = require('../models/user');

function github(req, res, next) {
  console.log('query', req.query);
  return rp({
    method: 'POST',
    url: oauth.github.accessTokenUrl,
    qs: {
      client_id: oauth.github.clientID,
      client_secret: oauth.github.clientSecret,
      code: req.query.code
    },
    json: true
  })
  .then((token) => {
    console.log(token);
    return rp({
      method: 'GET',
      url: oauth.github.profileUrl,
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
      res.redirect('/');
    });
  })
  .catch(next);
}

module.exports = {
  github
};
