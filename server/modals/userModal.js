import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import users from '../asset/users';
import reportData from '../asset/report';

class UserModal {
  constructor() {
    this.user = users;
    this.report = reportData;
  }

  findUser(email) {
    return this.user.find((data) => data.email === email);
  }

  addUser(data) {
    return this.user.push(data);
  }

  findReport(id) {
    return this.report.find((data) => data.id === id);
  }

  findUserById(id) {
    return this.user.find((data) => data.id === id);
  }

  generateToken(info) {
    try {
      this.payload = {
        email: info.email,
        username: info.username,
        id: info.id,
        isAdmin: info.isAdmin,
      };
      const secret = process.env.JWT_TOKEN;
      const options = { expiresIn: '365d', issuer: 'www.jwt.io' };
      const token = jwt.sign(this.payload, secret, options);
      return token;
    } catch (err) {
      return err;
    }
  }

  async hashPassword(password) {
    try {
      this.salt = await bcrypt.genSalt(10);
      this.passHash = await bcrypt.hash(password, this.salt);
      return this.passHash;
    } catch (err) {
      return err;
    }
  }
}
export default new UserModal();