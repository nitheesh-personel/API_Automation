const chai = require('chai');
const expect = chai.expect;
const appRequests = require("../common/apiRequestMethods");
const data = require("../data/requestBody");
const apiEndPoint = require("../common/apiEndPoints");

//POST request with request body parameters -raw
describe('API Test for POST API', () => {
  
  //below example without data file separation
  it('should return status 200 for a POST request test1', async () => {
    const response = await appRequests.callApiPostRequest('/objects',{"name": "Apple MacBook Pro 16","data": {"year": 2019,"price": 1849.99,"CPU model": "Intel Core i9","Hard disk size": "1 TB"}});
    expect(response.status).to.equal(200, "Wrong response code");
  });
  
  //below examples with data file separation
  it('should return status 200 for a POST request test2', async () => {
    const response = await appRequests.callApiPostRequest(apiEndPoint.postObject,data.requestBody1);
    expect(response.status).to.equal(200, "Wrong response code");
  });

  it('should return status 200 for a POST request test3', async () => {
    const response = await appRequests.callApiPostRequest(apiEndPoint.postObject,data.requestBody2);
    expect(response.status).to.equal(200, "Wrong response code");
  });
});
