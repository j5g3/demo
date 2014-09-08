ball = $loader.img('res/ball.gif');

$loading.on_remove = (function() {

var
	MAX_BALLS = 5000,
	RADIUS = ball.width/2,
	WIDTH = $engine.stage.width,
	HEIGHT= $engine.stage.height,
	MAX_X = WIDTH-RADIUS,
	MAX_Y = HEIGHT-RADIUS,

	Ball = j5g3.Image.extend({

		vx: 5,
		vy: 5,

		init: function()
		{
			j5g3.Image.apply(this);
			this.source = ball;
			this.pos(j5g3.rand(MAX_X), j5g3.rand(MAX_Y)).scale(0.5);
			this.vx *= j5g3.irand(2) ? -1 : 1;
			this.vy *= j5g3.irand(2) ? -1 : 1;
		},

		update: function()
		{
			this.x += this.vx;
			this.y += this.vy;
			this.rotation = (this.rotation > 2*Math.PI) ? 0 : this.rotation + 0.1;

			this.dirty = true;

			if (this.x < 0) {
				this.x = 0;
				this.vx = -this.vx;
			} else if (this.x > WIDTH)
			{
				this.x = WIDTH;
				this.vx = -this.vx;
			}
			if (this.y < 0)
			{
				this.y = 0;
				this.vy = -this.vy;
			}
			else if (this.y > HEIGHT)
			{
				this.y = HEIGHT;
				this.vy = -this.vy;
			}
		},

		cx: -RADIUS,
		cy: -RADIUS

	})
;

	for (i = 0; i < MAX_BALLS; i++)
		$engine.stage.add(new Ball());
});
