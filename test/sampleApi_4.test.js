const chai = require('chai');
const expect = chai.expect;
const appRequests = require("../common/apiRequestMethods");
const apiEndPoint = require("../common/apiEndPoints");

//GET request with Querry parameter
describe('API Test for GET API using querry params', () => {
  it('should return status 200 for a GET request using querry', async () => {
    const response = await appRequests.callApiGetRequestWithQuerry('/v1/Book',{ISBN:1205});
    expect(response.status).to.equal(400, "Wrong bad response code");
  });
});

//Handling Iteration
describe('API Test for GET API iteration', () => {
  var response;
  it('should return status 200 for a GET request', async () => {
    response = await appRequests.callApiGetRequest(apiEndPoint.getObject);
    expect(response.status).to.equal(200, "Wrong response code");
  });
  it('should return status 200 for a GET request', async () => {
    response.body.forEach(element => {
      expect(element.id).to.not.be.null;
      expect(element.name).to.not.be.null;
    });
  });
});