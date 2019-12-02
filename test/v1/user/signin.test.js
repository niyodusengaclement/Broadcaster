import { it } from 'mocha';
import chai, { request, expect } from 'chai';
import http from 'chai-http';
import userData from '../../asset/user';
import app from '../../../server';

chai.use(http);

const signinTest = () => {
  it('User Should not be able to signin if he doesn\'t provide email or password', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send(userData.missingSigninField)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.a.property('status', 400);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not be able to signin if he is not registered', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send(userData.invalidUser)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error', 'Invalid email or password');
        done();
      });
  });
  it('User should be able to Login if he provide exist email and password', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send(userData.allowedSignin)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.a.property('status', 200);
        expect(res.body).to.have.a.property('message', 'User is successfully logged in');
        expect(res.body).to.have.a.property('data');
        expect(res.header).to.have.a.property('x-auth');
        done();
      });
  });
};

export default signinTest;
