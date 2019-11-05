import { it } from 'mocha';
import chai, { request, expect } from 'chai';
import http from 'chai-http';
import app from '../../server';
import reportData from '../asset/report';

chai.use(http);

const getAllReportsTest = () => {
  it('User should not read reports if no token provided', (done) => {
    request(app)
      .get('/api/v1/red-flags')
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not read reports if he provide invalid or malformatted token', (done) => {
    request(app)
      .get('/api/v1/red-flags')
      .set(reportData.invalidToken)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not get report if there is no stored records', (done) => {
    request(app)
      .get('/api/v1/red-flags')
      .set(reportData.validToken)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.a.property('status', 404);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should get reports if there is no error', (done) => {
    request(app)
      .get('/api/v1/red-flags')
      .set(reportData.validToken)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.a.property('status', 200);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
};

export default getAllReportsTest;
