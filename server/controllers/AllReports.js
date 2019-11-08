import reportData from '../asset/report';

const allReports = (rq, res) => {
  if (reportData.length >= 1) {
    return res.status(200).json({
      status: 200,
      data: reportData,
    });
  }
  return res.status(404).json({
    status: 404,
    error: 'No data found',
  });
};
export default allReports;
