const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCategoryInput(data) {
  let errors = {};

  data.sport = !isEmpty(data.sport) ? data.sport : '';
  data.culture = !isEmpty(data.culture) ? data.culture : '';
  data.other = !isEmpty(data.other) ? data.other : '';

 { if (Validator.isEmpty(data.title)) 
	errors.sport = 'Sport field is required';
	else if (Validator.isEmpty(data.culture)) 
	errors.culture = 'Culture field is required';
	else if (Validator.isEmpty(data.other)) 
    errors.other = 'Company field is required';
   }

   return {
    errors,
    isValid: isEmpty(errors)
  };
};