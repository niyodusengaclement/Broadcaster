import userModal from '../modals/userModal';

const isAdmin = (req, res, next) => {
  const reportId = parseInt(req.params.red_Flag_Id, 10);
  const report = userModal.findReport(reportId);
  if (req.user.isAdmin !== true) {
    return res.status(403).json({
      status: 403,
      error: 'Access forbidden! This action performed by Admin only',
    });
  }
  req.myReport = report;
  return next();
};
export default isAdmin;
