import { it } from 'mocha';
import chai, { request, expect } from 'chai';
import http from 'chai-http';
import app from '../../server';
import reportData from '../asset/report';

chai.use(http);

const editLocationTest = () => {
  it('User should not edit location if he doesn\'t provided token', (done) => {
    request(app)
      .patch('/api/v1/red-flags/1/location')
      .send(reportData.location)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not modify location if he provide invalid or malformatted token', (done) => {
    request(app)
      .patch('/api/v1/red-flags/1/location')
      .set(reportData.invalidToken)
      .send(reportData.location)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not modify location if no record match the ID provided', (done) => {
    request(app)
      .patch('/api/v1/red-flags/99/location')
      .set(reportData.validToken)
      .send(reportData.location)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.a.property('status', 404);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not modify location if report is not his record ', (done) => {
    request(app)
      .patch('/api/v1/red-flags/2/location')
      .set(reportData.validToken)
      .send(reportData.location)
      .end((err, res) => {
        expect(res).to.have.status(403);
        expect(res.body).to.have.a.property('status', 403);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not modify modify location if report status is pending', (done) => {
    request(app)
      .patch('/api/v1/red-flags/2/comment')
      .set(reportData.validToken)
      .send(reportData.comment)
      .end((err, res) => {
        expect(res).to.have.status(403);
        expect(res.body).to.have.a.property('status', 403);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not modify location if he doesn\'t fill Location field', (done) => {
    request(app)
      .patch('/api/v1/red-flags/1/location')
      .set(reportData.validToken)
      .send(reportData.missingLocation)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.a.property('status', 400);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should be able to change location if he provide token and valid report ID ', (done) => {
    request(app)
      .patch('/api/v1/red-flags/1/location')
      .set(reportData.validToken)
      .send(reportData.location)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.a.property('status', 200);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
};

export default editLocationTest;
