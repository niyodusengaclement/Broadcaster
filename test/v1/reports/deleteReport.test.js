import { it } from 'mocha';
import chai, { request, expect } from 'chai';
import http from 'chai-http';
import app from '../../../server';
import reportData from '../../asset/report';

chai.use(http);

const deleteReportTest = () => {
  it('User should not delete comment if he doesn\'t provided token', (done) => {
    request(app)
      .delete('/api/v1/red-flags/1')
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not delete comment if he provide invalid or malformatted token', (done) => {
    request(app)
      .delete('/api/v1/red-flags/1')
      .set(reportData.invalidToken)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not delete comment if no record match the ID provided', (done) => {
    request(app)
      .delete('/api/v1/red-flags/99')
      .set(reportData.validToken)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.a.property('status', 404);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not delete report of others', (done) => {
    request(app)
      .delete('/api/v1/red-flags/3')
      .set(reportData.validToken)
      .end((err, res) => {
        expect(res).to.have.status(403);
        expect(res.body).to.have.a.property('status', 403);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not delete report if its status is pending', (done) => {
    request(app)
      .delete('/api/v1/red-flags/2')
      .set(reportData.validToken)
      .end((err, res) => {
        expect(res).to.have.status(403);
        expect(res.body).to.have.a.property('status', 403);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should be able to delete report if he provide token and valid report ID ', (done) => {
    request(app)
      .delete('/api/v1/red-flags/4')
      .set(reportData.validToken)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.a.property('status', 200);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
};

export default deleteReportTest;
