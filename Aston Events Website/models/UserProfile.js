const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
});

module.exports = UserProfile = mongoose.model('userprofile', UserProfileSchema);
