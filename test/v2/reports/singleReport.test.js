import { it } from 'mocha';
import chai, { request, expect } from 'chai';
import http from 'chai-http';
import app from '../../../server';
import reportData from '../../asset/report';

chai.use(http);

const getSingleReportTest = () => {
  it('User should not find report if he doesn\'t provided token', (done) => {
    request(app)
      .get('/api/v2/red-flags/1')
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not find report if he provide invalid or malformatted token', (done) => {
    request(app)
      .get('/api/v2/red-flags/1')
      .set(reportData.invalidToken)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not get report if no record match the ID provided', (done) => {
    request(app)
      .get('/api/v2/red-flags/23')
      .set(reportData.validToken)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.a.property('status', 404);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should get report if he provides token and valid report ID ', (done) => {
    request(app)
      .get('/api/v2/red-flags/1')
      .set(reportData.validToken)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.a.property('status', 200);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
};

export default getSingleReportTest;
