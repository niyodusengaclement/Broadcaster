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
}
export default new UserModal();
