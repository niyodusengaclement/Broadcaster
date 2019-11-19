import { it } from 'mocha';
import chai, { request, expect } from 'chai';
import http from 'chai-http';
import app from '../../server';
import reportData from '../asset/report';
import userData from '../asset/user';

chai.use(http);

const resetPasswordTest = () => {
  it('User should not reset password if He provide invalid or expired link', (done) => {
    request(app)
      .patch(`/api/v1/auth/reset/clementmistico@gmail.com/${reportData.invalidToken}`)
      .send(userData.validPassword)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not reset password if He provide mismatch password (password doesn\'t match) ', (done) => {
    request(app)
      .patch(`/api/v1/auth/reset/${userData.resetToken}`)
      .send(userData.invalidPassword)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.a.property('status', 400);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should reset password if He provide valid token and matched password ', (done) => {
    request(app)
      .patch(`/api/v1/auth/reset/${userData.resetToken}`)
      .send(userData.validPassword)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.a.property('status', 200);
        expect(res.body).to.have.a.property('message');
        done();
      });
  });
};
export default resetPasswordTest;
