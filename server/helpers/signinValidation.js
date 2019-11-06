import joi from 'joi';

const signinValidation = (input) => {
  const validateSchema = {
    email: joi.string().email().required(),
    password: joi.string().required(),
  };
  return joi.validate(input, validateSchema);
};
export default signinValidation;
