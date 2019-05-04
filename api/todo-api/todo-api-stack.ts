import lambda = require("@aws-cdk/aws-lambda");
import apigw = require("@aws-cdk/aws-apigateway");
import cdk = require("@aws-cdk/cdk");
import { RootStackProps } from "../../RootStackProps";

export interface TodoApiStackProps extends RootStackProps {
  message: string;
}

export default class TodoApiLambdaStack extends cdk.Stack {
  constructor(app: cdk.App, id: string, props: TodoApiStackProps) {
    const stackId = `${props.paramEnvId}-${id}`;
    super(app, stackId, props);

    const createLambdaFn = new lambda.Function(this, `${props.paramEnvId}-create-todo`, {
      code: lambda.Code.directory("./dist"),
      handler: "createTodoHandler.default",
      timeout: 300,
      runtime: lambda.Runtime.NodeJS810,
      environment: {
        message: props.message
      }
    });

    const api = new apigw.RestApi(this, `${props.paramEnvId}-endpoint`);

    const create = api.root.addResource("create");
    create.addMethod("PUT", new apigw.LambdaIntegration(createLambdaFn));
  }
}
