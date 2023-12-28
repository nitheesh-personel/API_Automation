var supertest = require('supertest');
const baseUrl = supertest('https://dummy.restapiexample.com/api/v1');
const prodBaseUrl = supertest('https://api.instagram.com');

exports.callApiGetRequest = async (apiEndPoint) => {
  const response = await baseUrl.get(apiEndPoint);    
  return response;
}

exports.callApiPostRequest = async (apiEndPoint, requestBody) => {
  const response = await baseUrl.post(apiEndPoint)
    .send(requestBody);
  return response;
}


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
  
