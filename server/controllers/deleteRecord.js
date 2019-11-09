import userModal from '../modals/userModal';

const deleteRecord = (req, res) => {
  try {
    const reportId = parseInt(req.params.red_Flag_Id, 10);
    const allReports = userModal.report;
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
    const index = allReports.indexOf(report);
    allReports.splice(index, 1);
    return res.status(200).json({
      status: 200,
      data: [{
        id: report.id,
        message: 'Red-flag record has been deleted',
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
export default deleteRecord;
