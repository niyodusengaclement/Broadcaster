import joi from 'joi';

const locationValidation = (input) => {
  const validateSchema = {
    location: joi.string().required(),
  };
  return joi.validate(input, validateSchema);
};
export default locationValidation;
