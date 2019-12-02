import { it } from 'mocha';
import chai, { request, expect } from 'chai';
import http from 'chai-http';
import app from '../../../server';
import reportData from '../../asset/report';

chai.use(http);

const changeStatusTest = () => {
  it('Admin should not edit status if he doesn\'t provided token', (done) => {
    request(app)
      .patch('/api/v2/red-flags/1/status')
      .send(reportData.newStatus)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('Admin should not modify status if he provide invalid or malformatted token', (done) => {
    request(app)
      .patch('/api/v2/red-flags/1/status')
      .set(reportData.invalidAdminToken)
      .send(reportData.newStatus)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not change status if is not Admin ', (done) => {
    request(app)
      .patch('/api/v2/red-flags/1/status')
      .set(reportData.validToken)
      .send(reportData.newStatus)
      .end((err, res) => {
        expect(res).to.have.status(403);
        expect(res.body).to.have.a.property('status', 403);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('Admin should not change status if no record match the ID provided', (done) => {
    request(app)
      .patch('/api/v2/red-flags/99/status')
      .set(reportData.validAdminToken)
      .send(reportData.newStatus)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.a.property('status', 404);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('Admin should not set status to empty', (done) => {
    request(app)
      .patch('/api/v2/red-flags/1/status')
      .set(reportData.validAdminToken)
      .send(reportData.emptyStatus)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.a.property('status', 400);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('Admin should be able to change status if he provide token and valid report ID ', (done) => {
    request(app)
      .patch('/api/v2/red-flags/1/status')
      .set(reportData.validAdminToken)
      .send(reportData.newStatus)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.a.property('status', 200);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
};

export default changeStatusTest;
