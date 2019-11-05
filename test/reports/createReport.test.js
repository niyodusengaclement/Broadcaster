import { it } from 'mocha';
import chai, { request, expect } from 'chai';
import http from 'chai-http';
import app from '../../server';
import reportData from '../asset/report';

chai.use(http);
chai.expect();
const createReportTest = () => {
  it('User should not create report if no token provided', (done) => {
    request(app)
      .post('/api/v1/red-flags')
      .send(reportData.validReport)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not create report if he provide invalid/malformatted token', (done) => {
    request(app)
      .post('/api/v1/red-flags')
      .set(reportData.invalidToken)
      .send(reportData.validReport)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not create report if there is important fields are missing', (done) => {
    request(app)
      .post('/api/v1/red-flags')
      .set(reportData.validToken)
      .send(reportData.missingFieldReport)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.a.property('status', 400);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should create report if there is no mistake', (done) => {
    request(app)
      .post('/api/v1/red-flags')
      .set(reportData.validToken)
      .send(reportData.validReport)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.a.property('status', 400);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
};

export default createReportTest;
