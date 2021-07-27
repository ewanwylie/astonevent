const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const passport = require("passport");

// Post model
const Post = require("../../models/Events");
// Profile model
const Profile = require("../../models/Profile");

// Validation
const validatePostInput = require("../../validation/event");

// @route   GET api/posts
// @desc    Tests post route
// @access  Public

router.event("/", (req, res) => {
  const newEvent = new Event({
    user: req.body.user,
    // text: req.body.text,
    friendsName: req.body.friendsName,
    bestName: req.body.bestName
  });
  newEvent.save().then(Event => res.json(Event));
});

// @route   GET api/posts/get/
// @desc    GET all the information from the POST request above
// @access  Public

router.get("/get/", (req, res) => {
  Event.find().then(Event => res.json(Event));
});

// @route   DELETE api/posts/delete/id
// @desc    Delete user and profile
// @access  Private

router.delete("/delete/:id", function(request, response) {
  let id;
  try {
    id = new mongodb.ObjectID(request.params.id);
  } catch (error) {
    response.status(400);
    return;
  }
  const searchObject = { _id: request.params.id };
  Post.deleteOne(searchObject, function(error, result) {
    if (error) {
      return response.sendStatus(500).send(error);
    } else if (result.deletedCount) {
      return response.sendStatus(200);
    } else {
      return response.sendStatus(404);
    }
  });
});

module.exports = router;
