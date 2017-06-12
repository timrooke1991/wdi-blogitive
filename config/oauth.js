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

const twitter = {
  callback: 'http://localhost:3000/oauth/twitter',
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  requestTokenUrl: 'https://api.twitter.com/oauth/request_token'
};

// console.log(github);

module.exports = {
  github
};
