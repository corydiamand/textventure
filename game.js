$(document).ready(function()
{

	//stop the form from submitting on enter
	$("form").submit(function(event)
	{
	event.preventDefault();
	});

	//get input
	$("#inputarea").change(function(event){
	
	input = $("#inputarea").val();
	
	game(input);
	
	
	});
	

});

function game(input)
{
var input = this.input
console.log(input);
}

function inputParse()
{

}

function room()
{

}

