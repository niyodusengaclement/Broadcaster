import userModal from '../modals/userModal';

const resetPassword = async (req, res) => {
  const { password, confirmPassword } = req.body;
  if (!password || password.length < 6) {
    return res.status(400).json({
      status: 400,
      error: 'Password must be atleast 6 characters long',
    });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({
      status: 400,
      error: 'Password doesn\'t match',
    });
  }
  const user = userModal.findUser(req.user.email);
  const newPassword = await userModal.hashPassword(password);
  user.password = newPassword;
  return res.status(200).json({
    status: 200,
    message: 'Password updated successfully',
  });
};
export default resetPassword;
