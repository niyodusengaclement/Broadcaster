import userModal from '../modals/userModal';
import notification from '../modals/notification';

const performTask = (req, res) => {
  try {
    const report = req.myReport;
    const userId = report.createdBy;
    const user = userModal.findUserById(userId);
    report.status = req.body.status;
    const message = `Your red-flag has been reviewed by Authoroties in duty and status has changed to ${report.status}.
    The Broadcaster (c)2019`;
    notification.SendNotification(user, message);
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

const changeStatus = (req, res) => {
  if (!req.myReport) {
    return res.status(404).json({
      status: 404,
      error: 'Record not found',
    });
  }
  if (!req.body.status || req.body.status.length < 4) {
    return res.status(400).json({
      status: 400,
      error: 'Status is required and atleast with 4 characters long',
    });
  }
  return performTask(req, res);
};

export default changeStatus;
