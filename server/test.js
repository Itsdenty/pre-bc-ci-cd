import { expect } from 'chai';
import request from 'supertest';
import app from './index';
describe('User API endpoints intgeration Tests', function() {
  const  mail = {
      'email': 'dent4real@yahoo.com',
      'title': 'new title',
      'message': 'A new title has been named',
    },
    mail2 = {
      'email': 'dent4real@yahoo.com',
      'title': '',
      'message': 'A new title has been named',
    },
    mail3 = {
      'email': 'dent4realyahoo.com',
      'title': 'new title',
      'message': 'A new title has been named',
    }

  describe('#POST / contact', function () {
    it('should send admin email with 200 status code', function (done) {
      request(app).post('/contact').send(mail)
        .end(function (err, res) {
            if (err) return done(err);
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.message).to.have.string('successfully');
            expect(res.body.status).to.equal(200);
            done();
        })
    })
  });
  describe('#POST / contact', function () {
    it('should throw a 400 error title is empty', function (done) {
      request(app).post('/contact').send(mail2)
        .end(function (err, res) {
            if (err) return done(err);
            expect(res.statusCode).to.equal(400);
            expect(res.body).to.be.an('object');
            expect(res.body.status).to.equal(400);
            expect(res.body.message).to.have.string('valid');
            done();
        })
    })
  });
  describe('#POST / contact', function () {
    it('should throw a 400 error email is invalid', function (done) {
      request(app).post('/contact').send(mail3)
        .end(function (err, res) {
            if (err) return done(err);
            expect(res.statusCode).to.equal(400);
            expect(res.body).to.be.an('object');
            expect(res.body.status).to.equal(400);
            expect(res.body.message).to.have.string('valid');
            done();
        })
    })
  });
});