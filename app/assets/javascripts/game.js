	started = false;
	environmentCount = 0;
	generatedEnvironments = {};

	$(document).ready(function(){

		//stop the form from submitting on enter
		$("form").submit(function(event){
		event.preventDefault();
		});

		//get input and pass it to the game, then clear input area
		$("#inputarea").change(function(event){
	
		//an important variable!!
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
	
		//start game, initialize player, create first room
		if (input.match(/start/i) != null && started == false){
			console.log("start detected");
			generateOutput("Starting game! Enter your players name.");
			player = new player(prompt("Enter Your player's name"));
			generateOutput(player.getStatus());
			makeEnvironment();
			return started = true;
		};
	
		
		if (started == true){
	
			//if game already started
			if (input.match(/start/i) != null ){
			generateOutput("The game has already begun.");
			};
	
	
	
			if (input.match(/move/i) != null){
				move(input)
			}
			
			if (input.match(/status/i) != null){
				generateOutput(player.getStatus());
			}
			
			if (input.match(/view/i) != null){
				generateOutput("You are currently in a "+player.location.biome.name+" area. "+"The wildlife in this area includes a "+player.location.biome.wildlife[3]+".");
			}
	
		} //started
		
		else generateOutput("please enter valid command   :\)")
	}


	//a function to generate output for the output area and delete the last element if there is overflow
	function generateOutput(output)
	{
		$("#outputarea").append("<span>"+output+"</span>"+"<BR>");
		//deletes first element of output to prevent overflow - change number in if statement. It counts number of spans, so divide by 2 for line numbers.
		if ($("#outputarea").children().length > 8){
			$("#outputarea").children("span:first").remove();
			$("#outputarea").children("br:first").remove();
		}
	}







	



