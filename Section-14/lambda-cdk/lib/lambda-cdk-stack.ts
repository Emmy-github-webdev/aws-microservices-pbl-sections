import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define Lambda function handler
    const hello = new Function(this, 'HelloHandler', {
      runtime: Runtime.NODEJS_16_X,
      code: Code.fromAsset('lambda'),
      handler: 'hello.handler'
    });

    // defines an API Gateway REST API resource backed by our "hello" function.
    new LambdaRestApi(this, 'ApiGateway', {
      handler: hello
    });

  }
}
