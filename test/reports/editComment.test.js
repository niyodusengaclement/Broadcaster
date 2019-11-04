import { it } from 'mocha';
import chai from 'chai';
import { request, expect } from 'chai/lib/chai';
import http from 'chai-http';
import app from '../../server';
import reportData from '../asset/report';

chai.use(http);

const editCommentTest = () => {
  it('User should not edit comment if he doesn\'t provided token', (done) => {
    request(app)
      .patch('/api/v1/red-flags/1/comment')
      .send(reportData.comment)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not modify comment if he provide invalid or malformatted token', (done) => {
    request(app)
      .patch('/api/v1/red-flags/1/comment')
      .set(reportData.invalidToken)
      .send(reportData.comment)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not modify comment if no record match the ID provided', (done) => {
    request(app)
      .patch('/api/v1/red-flags/99/comment')
      .set(reportData.validToken)
      .send(reportData.comment)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.a.property('status', 404);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not modify comment of others', (done) => {
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
  it('User should not modify comment if report status is pending', (done) => {
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
  it('User should not modify comment or title to null', (done) => {
    request(app)
      .patch('/api/v1/red-flags/1/comment')
      .set(reportData.validToken)
      .send(reportData.missingFieldsComment)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.a.property('status', 400);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should be able to change comment if he provide token and valid report ID ', (done) => {
    request(app)
      .patch('/api/v1/red-flags/1/comment')
      .set(reportData.validToken)
      .send(reportData.comment)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.a.property('status', 200);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
};

export default editCommentTest;
