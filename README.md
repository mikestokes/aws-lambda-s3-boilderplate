# aws-lambda-boilderplate
Boilerplate for AWS Lambda function (Node.js) that includes local test harness

## Usage

Simply clone the repository and then edit the function in *importigy.js*. Your should also rename the file to something more meaningful for your micro-service (if you do, also update the "require" within the test.js file). 

## Testing Locally

One of the benefits of this boilerplate is to test locally. To do this once you've made your changes, simply run:

```bash
> node test.js
```

## Publishing to AWS Lambda

Once you're happy, deploy to AWS Lambda (it's free in most cases):

1. Zip CONTENTS of this folder (not the folder - just the contents).
2. From AWS, create a new AWS Lambda function with a event source e.g S3, DynamoDB, Kinesis.
3. From AWS, go to the Lambda function you just created and click the Edit/Test button.
4. Click the Upload button and choose the Zip file you just created.
5. If you want to adjust the RAM for the Lambda function, click "Change advanced settings" and adjust the Memory setting.
6. If you want to adjust the Timeout for the Lambda function, click "Change advanced settings" and adjust the Timeout(s) setting.
7. The AWS Lambda configuration for "File name" should be the same as your main file containing the Lambda function in the Zip.
8. The AWS Lambda configuration for "Handler name" should be the same as yourentry point function in the file "File name" above e.g. if the file exports "exports.myFunction" then the "Handler name" should be myFunction.
9. Save your changes.
