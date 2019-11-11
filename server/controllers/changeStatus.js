import userModal from '../modals/userModal';
import notification from '../modals/notification';

const changeStatus = (req, res) => {
  try {
    const reportId = parseInt(req.params.red_Flag_Id, 10);
    const report = userModal.findReport(reportId);
    if (!report) {
      return res.status(404).json({
        status: 404,
        error: 'Record not found',
      });
    }
    if (req.user.isAdmin !== true) {
      return res.status(403).json({
        status: 403,
        error: 'Access forbidden! This action performed by Admin only',
      });
    }
    if (!req.body.status || req.body.status.length < 4) {
      return res.status(400).json({
        status: 400,
        error: 'Status is required and atleast with 4 characters long',
      });
    }
    const userId = report.createdBy;
    const user = userModal.findUserById(userId);
    report.status = req.body.status;
    const message = `Your red-flag has been reviewed by Authoroties in duty and status has changed to ${report.status}.
    The Broadcaster (c)2019`;
    notification.sendEmail(user, message);
    notification.sendSms(user, message);
    return res.status(200).json({
      status: 200,
      data: [{
        id: report.id,
        message: 'Updated red-flag record’s status',
      },
      ],
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err,
    });
  }
};
export default changeStatus;
