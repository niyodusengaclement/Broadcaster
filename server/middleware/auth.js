import jwt from 'jsonwebtoken';

const userAuthentication = (req, res, next) => {
  const check = req.header('x-auth');
  if (!check) {
    return res.status(401).json({
      status: 401,
      error: 'No token provided! Provide token and try again',
    });
  }
  try {
    const secret = process.env.JWT_TOKEN;
    const options = { expiresIn: '365d', issuer: 'www.jwt.io' };
    const decoded = jwt.verify(check, secret, options);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      status: 401,
      error: 'Invalid token provided, check your token please',
    });
  }
  return {};
};
export default userAuthentication;
