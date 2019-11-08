import userModal from '../modals/userModal';

const oneRecord = (req, res) => {
  try {
    const reportId = parseInt(req.params.redFlagId, 10);
    const report = userModal.findReport(reportId);
    if (report) {
      return res.status(200).json({
        status: 200,
        data: report,
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'No data found',
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: 'Server error',
    });
  }
};
export default oneRecord;
