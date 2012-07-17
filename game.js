$(document).ready(function(){

	//stop the form from submitting on enter
	$("form").submit(function(event){
	event.preventDefault();
	});

	//get input and pass it to the game, then clear input area
	$("#inputarea").change(function(event){
	
	input = $("#inputarea").val();
	
	game(input);
	
	$(this).val('');
	
	});
	

});

//this will hold the general parts of the game
function game(input){
	var input = this.input
	console.log("from game function: "+input);
	inputParse(input);
}

//this will interpret commands from the input line
function inputParse(input){
	var input = this.input;
	
	if (input.match(/move/) != null)
	{
	console.log("move detected");
	generateOutput("move detected");
	}
}

//a function to generate output for the output area and delete the last element if there is overflow
function generateOutput(output)
{
	$("#outputarea").append("<span>"+output+"</span>"+"<BR>");
	//deletes first element to prevent overflow - change number in if statement. It counts number of spans, so divide by 2 for line numbers.
	if ( $("#outputarea").children().length > 28)
	{
	$("#outputarea").children("span:first").remove()
	$("#outputarea").children("br:first").remove()
	}
}

//this will describe rooms / environments
function environment(){

}

