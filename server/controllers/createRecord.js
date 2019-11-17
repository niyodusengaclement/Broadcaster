import reportValidation from '../helpers/newReportValidation';
import upload from '../modals/upload';

const newRecord = (req, res) => {
  try {
    const { error } = reportValidation(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }
    if (!req.files) return upload.saveData(req, res);
    upload.uploadVideos(req);
    upload.uploadPhotos(req);
    return upload.saveData(req, res);
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Server error',
      error: err,
    });
  }
};
export default newRecord;
