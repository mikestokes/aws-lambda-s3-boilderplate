var importify = require('./s3-event.js');

// Configure the Lambda callback.
var context = {
	done: function (err, result) {
		console.log('------------');
		console.log('Context done');
		console.log('	error:', err);
		console.log('	result:', result);

		process.exit();
	}
};

var event = {
	Records: [
		{
			s3: {
				bucket: {
					name: 'your-bucket-name-here'				// Test: enter your  S3 bucket name that contains the file
				},
				object: {
					key: 'files/folder/filename.extension'		// Test: enter the s3 key (path) for the file
				}
			}
		}
	]
};

// Call the S3 function...
importify.handler(event, context);
