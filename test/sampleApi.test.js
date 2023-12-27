const chai = require('chai');
const expect = chai.expect;
const appRequests = require("../common/apiRequestMethods");

describe('API Tests', () => {
  it('should return status 200 for a GET request', async () => {
    const response = await appRequests.callApiGetRequest('/employees');
    expect(response.status).to.equal(200, "Wrong response code");
  });

  // Add more test cases as needed
});
