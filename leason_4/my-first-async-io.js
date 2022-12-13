const fs = require('fs');
let lines;

fs.readFile(process.argv[2], 'utf8', function(err, file) {
	if (err) {
		console.error(err);
	}
	lines = file.split('\n').length - 1;
	console.log(lines);
});
