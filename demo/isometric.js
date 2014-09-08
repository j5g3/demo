
var ss = $loader.img('res/terrain-ss.png');

$loading.on_remove = function()
{
"use strict";
var
	MAP_WIDTH=40, MAP_HEIGHT=40,
	POINTS = 12, DELAY = 200,
	rand = j5g3.irand,
	timeout,

	// Initialize Map Display Object
	map = j5g3.map({
		th: 55,
		tw: 100,
		paint: j5g3.Paint.Isometric
	}),
	terrain = j5g3.spritesheet(ss),
	stage = $engine.stage
;

	function genmap()
	{
		// Reset points array
		var i, points = [];

		// Place initial seed points
		for (i=0; i<POINTS; i++)
			// [ x, y, tile ]
			points.push([ rand(MAP_WIDTH), rand(MAP_HEIGHT), [ 1+i%4 ]]);

		// Set map array
		map.map = j5g3.ary(MAP_WIDTH, MAP_HEIGHT, 0);
		map.x = -map.tw*map.sx;
		map.y = -map.th/2*map.sy;
		// Set map size based on number of rows and cols
		map.size(MAP_WIDTH*map.tw-map.tw, (MAP_HEIGHT-2)*map.th/2)
			.stretch(stage.width-map.x, stage.height-map.y)
		;
		// Center Map
		// Start expanding
		expand(points);
	}

	/**
	 * points Array of points to modify. [x, y, sprite_index array]
	 */
	function expand(points)
	{
	var
		pts = [],
		a = points.length,
		x, y, sprite, i
	;
		while (a--) {
			x = points[a][0];
			y = points[a][1];
			sprite = points[a][2];

			// Ignore if there is a tile present
			if (map.map[y][x])
				continue;

			// Select sprite if more than one
			map.map[y][x]= sprite[rand(sprite.length)];
			// Select offset depending of row
			i=y%2;
			// Add the next points to be rendered.
			if (y>0)
			{
				if (x>0) pts.push([x-i, y-1, sprite]);
				if (x<MAP_WIDTH) pts.push([x+1-i, y-1, sprite]);
			}

			if (y<MAP_HEIGHT-1)
			{
				if (x<MAP_WIDTH) pts.push([x+1-i, y+1, sprite]);
				if (x>0) pts.push([x-i,y+1, sprite]);
			}
		}

		// Recursive call after the delay. The function will exit before calling the next one.
		if (pts.length)
			timeout = setTimeout(function() { expand(pts); }, DELAY);
		// Paint
		stage.invalidate();
	}

	function cut(obj)
	{
		terrain.slice(obj.x, obj.y, obj.width, obj.height);
	}

	([{x:101, y:66, width: 100, height: 65 }, {"name":"beach","x":0,"y":0,"width":100,"height":65},{"name":"dirtDouble","x":0,"y":66,"width":100,"height":65},{"name":"grass","x":0,"y":132,"width":100,"height":65},{"name":"road","x":101,"y":0,"width":100,"height":65}]).forEach(cut);

	map.sprites = terrain.sprites();
	stage.add(map);
	setTimeout(genmap, 250);
	$engine.run();
};