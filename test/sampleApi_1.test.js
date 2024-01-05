const chai = require('chai');
const expect = chai.expect;
const appRequests = require("../common/apiRequestMethods");
const apiEndPoint = require("../common/apiEndPoints");

describe('API Test for GET API', () => {
  it('should return status 200 for a GET request', async () => {
    const response = await appRequests.callApiGetRequest(apiEndPoint.getEmployee);
    expect(response.status).to.equal(200, "Wrong response code");
  });

  // Add more test cases as needed
});
