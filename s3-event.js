var async = require('async'),
	AWS = require('aws-sdk');

// The Lambda / test entry point.
exports.handler = function(event, context) {
	console.log('Received event:');
	console.log(JSON.stringify(event, null, '  '));

	var bucket = event.Records[0].s3.bucket.name;
	var key = event.Records[0].s3.object.key;

	doSomething(bucket, key, function (err, result) {
		console.log('error:', err);
		console.log('result:', result);

		// Call the Lambda / test exit point.
		context(err, result);
	});
};

// Simply async (waterfall = synchronous) flow.
function doSomething(sourceBucket, key, callback) {
	async.waterfall([
		downloadFromS3.bind(null, sourceBucket, key),
		doSomethingWithFile
	], function(err, result) {
		if (err) return callback(err);
		callback(null, result);
	});
};

// Downloads the provided S3 file locally.
function downloadFromS3(sourceBucket, key, callback) {
	var s3 = new AWS.S3({
		region: region,
		accessKeyId: <your-s3-access-key>,
		secretAccessKey: <your-s3-secret>
	});

	s3.getObject({Bucket: sourceBucket, Key:key}, function(err, data) {
		if (err) return callback(err);

		return callback(null, {
			metadata: data.Metadata,
			body: data.Body
		});
	});
};

// Chain as many "doSomething" functions into the async waterfall flow.
function doSomethingWithFile(data, callback) {
	return callback(null, data);
};
