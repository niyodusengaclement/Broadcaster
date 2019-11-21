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
  it('User should be able to upload single video', (done) => {
    request(app)
      .post('/api/v1/red-flags')
      .set(reportData.validToken)
      .field('title', 'my title')
      .field('type', 'my title')
      .field('comment', 'my title')
      .attach('videos', './test/asset/flag.mp4', 'flag.mp4')
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it('User should be able to upload multiple videos', (done) => {
    request(app)
      .post('/api/v1/red-flags')
      .set(reportData.validToken)
      .field('title', 'my title')
      .field('type', 'my title')
      .field('comment', 'my title')
      .attach('videos', './test/asset/flag.mp4', 'flag.mp4')
      .attach('videos', './test/asset/red.mp4', 'red.mp4')
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it('User should be able to upload single image', (done) => {
    request(app)
      .post('/api/v1/red-flags')
      .set(reportData.validToken)
      .field('title', 'Bad roads in countryside')
      .field('type', 'Intervention')
      .field('comment', 'I would like to let you know about destroyed roads in countryside')
      .attach('images', './test/asset/epic.png', 'epic.png')
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.a.property('status', 201);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
  it('User should be able to upload multiple images', (done) => {
    request(app)
      .post('/api/v1/red-flags')
      .set(reportData.validToken)
      .field('title', 'Bad roads in countryside')
      .field('type', 'Intervention')
      .field('comment', 'I would like to let you know about destroyed roads in countryside')
      .attach('images', './test/asset/reset.png', 'reset.png')
      .attach('images', './test/asset/epic.png', 'epic.png')
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.a.property('status', 201);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
  it('User should create report if there is no mistake', (done) => {
    request(app)
      .post('/api/v1/red-flags')
      .set(reportData.validToken)
      .send(reportData.validReport)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.a.property('status', 201);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
};

export default createReportTest;
