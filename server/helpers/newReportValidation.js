import joi from 'joi';

const reportValidation = (data) => {
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
};
export default reportValidation;
