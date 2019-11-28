import joi from 'joi';

const validation = {
  emailValidator(input) {
    const emailSchema = {
      email: joi.string().email().required(),
    };
    return joi.validate(input, emailSchema);
  },
  locationValidation(input) {
    const validateSchema = {
      location: joi.string().required(),
    };
    return joi.validate(input, validateSchema);
  },
  reportValidation(data) {
    const reportSchema = {
      id: joi.optional(),
      title: joi.string().required(),
      type: joi.string().required(),
      createdOn: joi.optional(),
      createdBy: joi.optional(),
      comment: joi.string().required(),
      location: joi.optional(),
      status: joi.optional(),
      images: joi.optional(),
      videos: joi.optional(),
      tag: joi.optional(),
    };
    return joi.validate(data, reportSchema);
  },
  signinValidation(input) {
    const validateSchema = {
      email: joi.string().email().required(),
      password: joi.string().required(),
    };
    return joi.validate(input, validateSchema);
  },
  signupValidation(input) {
    const validateSchema = {
      firstname: joi.string().required(),
      lastname: joi.string().required(),
      email: joi.string().email().required(),
      phoneNumber: joi.string().required().min(10).max(14),
      username: joi.string().required().alphanum(),
      password: joi.string().required().min(6),
      id: joi.optional(),
      isAdmin: joi.optional(),
    };
    return joi.validate(input, validateSchema);
  },
};
export default validation;
