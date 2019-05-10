import { successResponse, LambdaResponse } from "@org/shared";

const handler = async (event: any = {}): Promise<LambdaResponse> => {
  console.log("Received event", event);
  console.log("Return message: " + process.env.message);
  return successResponse({
    msg: process.env.message
  });
};

export default handler;
