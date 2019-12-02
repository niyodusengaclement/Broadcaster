import { it } from 'mocha';
import chai, { request, expect } from 'chai';
import http from 'chai-http';
import userData from '../../asset/user';
import app from '../../../server';

chai.use(http);

const signupTest = () => {
  it('Should not create account if there is missing field', (done) => {
    request(app)
      .post('/api/v2/auth/signup')
      .send(userData.missingSignupField)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.a.property('status', 400);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not be able to create account if email already registered', (done) => {
    request(app)
      .post('/api/v2/auth/signup')
      .send(userData.emailTaken)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error', 'Email already exist');
        done();
      });
  });
  it('User should be able to create account if he provide proper info', (done) => {
    request(app)
      .post('/api/v2/auth/signup')
      .send(userData.allowedSignup)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.a.property('status', 201);
        expect(res.body).to.have.a.property('message', 'User created successfully');
        expect(res.body).to.have.a.property('data');
        expect(res.header).to.have.a.property('x-auth');
        done();
      });
  });
};

export default signupTest;
