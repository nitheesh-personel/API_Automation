const chai = require('chai');
const expect = chai.expect;
const appRequests = require("../common/apiRequestMethods");
const apiEndpoint = require("../common/apiEndPoints");

describe('API Test for GET API with ID', () => {

  var response;  //IF WE NEED response in all the IT blocks, define variable here.
  let idRequired = 7;

  it('should return status 200 for a GET request with ID', async () => {
    response = await appRequests.callApiGetRequest(apiEndpoint.getObjectID.replace("[id]",idRequired));
    expect(response.status).to.equal(200, "Wrong response code");
  });

  //response body Assertions examples below

  it('should verify accurate ID', async () => {
    console.log(response.body);  //for checking the response body structure and defining
    expect(response.body.id).to.equal('7', "Wrong ID");
  });

  it('should verify accurate year', async () => {
    expect(response.body.data.year).to.equal(2019, "Wrong year");
  });

  // Add more test cases as needed
});