const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.phone = !isEmpty(data.phone) ? data.phone : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'First Name field is required';
  }

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First Name field is required';
  }
    
  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last Name field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'Phone field is required';
  }

  if (!Validator.isLength(data.phone, { min: 11, max: 11 })) {
    errors.phone = 'Mobile number must contain 11 digits';
  }


  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (Validator.isStrongPassword(data.password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})) {
    errors.password = 'Password meets requirements';
  } else {
    errors.password = 'Password must be at least 8 characters, have one uppercase letter, one lowercase letter, one number and one symbol'
  

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  } else {
    if (!Validator.equals(data.password, data.password2)) {
      errors.password2 = 'Passwords must match';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
