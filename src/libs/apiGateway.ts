import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda"
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

export const formatJSONResponse = (response: Record<string, unknown>, headers?: {}) => {
  console.log("response is " + JSON.stringify(response))
  // const response = { result: 'success', message: 'payment processed correctly'}
  // const basicHeader = {"Content-Type": "application/json"}
  // return {statusCode: 200, body: JSON.stringify(response)}
  const responseStringified = {
    statusCode: 200,
    body: JSON.stringify(response),
  }
  if (headers) {
   //  responseStringified['headers'] = headers;
  }
  return responseStringified
}

export const formatJSONResponseError = (response: Record<string, unknown>, headers?: {}) => {
  console.log("response is " + JSON.stringify(response))
  const responseStringified = {
    statusCode: 500,
    body: JSON.stringify(response),
  }
  if (headers) {
    responseStringified['headers'] = headers;
  }
  return responseStringified
}

export const formatJSONResponseInvalidRequest = (response: Record<string, unknown>, headers?: {}) => {
  console.log("response is " + JSON.stringify(response))
  const responseStringified = {
    statusCode: 400,
    body: JSON.stringify(response),
  }
  if (headers) {
    responseStringified['headers'] = headers;
  }
  return responseStringified
}

export const formatJSONResponseDuplicatedPaymentRequest = (response: Record<string, unknown>, headers?: {}) => {
  console.log("response is " + JSON.stringify(response))
  headers = {'Access-Control-Allow-Origin': '*', ...headers}
  const responseStringified = {
    statusCode: 409,
    body: JSON.stringify(response),
  }
  if (headers) {
    responseStringified['headers'] = headers;
  }
  return responseStringified
  // event.requestContext.http.method
}

export const formatJSONResponseApprovalRequired = (response: Record<string, unknown>, headers?: {}) => {
  console.log("response is " + JSON.stringify(response))
  const responseStringified = {
    statusCode: 422,
    body: JSON.stringify(response),
  }
  if (headers) {
    responseStringified['headers'] = headers;
  }
  return responseStringified
}

export const formatJSONResponseInvalidPaymentDetails = (response: Record<string, unknown>, headers?: {}) => {
  console.log("response is " + JSON.stringify(response))
  const responseStringified = {
    statusCode: 400,
    body: JSON.stringify(response),
  }
  if (headers) {
    responseStringified['headers'] = headers;
  }
  return responseStringified
}
