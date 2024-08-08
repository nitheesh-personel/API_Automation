const chai = require('chai');
const expect = chai.expect;
const appRequests = require("../common/apiRequestMethods");
const apiEndPoint = require("../common/apiEndPoints");
const data = require("../data/requestBody");
var responsePost,idRequired;  //Defining here as it is to be used all along

//PUT,DELETE with Before node examples
describe('API Test for PUT API', () => {

  //calling post api to get a valid id for changing values and storing ID
  before(async () => {
    responsePost = await appRequests.callApiPostRequest(apiEndPoint.postObject,data.requestBody1);
    idRequired = responsePost.body.id;
   });

  it('should return status 200 for a PUT request using querry', async () => {
    const responsePut = await appRequests.callApiPutRequest(apiEndPoint.changeObject.replace("[id]",idRequired),data.requestBody3);
    expect(responsePut.status).to.equal(200, "Wrong response code");
  });

  it('should return status 200 for a DELETE request using querry', async () => {
    const responseDelete = await appRequests.callApiDeleteRequest(apiEndPoint.changeObject.replace("[id]",idRequired));
    expect(responseDelete.status).to.equal(200, "Wrong response code");
  });
});
