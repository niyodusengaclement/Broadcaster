import userModal from '../modals/userModal';

const deleteRecord = (req, res) => {
  try {
    const allReports = userModal.report;
    const report = req.myReport;
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
