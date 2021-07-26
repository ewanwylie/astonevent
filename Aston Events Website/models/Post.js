const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for users to post events
const PostSchema = new Schema({
  category: [
    {
      sport: {
        type: String,
        required: true
      },
      culture: {
        type: String,
        required: true
      },
      other: {
        type: String,
        required: true
      },
    }
  ],
  name: {
    type: String,
    required: true
  },
  datetime: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  place: {
      type: String
  },
  picture: {
    type: Object
  }
})

module.exports = Post = mongoose.model('post', PostSchema);
