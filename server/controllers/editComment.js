import userModal from '../modals/userModal';
import reportValidation from '../helpers/newReportValidation';

const editComment = (req, res) => {
  try {
    const reportId = parseInt(req.params.red_Flag_Id, 10);
    const report = userModal.findReport(reportId);
    if (!report) {
      return res.status(404).json({
        status: 404,
        error: 'Record not found',
      });
    }
    if (req.user.id !== report.createdBy) {
      return res.status(403).json({
        status: 403,
        error: 'Access forbidden! This is not your record',
      });
    }
    if (report.status === 'pending') {
      return res.status(403).json({
        status: 403,
        error: 'Access forbidden! Status is not yet changed, wait until they give you response',
      });
    }
    const { error } = reportValidation(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }
    report.title = req.body.title;
    report.type = req.body.type;
    report.comment = req.body.comment;
    report.location = req.body.location;
    report.tag = req.body.tag;
    return res.status(200).json({
      status: 200,
      data: [{
        id: report.id,
        message: 'Updated red-flag record’s comment',
      },
      ],
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: 'Server error',
    });
  }
};
export default editComment;
