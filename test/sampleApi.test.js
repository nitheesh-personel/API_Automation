const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');

const api = require("supertest")("https://dummy.restapiexample.com/api/v1");

describe('API Tests', () => {
  it('should return status 200 for a GET request', async () => {
    const response = await api.get('/employees');
    expect(response.status).to.equal(200);
  });

  // Add more test cases as needed
});
