function move(direction){

	//read direction from input and assign to direction variable

	if (direction.match(/north/i)){
		direction = "north"
		
	}

	if (input.match(/south/i)){
		direction = "south"
		
	}

	if (input.match(/east/i)){
		direction = "east"
		
	}

	if (input.match(/west/i)){
		direction = "west"
		
	}
	else{
		generateOutput("Please specify a valid cardinal direction.");
	}
	
	//assign opposite of each cardinal direction, for connections

	opposite = {};
	opposite.north = "south";
	opposite.south = "north";
	opposite.east = "west";
	opposite.west = "east";
	
	console.log("move detected");

	if (player.location.connections[direction] != undefined){
	
		player.location = player.location.connections[direction];
		generateOutput("player moving " + direction + " to previously visited room");
		console.log("player location, already visited = " + player.location.id);
		return;
	}
	
	if (player.location.connections[direction] == undefined){
	
		makeEnvironment(direction);
		generateOutput("New environment discovered to the " + direction +"!"+" It's a " +newEnvironment.biome.name +".");
		console.log("environment generated to the " + direction);
		player.location.connections[direction] = newEnvironment;
		previousEnvironment = player.location;
		console.log(previousEnvironment);
		player.location = newEnvironment; //newEnvironment object is returned by makeRoom()
		player.location.connections[opposite[direction]] = previousEnvironment;	
		console.log(player.location.connections[opposite[direction]]);
		console.log(player.location.id + " = player location. Environment was generated to the: " + direction + " of Environment" + previousEnvironment.id);
		return;
	}
	}