import locationValidation from '../helpers/locationValidation';

const changeLocation = (req, res) => {
  const { error } = locationValidation(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }
  try {
    const report = req.myReport;
    report.location = req.body.location;
    return res.status(200).json({
      status: 200,
      data: [{
        id: report.id,
        message: 'Updated red-flag record’s location',
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
export default changeLocation;
