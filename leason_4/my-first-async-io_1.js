const fs = require('fs');
let lines;

function handleFile (err, file){
	if (err) {
		return console.log(err);
	}
	lines = file.split('\n').length - 1;
	console.log(lines);

}
fs.readFile(process.argv[2], 'utf8', handleFile);

