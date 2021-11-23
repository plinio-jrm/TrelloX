const jquery = require("./lib/jquery-3.6.0");
var jq = jquery.noConflict(true);

function docReady() {
	console.log('test');
}

$(document).ready(docReady);