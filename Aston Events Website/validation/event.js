const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEventInput(data) {
  let errors = {};

  data.category = !isEmpty(data.category) ? data.category : '';
  data.name = !isEmpty(data.name) ? data.name : '';
  data.datetime = !isEmpty(data.datetime) ? data.datetime : '';
  data.description = !isEmpty(data.description) ? data.description : '';
  data.place = !isEmpty(data.place) ? data.place : '';
  data.picture = !isEmpty(data.picture) ? data.picture : '';


  if (Validator.isEmpty(data.category)) {
    errors.category = 'Category field is required';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (!Validator.isEmpty(data.datetime)) {
    errors.datetime = 'Date and Time field is required';
  }

  if (!Validator.isLength(data.description, { max: 200 })) {
    errors.description = 'Description must be less than 200 characters';
  }


  if (!Validator.isEmpty(data.place)) {
    errors.place = 'Place field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
