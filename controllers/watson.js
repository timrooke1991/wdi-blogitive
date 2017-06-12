const nlu = require('../config/watson.js');
const rp = require('request-promise');

var parameters = {
  'url': 'http://www.independent.co.uk/news/business/news/pound-sterling-latest-updates-uk-election-2017-result-hung-parliament-currency-exchange-rate-a7785301.html',
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
    }
  }
};

nlu.analyze(parameters, function(err, response) {
  if (err) {
    console.log('error:', err);
  } else {
    console.log(JSON.stringify(response, null, 2));
  }
});

console.log('I get here');

// module.exports = {};

// function getPost(req, res, next) {
//   console.log('I am called!');
//   natural_language_understanding.analyze(parameters, function(err, response) {
//     if (err) {
//       console.log('error:', err);
//     } else {
//       console.log(JSON.stringify(response, null, 2));
//     }
//   });
// };

// module.exports = natural_language_understanding;
