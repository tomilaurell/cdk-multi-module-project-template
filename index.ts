import cdk = require("@aws-cdk/cdk");
import { withInfraProperties, generateServerlessVariables, generateDotEnv } from "cdk-infra-properties";

import NetworkStack from "./common-stacks/network";
import TodoApiStack from "./api/todo-api/todo-api-stack";

async function createStacks() {
  const app = new cdk.App();

  await withInfraProperties({
    app,
    stack: NetworkStack, // Refer to the stack class
    stackName: "cdk-network", // Give your stack original stack name
    path: "./common-stacks" // Give path to stack. This will be used to overwrite properties.
    /* You can also provice stack props here
    stackProps: {
      autoDeploy: false
    }*/
  });

  const apiStackPath = "./api/todo-api";
  await generateServerlessVariables(apiStackPath);
  await generateDotEnv(apiStackPath);
  await withInfraProperties({
    app,
    stack: TodoApiStack,
    stackName: "todo-api",
    path: apiStackPath
  });

  return app;
}

createStacks().then(app => {
  app.run();
});
