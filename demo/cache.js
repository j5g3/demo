
var batman = $loader.img('res/man.png');

$loading.on_remove = (function ()
{
var
	ss = j5g3.spritesheet(batman).grid(6, 7),
	map = j5g3.map({
		x: $engine.stage.width/2,
		y: $engine.stage.height/2,
		cx: -305,
		cy: -200,
		tw: 100,
		th: 100,
		width: 610,
		height: 400,
		sx: 0.6, sy: 0.6,

		sprites: ss.sprites(),
		map: [
			[0, 1, 2, 3, 4, 5],
			[6, 7, 8, 9, 10, 11],
			[12, 13, 14, 15, 16, 17],
			[18, 19, 20, 21, 22, 23]
		]
	}),
	text = j5g3.text({
		y: 40,
		font: '30px sans-serif',
		fill: '#eee',
		text: 'Cache Disabled'
	}).measure(),
	clip = j5g3.clip().scale(0.8).add(map),

	tween = j5g3.tween({
		target: map,
		to: { rotation: Math.PI*2, x: map.x+300, y: map.y+300 }
	}),
	cache = true
;
	function toggleCache()
	{
		if (cache)
		{
			map.clear_cache();
			text.text = 'Cache Disabled';
		} else
		{
			map.cache();
			text.text = 'Cache Enabled';
		}

		text.invalidate();
		cache = !cache;
	}

	$input.on({ 'buttonY': toggleCache });

	toggleCache();

	$engine.stage.add([ clip, text, tween ]);
});