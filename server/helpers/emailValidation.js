import joi from 'joi';

const emailValidator = (input) => {
  const emailSchema = {
    email: joi.string().email().required(),
  };
  return joi.validate(input, emailSchema);
};
export default emailValidator;
