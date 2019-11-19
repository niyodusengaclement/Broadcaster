import notification from '../modals/notification';
import emailValidator from '../helpers/emailValidation';
import userModal from '../modals/userModal';

const doAction = async (req, res) => {
  try {
    const isExist = userModal.findUser(req.body.email);
    const token = await userModal.generateResetToken(isExist, isExist.password);
    const url = `https://andelabroadcaster.herokuapp.com/api/v1/auth/reset/${isExist.email}/${token}`;
    const msg = `You requested for a password reset, kindly click this link ${url} to reset your password`;
    await notification.sendEmail(isExist, msg);
    return res.status(200).json({
      status: 200,
      message: 'Link to reset password sent to your email',
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: 'Server error',
    });
  }
};
const forgotPassword = async (req, res) => {
  const { error } = emailValidator(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }
  const isExist = userModal.findUser(req.body.email);
  if (!isExist) {
    return res.status(404).json({
      status: 404,
      error: 'Email not found',
    });
  }
  await doAction(req, res);
  return {};
};
export default forgotPassword;
