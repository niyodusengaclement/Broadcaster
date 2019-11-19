import jwt from 'jsonwebtoken';
import userModal from '../modals/userModal';

const verifyToken = (req, res, next) => {
  const { email, token } = req.params;
  if (!email || !token) {
    return res.status(401).json({
      status: 401,
      error: 'Invalid reset password link or link has expired',
    });
  }
  try {
    const user = userModal.findUser(email);
    const secret = user.password;
    const options = { expiresIn: '1d', issuer: 'www.jwt.io' };
    const decoded = jwt.verify(token, secret, options);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({
      status: 401,
      error: 'Invalid reset password link or link has expired',
    });
  }
};
export default verifyToken;
