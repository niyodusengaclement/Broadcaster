import users from '../asset/users';

class UserModal {
  constructor() {
    this.user = users;
  }

  findUser(email) {
    return this.user.find((data) => data.email === email);
  }

  addUser(data) {
    return this.user.push(data);
  }
}
export default new UserModal();
