#!/usr/bin/env node

import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { WebsiteStack } from "../lib";

const app = new cdk.App();

const websiteStack = new WebsiteStack(app, "WebsiteStack");
