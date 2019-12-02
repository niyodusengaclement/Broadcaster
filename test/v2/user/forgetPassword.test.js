import { it } from 'mocha';
import chai, { request, expect } from 'chai';
import http from 'chai-http';
import app from '../../../server';

chai.use(http);

const forgetPasswordTest = () => {
  it('User should not forget password if he doesn\'t provide email', (done) => {
    request(app)
      .post('/api/v2/auth/forget')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.a.property('status', 400);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should not forget password if he is not registered', (done) => {
    request(app)
      .post('/api/v2/auth/forget')
      .send({ email: 'example@ex.com' })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.a.property('status', 404);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should get token to reset password on email if he is registered', (done) => {
    request(app)
      .post('/api/v2/auth/forget')
      .send({ email: 'clementmistico@gmail.com' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.a.property('status', 200);
        expect(res.body).to.have.a.property('message');
        done();
      });
  });
};

export default forgetPasswordTest;
