import bcrypt from 'bcryptjs';
import notification from '../../modals/notification';
import userModal from '../../modals/v2/userModal';
import validation from '../../helpers/validation';

class Users {
  async signup(req, res) {
    const { error } = validation.signupValidation(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message.split('"').join(''),
      });
    }
    try {
      const exist = await userModal.findUser(req.body.email);
      if (exist) {
        return res.status(401).json({
          status: 401,
          error: 'Email already exist',
        });
      }
      const passHash = await userModal.hashPassword(req.body.password);
      const userInfo = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.phoneNumber,
        req.body.username,
        passHash,
      ];
      const user = await userModal.addUser(userInfo);
      const mailMsg = 'You have successfully created account on The Broadcaster Community Site, Welcome once again';
      if (user) {
        const userToken = userModal.generateToken(user);
        notification.SendNotification(user, mailMsg);
        return res.status(201).header('x-auth', userToken).json({
          status: 201,
          message: 'User created successfully',
          data: {
            id: user.id,
            username: user.username,
            email: user.email,
            phoneNumber: user.phone,
            token: userToken,
          },
        });
      }
      return user;
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Internal Server Error',
      });
    }
  }

  async signin(req, res) {
    const { error } = validation.signinValidation(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message.split('"').join(''),
      });
    }
    try {
      const exist = await userModal.findUser(req.body.email);
      if (!exist) {
        return res.status(401).json({
          status: 401,
          error: 'Invalid email or password',
        });
      }
      const isValid = await bcrypt.compare(req.body.password, exist.password);
      if (!isValid) {
        return res.status(401).json({
          status: 401,
          error: 'Invalid email or password',
        });
      }
      const userToken = userModal.generateToken(exist);
      return res.status(200).header('x-auth', userToken).json({
        status: 200,
        message: 'User is successfully logged in',
        data: {
          id: exist.id,
          username: exist.username,
          email: exist.email,
          phoneNumber: exist.phone,
          token: userToken,
        },
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Internal Server Error',
      });
    }
  }

  getUsers(req, res) {
    return res.status(200).json({
      status: 200,
      data: userModal.allUsers(),
    });
  }

  forgetPassword(req, res) {
    const { error } = validation.emailValidator(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message.split('"').join(''),
      });
    }
    const isExist = userModal.findUser(req.body.email);
    if (!isExist) {
      return res.status(404).json({
        status: 404,
        error: 'Email not found',
      });
    }
    const token = userModal.generateResetToken(isExist, isExist.password);
    const url = `https://andelabroadcaster.herokuapp.com/api/v1/auth/reset/${isExist.email}/${token}`;
    const msg = `You requested for a password reset, kindly click this link ${url} to reset your password`;
    notification.sendEmail(isExist, msg);
    return res.status(200).json({
      status: 200,
      message: 'Link to reset password sent to your email',
    });
  }

  async resetPassword(req, res) {
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
  }
}
export default new Users();
