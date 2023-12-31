const chai = require('chai');
const expect = chai.expect;
const appRequests = require("../common/apiRequestMethods");
const data = require("../data/requestBody");
const apiEndPoint = require("../common/apiEndPoints");


describe('API Test for POST API', () => {
  //below example without data file separation
  it('should return status 200 for a POST request test1', async () => {
    const response = await appRequests.callApiPostRequest('/create','{"name":"test","salary":"123","age":"23"}');
    expect(response.status).to.equal(200, "Wrong response code");
  });
  
  //below examples with data file separation
  it('should return status 200 for a POST request test2', async () => {
    const response = await appRequests.callApiPostRequest(apiEndPoint.postEmployee,data.requestBody1);
    expect(response.status).to.equal(200, "Wrong response code");
  });

  it('should return status 200 for a POST request test3', async () => {
    const response = await appRequests.callApiPostRequest(apiEndPoint.postEmployee,data.requestBody2);
    expect(response.status).to.equal(200, "Wrong response code");
  });

  // Add more test cases as needed
});
