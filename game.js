(function()
{
	started = false;
	roomCount = 0;
	rooms = {};

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
			makeRoom();
		};
	
		started = true;
		if (started == true){
	
			//if game already started
			if (input.match(/start/i) != null ){
			generateOutput("Game has begun.");
			};
	
	
	
			if (input.match(/move/i) != null){
			
				if (input.match(/north/i)){
					move("north");
					return;
				}
		
				if (input.match(/south/i)){
					move("south");
					return;
				}
			
				if (input.match(/east/i)){
					move("east");
					return;
				}
			
				if (input.match(/west/i)){
					move("west");
					return;
				}
		
				console.log("move detected");
			
			}
	
		} //started
	
	}


	//a function to generate output for the output area and delete the last element if there is overflow
	function generateOutput(output)
	{
		$("#outputarea").append("<span>"+output+"</span>"+"<BR>");
		//deletes first element of output to prevent overflow - change number in if statement. It counts number of spans, so divide by 2 for line numbers.
		if ( $("#outputarea").children().length > 28){
			$("#outputarea").children("span:first").remove();
			$("#outputarea").children("br:first").remove();
		}
}


	//describes player
	function player(name){

		this.health = 100;
		this.name = name;
		this.location = null;
		
		this.getStatus = function(){
			return name +" currently has " + this.health + " health."	
		}
	}



	//this will describe rooms / environments
	function room(){
		this.id;
		this.size;
		this.environment;
		this.connections = {};
	
	}

	function move(direction){
		
		opposite = {};
		opposite.north = "south";
		opposite.south = "north";
		opposite.east = "west";
		opposite.west = "east";
		
		console.log(player.location.connections["north"]);
		console.log(player.location.connections["south"]);
		console.log(player.location.connections["east"]);
		console.log(player.location.connections["west"]);
		
	
		if (player.location.connections["direction"] != undefined){
		
			player.location = player.location.connections[direction];
			generateOutput("player moving " + direction + "to previously visited room")
		}
		
		if (player.location.connections[direction] == undefined){
			makeRoom(direction);
			generateOutput("New room discovered to the " +direction+"!");
			console.log("room generated to the " + direction);
		}
	}


	function makeRoom(direction){
	
		rooms["room" + roomCount] = new room();
		rooms["room" + roomCount].id = roomCount;
		console.log("room"+roomCount+ " generated");
		player.location = rooms["room"+ roomCount];
		console.log(player.location.id + " = make rooms player location");
		roomCount++;
		
	}
	
})();


