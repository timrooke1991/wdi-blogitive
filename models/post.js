const mongoose = require('mongoose');
const s3 = require('../lib/s3');
const timeAgo = require('time_ago_in_words');
const naturalLanguage = require('../lib/naturalLanguage');
const markdown = require('markdown').markdown;

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  sentiment: { type: Number },
  entities: []
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function belongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

commentSchema.pre('save', function removeImage(next) {
  naturalLanguage.analyze(this.content)
    .then((result) => {
      for(const key in result) {
        this[key] = result[key];
      }
      next();
    })
    .catch(next);
});

commentSchema
  .virtual('timeAgo')
  .get(function getImageSRC() {
    return timeAgo(this.createdAt);
  });

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tagline: { type: String },
  image: { type: String, required: true },
  body: { type: String, required: true },
  sentiment: { type: Number },
  categories: { type: String },
  entities: [],
  concepts: [],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  createdAt: {type: Date, default: Date.now},
  comments: [ commentSchema ]
});

postSchema.methods.belongsTo = function belongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

postSchema
  .virtual('timeAgo')
  .get(function getImageSRC() {
    return timeAgo(this.createdAt);
  });

postSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
  });

postSchema.pre('save', function removeImage(next) {
  naturalLanguage.analyze(this.body)
    .then((result) => {
      for(const key in result) {
        this[key] = result[key];
      }

      next();
    })
    .catch(next);
});

postSchema
  .virtual('HTMLbody')
  .get(function getMarkdown() {
    // add markdown parser
    return markdown.toHTML(this.body);
  });

postSchema.pre('remove', function removeImage(next) {
  if(!this.image) return next();
  s3.deleteObject({ Key: this.image }, next);
});

module.exports = mongoose.model('Post', postSchema);
