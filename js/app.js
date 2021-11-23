var jq = $.noConflict(true);

function docReady() {
	import * as Board from "./app/handlers/board-handler";
	
	var test = new Board.BoardHandler();
	console.log(test);
}

jq(document).ready(docReady);