import userModal from '../modals/userModal';

const grantAccess = (req, res, next) => {
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
  req.myReport = report;
  return next();
};
export default grantAccess;
