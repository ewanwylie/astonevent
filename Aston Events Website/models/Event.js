const mongoose = require('mongoose');

// Create Schema for users to post events
const EventSchema = new mongoose.Schema({
  category:
  {
    type: String,
    required: true
  },
  /*  sport: {
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
},*/
  name: {
    type: String,
    required: true
  },
  datetime: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  place: {
    type: String,
    require: true
  },
  picture: {
    type: Array,
    require: false
  }
})

const Event = mongoose.model('events', EventSchema);

module.exports = Event;
