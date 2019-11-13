import users from '../asset/users';

const getUsers = (req, res) => {
  try {
    if (req.user.isAdmin !== true) {
      return res.status(403).json({
        status: 403,
        error: 'Access denied! This action performed by Admin only',
      });
    }
    return res.status(200).json({
      status: 200,
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err,
    });
  }
};
export default getUsers;
