const nlu = require('../config/watson');
const Promise = require('bluebird');

function analyze(text) {
  const parameters = {
    text: text,
    features: {
      sentiment: {},
      categories: {
        limit: 5
      },
      entities: {
        sentiment: true,
        limit: 5
      },
      concepts: {
        sentiment: true,
        limit: 5
      }
    }
  };

  const result = {};

  return new Promise((resolve, reject) => {
    nlu.analyze(parameters, (err, response) => {
      if (err) return reject(err);

      result.sentiment = response.sentiment.document.score;

      result.categories = response.categories.reduce((array, category) => {
        return array.concat(category.label.split('/'));
      }, []).filter((item,pos,self) => {
        return !!item && self.indexOf(item) === pos;
      }).join(',');

      result.entities = response.entities;
      result.concepts = response.concepts;

      return resolve(result);
    });
  });

}

module.exports = { analyze };
