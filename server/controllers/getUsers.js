import userModal from '../modals/userModal';

const getUsers = (req, res) => {
  try {
    return res.status(200).json({
      status: 200,
      data: userModal.allUsers(),
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err,
    });
  }
};
export default getUsers;
