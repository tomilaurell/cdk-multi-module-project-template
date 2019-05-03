export interface LambdaResponse {
  statusCode: number;
  body: string;
  headers: any;
}

interface ResponseParameters {
  json: any;
  statusCode: number;
  allowCORS?: boolean;
}

function lambdaResponse(parameters: ResponseParameters): LambdaResponse {
  const response: any = {
    statusCode: parameters.statusCode,
    body: JSON.stringify(parameters.json),
  };

  if (parameters.allowCORS) {
    response.headers = {
      'Access-Control-Allow-Origin': '*',
    };
  }

  return response;
}

export function errorResponse(json: any): LambdaResponse {
  return lambdaResponse({
    json,
    statusCode: 500,
  });
}

export function corsErrorResponse(json: any): LambdaResponse {
  return lambdaResponse({
    json,
    statusCode: 500,
    allowCORS: true,
  });
}

export function successResponse(json: any): LambdaResponse {
  return lambdaResponse({
    json,
    statusCode: 200,
  });
}

export function corsSuccessResponse(json: any): LambdaResponse {
  return lambdaResponse({
    json,
    statusCode: 200,
    allowCORS: true,
  });
}
