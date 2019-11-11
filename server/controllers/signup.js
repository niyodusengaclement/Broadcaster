import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import signupValidation from '../helpers/signupValidation';
import userModal from '../modals/userModal';
import notification from '../modals/notification';


const signup = async (req, res) => {
  const all = userModal.user;
  const newId = all.length + 1;

  const salt = await bcrypt.genSalt(10);
  const passHash = await bcrypt.hash(req.body.password, salt);
  const userInfo = {
    id: newId,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    username: req.body.username,
    password: passHash,
    isAdmin: false,
  };
  const { error } = signupValidation(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }
  const exist = userModal.findUser(req.body.email);
  if (exist) {
    return res.status(401).json({
      status: 401,
      error: 'Email already exist',
    });
  }

  const payload = {
    email: req.body.email,
    username: req.body.username,
    id: newId,
    isAdmin: userInfo.isAdmin,
  };
  const secret = process.env.JWT_TOKEN;
  const options = { expiresIn: '365d', issuer: 'www.jwt.io' };

  const token = jwt.sign(payload, secret, options);
  const mailMsg = 'You have successfully created account on The Broadcaster Community Site, Welcome once again';
  if (userModal.addUser(userInfo)) {
    notification.sendEmail(userInfo, mailMsg);
    notification.sendSms(userInfo, mailMsg);
    return res.status(201).header('x-auth', token).json({
      status: 201,
      message: 'User created successfully',
      data: {
        ID: newId,
        Token: token,
      },
    });
  }
  return {};
};
export default signup;
