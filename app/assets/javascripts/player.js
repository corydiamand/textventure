//describes player
function player(name){

	this.health = 100;
	this.name = name;
	this.location = null;
	
	this.getStatus = function(){
		return name +" currently has " + this.health + " health."	
	}
}