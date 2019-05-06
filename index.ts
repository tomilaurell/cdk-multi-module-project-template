import cdk = require("@aws-cdk/cdk");
import { withInfraProperties } from "cdk-infra-properties";

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

  await withInfraProperties({
    app,
    stack: TodoApiStack,
    stackName: "todo-api",
    path: "./api/todo-api/todo-api-stack"
  });

  return app;
}

createStacks().then(app => {
  app.run();
});
