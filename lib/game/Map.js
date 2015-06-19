var tile = {
	height : 1,
	walls : null,
	wall_type : null,
	features : {
		type : null,
		destructible : false,
		cover : 0
	},
	passable : true
};

var obstruction = {
	quad_corner : [-1,-1],		// Refers to the x,y coodinates of the top-left corner of a quadralateral that contains the whole object
	tiles : [],					// Array of ob_tile objects
	orientation : -1
};

var ob_tile =  {
	position : [-1. -1],		// Absolute (x,y) of this specific tile of an Obstruction
	facings : [{				// Array of Objects that describe the cover provided in different directions
		direction : 0,
		cover : 0
	}]				 
};

var Map = {
 	length : 10,
 	tileset : "basic",
 	tiles: [tile],
 	obstructions : [],
 	characters : []
};

/*for (var i = 0; i < 100; ++i) {
	Map.tiles.push(new tile)
}

for (var i = 0; i < 10, ++i) {
	Map.obstruction.push(new obstruction)
	Map.obstruction.tiles.push(new ob_tile)
	Map.obstruction.tiles.push(new ob_tile)
}
*/
module.exports = Map

