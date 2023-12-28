const chai = require('chai');
const expect = chai.expect;
const appRequests = require("../common/apiRequestMethods");
const data = require("../data/requestBody");


describe('API Test for POST API', () => {
  it('should return status 200 for a POST request', async () => {
    const response = await appRequests.callApiPostRequest('/create','{"name":"test","salary":"123","age":"23"}');
    expect(response.status).to.equal(200, "Wrong response code");
  });

  it('should return status 200 for a POST request', async () => {
    const response = await appRequests.callApiPostRequest('/create',data.requestBody1);
    expect(response.status).to.equal(200, "Wrong response code");
  });

  it('should return status 200 for a POST request', async () => {
    const response = await appRequests.callApiPostRequest('/create',data.requestBody2);
    expect(response.status).to.equal(200, "Wrong response code");
  });

  // Add more test cases as needed
});
