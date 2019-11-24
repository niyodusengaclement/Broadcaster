import signupValidation from '../helpers/signupValidation';
import userModal from '../modals/userModal';
import notification from '../modals/notification';
import users from '../asset/users';

const newUser = async (req) => {
  const newId = users.length + 1;
  const passHash = await userModal.hashPassword(req.body.password);
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
  return userInfo;
};

const insertData = async (req, res) => {
  const userInfo = await newUser(req);
  const token = await userModal.generateToken(userInfo);
  const mailMsg = 'You have successfully created account on The Broadcaster Community Site, Welcome once again';
  if (userModal.addUser(userInfo)) {
    notification.SendNotification(userInfo, mailMsg);
    return res.status(201).header('x-auth', token).json({
      status: 201,
      message: 'User created successfully',
      data: {
        ID: userInfo.id,
        Token: token,
      },
    });
  }
  return {};
};

const signup = async (req, res) => {
  const { error } = signupValidation(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message.split('"').join(''),
    });
  }
  const exist = userModal.findUser(req.body.email);
  if (exist) {
    return res.status(401).json({
      status: 401,
      error: 'Email already exist',
    });
  }
  await insertData(req, res);
  return {};
};
export default signup;
