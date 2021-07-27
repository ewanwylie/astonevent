const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const passport = require("passport");

// Event model
const Event = require("../../models/Event");
// Profile model
const UserProfile = require("../../models/UserProfile");

// Validation
const validateEventInput = require("../../validation/event");

// @route   GET api/postevents
// @desc    Tests post route
// @access  Public

router.post("/", (req, res) => {
  const newEvent = new Event({
    user: req.body.user,
    // text: req.body.text,
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
