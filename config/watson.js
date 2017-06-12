const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const nlu = new NaturalLanguageUnderstandingV1({
  'username': process.env.WATSON_USERNAME,
  'password': process.env.WATSON_PASSWORD,
  'version_date': '2017-02-27'
});

module.exports = nlu;
