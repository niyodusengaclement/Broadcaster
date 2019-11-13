import moment from 'moment';
import reportValidation from '../helpers/newReportValidation';
import upload from '../modals/upload';
import reportData from '../asset/report';

const newRecord = (req, res) => {
  try {
    // vaidate input required fields
    const { error } = reportValidation(req.body);

    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }
    // upload codes goes here
    const reportId = reportData.length + 1;
    const success = res.status(201).json({
      status: 201,
      data: {
        id: reportId,
        message: 'Created red-flag record',
      },
    });
    if (!req.files) {
      reportData.push({
        id: reportId,
        title: req.body.title,
        type: req.body.type,
        createdOn: moment().format('MMMM Do YYYY, h:mm:ss a'),
        createdBy: req.user.id,
        comment: req.body.comment,
        location: req.body.location,
        status: 'pending',
        images: [],
        videos: [],
        tag: req.body.tag,
      });
      return success;
    }
    upload(req);
    return success;
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      error: err,
    });
  }
};
export default newRecord;
