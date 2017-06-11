const github = {
  loginUrl: 'https://github.com/login/oauth/authorize',
  accessTokenUrl: 'https://github.com/login/oauth/access_token',
  profileUrl: 'https://api.github.com/user',
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  scope: 'user:email',
  getLoginURL() {
    return `${this.loginUrl}?client_id=${this.clientId}&scope=${this.scope}`;
  }
};


const facebook = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
};



module.exports = {
  github
};
