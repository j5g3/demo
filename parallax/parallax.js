
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
			j5g3.image(fg1).set({ y: 215, fx: 0.7, fy: 1 }),
			j5g3.image(fg2).set({ y: 16, fx: 1, fy: 1 })
		]
	});

	$input.on({
		left: function() { parallax.ox += 30; parallax.invalidate(); },
		right: function() { parallax.ox -= 30; parallax.invalidate(); }
	});

	$engine.stage.add(parallax).invalidate();

};

$engine.run();
