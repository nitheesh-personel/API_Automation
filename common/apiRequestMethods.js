var supertest = require('supertest');
const baseUrl = supertest('https://api.restful-api.dev');
const oldBaseUrl = supertest('https://bookstore.toolsqa.com/BookStore');

//Getting
exports.callApiGetRequest = async (apiEndPoint) => {
  const response = await baseUrl.get(apiEndPoint);    
  return response;
}

//Getting by adding querry parameters
exports.callApiGetRequestWithQuerry = async (apiEndPoint, queryParamObj) => {
  const response = await oldBaseUrl.get(apiEndPoint)     //here a different base url is used
    .query(queryParamObj);
  return response;
}

//Posting by Adding a raw request body
exports.callApiPostRequest = async (apiEndPoint, requestBody) => {
  const response = await baseUrl.post(apiEndPoint)
    .send(requestBody);
  return response;
}

//Put by Adding a raw request body
exports.callApiPutRequest = async (apiEndPoint, requestBody) => {
  const response = await baseUrl.put(apiEndPoint)
    .send(requestBody);
  return response;
}

//Deleting
exports.callApiDeleteRequest = async (apiEndPoint) => {
  const response = await baseUrl.delete(apiEndPoint);
  return response;
}

//Adding required headers
exports.callApiGetRequestWithParams = async (apiEndPoint, queryParamObj, region, language, userType, callingUser, token, userAgent) => {
  const headerCopy = {
    ...requestHeaders.commonCircleHeader,
    'accept-region': region,
    'accept-language': language,
  }
   
  jwtToken = getBearerToken(userType, callingUser, token);
  
  joinString = "?"
  if (apiEndPoint.includes("?")) {
    joinString = "&"
  }
  if (userAgent) {
    headerCopy['user-agent'] = userAgent;
  }
  const queryParam = joinString + queryString.stringify(queryParamObj);
  const response = await baseUrl.get(apiEndPoint + queryParam)
    .set(headerCopy)
    .set("authorization", jwtToken);
  return response;
}