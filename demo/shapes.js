
$loading.on_remove = (function ()
{
var
	MAX = 10,

	sides, p,
	polygons = [],
	result = [],
	stage = $engine.stage,
	i = 0, a, z,
	coll,

	Box = j5g3.Rect.extend({

		target: null,
		alpha: 0.5,

		validate: function(bb, force)
		{
			this.x = this.target.x; this.y = this.target.y;
			this.width = this.target.w; this.height = this.target.h;

			j5g3.Rect.prototype.validate.call(this, bb, force);
		}

	}),

	get_color = function()
	{
		return 'rgb(' + j5g3.irand(255) + ',' + j5g3.irand(255) + ', ' + j5g3.irand(255) + ')';
	},
	create = function()
	{
		p = {
			radius: 40 + j5g3.irand(30),
			x: 50 + j5g3.irand(stage.width),
			y: 50 + j5g3.irand(stage.height),
			fill: get_color(),
			sx: j5g3.rand(3),
			sy: j5g3.rand(3),
			cx: -10 + j5g3.rand(20),
			cy: -10 + j5g3.rand(20),
			stroke: get_color(),
			rotation: j5g3.rand(Math.PI*2)
		};

		sides = 1 + j5g3.irand(8);
		var obj = sides===2 ? j5g3.circle(p) : (sides===1 ? j5g3.rect(p) : j5g3.Polygon.create(sides, p));
		var box = new Box({ target: obj.box, fill: obj.fill });
		polygons.push(obj);

		return [ obj, box ];
	},

	old,
	coords = j5g3.text({ font: '30px sans-serif', fill: '#eee', y: 20, x: 20, height: 50, width: 330 })
;
	function on_mouse()
	{
		var s = stage.at($input.x, $input.y);

		coords.text = ($input.x|0) + ', ' + ($input.y|0);

		if (s)
		{
			if (s !== old)
			{
				s.line_width = 5;
				stage.canvas.style.cursor = 'pointer';
			}

			coords.text += ', s: ' + s.sx.toFixed(1) + ', ' + s.sy.toFixed(1);
		} else
			stage.canvas.style.cursor = '';

		if (s !== old)
		{
			if (old)
			{
				old.line_width = 1;
			}

			old = s;
		}
	}

	for (i=0; i<MAX; i++)
	{
		p = create();
		stage.add(p[0]);
		$engine.background.add(p[1]);
	}
	$engine.background.add(coords);
	$input.on({ move: on_mouse });

	stage.scale(0.7, 0.7).pos(100,50);
});
