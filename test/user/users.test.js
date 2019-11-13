import { it } from 'mocha';
import chai, { request, expect } from 'chai';
import http from 'chai-http';
import app from '../../server';
import reportData from '../asset/report';

chai.use(http);

const getUsersTest = () => {
  it('Admin should not get list of users if he doesn\'t provided token', (done) => {
    request(app)
      .get('/api/v1/auth/users')
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('Admin should not get list of users if he provide invalid or malformatted token', (done) => {
    request(app)
      .get('/api/v1/auth/users')
      .set(reportData.invalidAdminToken)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not get list of users if he is not Admin ', (done) => {
    request(app)
      .get('/api/v1/auth/users')
      .set(reportData.validToken)
      .end((err, res) => {
        expect(res).to.have.status(403);
        expect(res.body).to.have.a.property('status', 403);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('Admin should be able get list of users if he provide token and valid report ID ', (done) => {
    request(app)
      .get('/api/v1/auth/users')
      .set(reportData.validAdminToken)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.a.property('status', 200);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
};

export default getUsersTest;
