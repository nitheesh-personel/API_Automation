const chai = require('chai');
const expect = chai.expect;
const appRequests = require("../common/apiRequestMethods");
const apiEndpoint = require("../common/apiEndPoints");

describe('API Test for GET API with ID', () => {
  let idRequired = 1;
  it('should return status 200 for a GET request with ID', async () => {
    const response = await appRequests.callApiGetRequest(apiEndpoint.getemployeeID.replace("[id]",idRequired));
    expect(response.status).to.equal(200, "Wrong response code");
  });

  // Add more test cases as needed
});
