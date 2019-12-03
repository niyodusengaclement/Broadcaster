import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import users from '../../asset/users';
import reportData from '../../asset/report';
import db from './db';

class UserModal {
  constructor() {
    this.user = users;
    this.report = reportData;
    this.options = { expiresIn: '365d', issuer: 'www.jwt.io' };
  }

  async findUser(email) {
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return rows[0];
  }

  async addUser(data) {
    const text = 'INSERT INTO users (firstname, lastname, email, phone, username, password) values ($1, $2, $3, $4, $5, $6) returning *';
    const { rows } = await db.query(text, data);
    return rows[0];
  }

  findReport(id) {
    return this.report.find((data) => data.id === id);
  }

  findUserById(id) {
    return this.user.find((data) => data.id === id);
  }

  allUsers() {
    return this.user;
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
      const token = jwt.sign(this.payload, secret, this.options);
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

  generateResetToken(info, secret) {
    try {
      const payload = {
        email: info.email,
        username: info.username,
        id: info.id,
        isAdmin: info.isAdmin,
      };
      const token = jwt.sign(payload, secret, this.options);
      return token;
    } catch (err) {
      return err;
    }
  }
}
export default new UserModal();
