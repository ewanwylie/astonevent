const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/users');
const userprofile = require('./routes/api/userprofile');
const postevents = require('./routes/api/posts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Return the index for any other GET request
app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, './react-front-end/public')});
});

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useUnifiedTopology: true }, { useNewUrlParser: true }) // To get rid of Deprecation Warrning
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// // Use Routes for each api
app.use('/api/users', users);
app.use('/api/userprofile', userprofile);
app.use('/api/postevents', postevents);

//connect on port 3000 
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));