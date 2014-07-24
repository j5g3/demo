
var
	bg = $loader.img('parallax-bg.jpg'),
	fg1 = $loader.img('parallax-fg1.png'),
	fg2 = $loader.img('parallax-fg2.png'),
	parallax
;

$loading.on_remove = function() {

	$engine.background.add(bg).invalidate();

	parallax = new j5g3.gdk.Parallax({
		layers: [
			j5g3.image(fg1).set({ y: 215, f: 0.7 }),
			j5g3.image(fg2).set({ y: 16, f: 1 })
		]
	});

	$input.on({
		left: function() { parallax.cx += 30; $engine.stage.invalidate(); },
		right: function() { parallax.cx -= 30; $engine.stage.invalidate(); }
	});

	$engine.stage.add(parallax).invalidate();

};

$engine.fps = 60;
$engine.run();