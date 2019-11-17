import users from '../asset/users';

const getUsers = (req, res) => {
  try {
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
