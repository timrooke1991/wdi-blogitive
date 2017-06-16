module.exports = {
  instagram: {
    loginUrl: 'https://api.instagram.com/oauth/authorize/',
    accessTokenUrl: 'https://api.instagram.com/oauth/access_token',
    redirectUri: process.env.NODE_ENV === 'production' ? 'https://aqueous-lake-61312.herokuapp.com/oauth/instagram' : 'http://localhost:8000/oauth/instagram',
    clientId: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    responseCode: 'code',
    getLoginUrl() {
      return `${this.loginUrl}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=${this.responseCode}`;
    }
  },
  github: {
    loginUrl: 'https://github.com/login/oauth/authorize',
    accessTokenUrl: 'https://github.com/login/oauth/access_token',
    profileUrl: 'https://api.github.com/user',
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    scope: 'user:email',
    getLoginUrl() {
      return `${this.loginUrl}?client_id=${this.clientId}&scope=${this.scope}`;
    }
  },
  facebook: {
    loginUrl: 'https://www.facebook.com/v2.9/dialog/oauth',
    accessTokenUrl: 'https://graph.facebook.com/v2.9/oauth/access_token',
    clientId: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    redirectUri: process.env.NODE_ENV === 'production' ? 'https://aqueous-lake-61312.herokuapp.com/oauth/facebook' : 'http://localhost:8000/oauth/facebook',
    responseCode: 'code',
    getLoginUrl() {
      return `${this.loginUrl}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=${this.responseCode}`;
    }
  }
};
