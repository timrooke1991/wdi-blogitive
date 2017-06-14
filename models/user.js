const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const s3 = require('../lib/s3');

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  image: { type: String },
  password: { type: String },
  instagramId: { type: Number },
  githubId: { type: Number },
  facebookId: { type: Number }
});

userSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
  });

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

// lifecycle hook - mongoose middleware
userSchema.pre('validate', function checkPassword(next) {
  console.log(this);
  if((!this.password && !this.instagramId) && (!this.password && !this.githubId) && (!this.password && !this.facebookId)) {
    this.invalidate('password', 'required');
  }

  if(this.password && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function checkPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

//pre remove hook
userSchema.pre('remove', function removeUserPosts(next) {
  this.model('Post')
    .remove({ createdBy: this.id })
    .then(() => {
      return this.model('Post').update(
        { 'comments.createdBy': this.id }, // this is the query
        { $pull: { comments: { createdBy: this.id } } } // this is the update
      );
    })
    .then(next)
    .catch(next);
});

userSchema.pre('remove', function removeImage(next) {
  if(!this.image) return next();
  s3.deleteObject({ Key: this.image }, next);
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
