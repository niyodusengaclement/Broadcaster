import joi from 'joi';

const signupValidation = (input) => {
  const validateSchema = {
    firstname: joi.string().required(),
    lastname: joi.string().required(),
    email: joi.string().email().required(),
    phoneNumber: joi.string().required().min(10).max(10),
    username: joi.string().required().alphanum(),
    password: joi.string().required().min(6),
    id: joi.optional(),
    isAdmin: joi.optional(),
  };
  return joi.validate(input, validateSchema);
};
export default signupValidation;
