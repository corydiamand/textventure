//this will describe rooms / environments
function environment(){
	this.id;
	this.size;
	this.biome;
	this.connections = {};

}


function makeEnvironment(direction){

	generatedEnvironments["environment" + environmentCount] = new environment();
	
	//when the game is initializing, set the player's location to the new room.
	if (player.location == null){
	
		player.location = generatedEnvironments["environment"+ environmentCount];
		console.log("initial player location registered");
	};
	
	generatedEnvironments["environment" + environmentCount].id = environmentCount;
	generatedEnvironments["environment" + environmentCount].biome = randomEnvironment();
	newEnvironment = generatedEnvironments["environment" + environmentCount];
	console.log("environment"+environmentCount+ " generated in makeEnvironment function");
	
	environmentCount++;
	return newEnvironment; 
	
}


environments = {
	desert:{
		name: "desert",
		rain: .01,
		temp: "hot",
		ground: "sand",
		foliage: "cactus",
		wildlife: ["snake","lizard","scorpion","GIANT SCORPION","buzzard"]
	},
	tundra: {
		name: "tundra",
		rain: .01,
		temp: "hot",
		ground: "sand",
		foliage: "cactus",
		wildlife: ["snake","lizard","scorpion","GIANT SCORPION"]
	},
	taiga: {
		name: "taiga",
		rain: .01,
		temp: "hot",
		ground: "sand",
		foliage: "cactus",
		wildlife: ["snake","lizard","scorpion","GIANT SCORPION"]
	},
	forest: {
		name: "forest",
		rain: .01,
		temp: "hot",
		ground: "sand",
		foliage: "cactus",
		wildlife: ["snake","lizard","scorpion","GIANT SCORPION"]
	},
	rainforest: {
		name: "rainforest",
		rain: .01,
		temp: "hot",
		ground: "sand",
		foliage: "cactus",
		wildlife: ["snake","lizard","scorpion","GIANT SCORPION"]
	},
	plains: {
		name: "plains",
		rain: .01,
		temp: "hot",
		ground: "sand",
		foliage: "cactus",
		wildlife: ["snake","lizard","scorpion","GIANT SCORPION"]
	},
	swamp: {
		name: "swamp",
		rain: .01,
		temp: "hot",
		ground: "sand",
		foliage: "cactus",
		wildlife: ["snake","lizard","scorpion","GIANT SCORPION"]
	},
	mountain: {
		name: "mountain",
		rain: .01,
		temp: "hot",
		ground: "sand",
		foliage: "cactus",
		wildlife: ["snake","lizard","scorpion","GIANT SCORPION"]
	},
	cave: {
		name: "cave",
		rain: .01,
		temp: "hot",
		ground: "sand",
		foliage: "cactus",
		wildlife: ["snake","lizard","scorpion","GIANT SCORPION"]
	}
} //environments

//select a random environment
function randomEnvironment(){
	var enviros = ["desert", "tundra", "taiga","forest","rainforest","plains","swamp","mountain","cave"]
	var randEnv = enviros[Math.floor(Math.random()*(enviros.length))];
	return environments[randEnv];
}

console.log();
randomEnvironment();