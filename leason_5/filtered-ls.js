const fs = require('fs');

const dirname = process.argv[2];
const ext = process.argv[3];

fs.readdir(dirname, function (err, list) {
	if (err) {
		return console.error(err);
	}
	list.forEach(function (file) {
		file.split('.')[1] === ext ? console.log(file) : null; 
	});
});
