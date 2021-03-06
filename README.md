# aws-lambda-boilderplate

(See accompanying blog post at [http://mikestokes.co/aws/2015/03/12/easy-testing-of-amazon-lambda-micro-services/](http://mikestokes.co/aws/2015/03/12/easy-testing-of-amazon-lambda-micro-services/)

Boilerplate for AWS Lambda function trigger by any supported S3 event (e.g. file update or upload (put/post)). This repository also includes a test harness to help debug the Lambda function locally.

## Usage

1. Clone this repository.
2. Run `npm install` from the command line to install the Node dependencies (described in package.json).
3. Edit the function in *s3-event.js* (you may also want to rename the file to something more meaningful for your micro-service - if you do, also update the "require" within the test.js file). 

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
