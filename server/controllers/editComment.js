import reportValidation from '../helpers/newReportValidation';

const editComment = (req, res) => {
  try {
    const { error } = reportValidation(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message.split('"').join(''),
      });
    }
    const report = req.myReport;
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
