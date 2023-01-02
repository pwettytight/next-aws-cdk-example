import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { join } from "path";
import { Nextjs } from "cdk-nextjs-standalone";

export class WebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Nextjs(this, "Web", {
      nextjsPath: join(__dirname, "../../../../web"),
      buildPath: join(__dirname, "../../../../../"),
      projectRoot: join(__dirname, "../../../../../"),
    });
  }
}
