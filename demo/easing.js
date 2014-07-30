
var man = $loader.img('res/man.png');

$loading.on_remove = function ()
{
var
	SCALE = 1.5,
	// Create our spritesheet and cut it
	ss = j5g3.spritesheet(man).grid(6, 7),
	to = { x: 280 },
	y = -10,
	x = 0,
	a, easing,
	// Create a container for text
	text = j5g3.clip({ fill: '#000' })
;
	$engine.background.add(text).scale(SCALE);
	$engine.stage.scale(SCALE);

	// Create clip, tween and text for each Easing function
	for (easing in j5g3.Easing)
	{
		a = ss.clip([ 16,17,18,19,20,21,22,23,24,25 ]).pos(x, y+=20).scale(0.2);
		a.st = 0.2;

		$engine.stage.add([
			a,
			j5g3.tween({ target: a, to: to, easing: j5g3.Easing[easing] }),
		]);

		text.add([
			j5g3.text({ text: easing, y: y, x: x+100, font: '20px Serif' })
		]);

		if (y > 440) {
			y = -10; x += 330; to = { x: 600 };
		}
	}
	$engine.background.canvas.style.backgroundColor = '#fff';
	$engine.run();
};