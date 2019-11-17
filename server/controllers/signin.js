import bcrypt from 'bcrypt';
import signinValidation from '../helpers/signinValidation';
import userModal from '../modals/userModal';

const performTask = async (req, res) => {
  const exist = userModal.findUser(req.body.email);
  if (exist) {
    const isValid = await bcrypt.compare(req.body.password, exist.password);
    if (!isValid) {
      return res.status(401).json({
        status: 401,
        error: 'Invalid email or password',
      });
    }
    const token = userModal.generateToken(exist);
    return res.status(200).header('x-auth', token).json({
      status: 200,
      message: 'User is successfully logged in',
      data: {
        ID: exist.id,
        Token: token,
      },
    });
  }
  return {};
};

const signin = (req, res) => {
  const { error } = signinValidation(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }
  const exist = userModal.findUser(req.body.email);
  if (!exist) {
    return res.status(401).json({
      status: 401,
      error: 'Invalid email or password',
    });
  }
  return performTask(req, res);
};
export default signin;
