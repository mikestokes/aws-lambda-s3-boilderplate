# aws-lambda-boilderplate
Boilerplate for AWS Lambda function (Node.js) that includes local test harness

## Publishing to Lambda

1. Zip CONTENTS of this folder (NOT the folder, just the contents).
2. From AWS, create a new AWS Lambda function with a event source e.g S3, DynamoDB, Kinesis.
3. From AWS, go to the Lambda function you just created and click the Edit/Test button.
4. Click the Upload button and choose the Zip file you just created.
5. If you want to adjust the RAM for the Lambda function, click "Change advanced settings" and adjust the Memory setting.
6. If you want to adjust the Timeout for the Lambda function, click "Change advanced settings" and adjust the Timeout(s) setting.
7. The AWS Lambda configuration for "File name" should be the same as your main file containing the Lambda function in the Zip.
8. The AWS Lambda configuration for "Handler name" should be the same as yourentry point function in the file "File name" above e.g. if the file exports "exports.myFunction" then the "Handler name" should be myFunction.
9. Save your changes.
