
$loading.on_remove = function() {

var
	$assets = {
		walls: j5g3.dom.image('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAACgBAMAAACoBn5uAAAAAXNSR0IArs4c6QAAABJQTFRFAAAAAABbAAD/AHz/AH3//7HafOE62gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sKGBUXAppQpbwAAANZSURBVGje7ZpRkpswDIZpTtDNTN+DhyPsCVwusA+9/1W6GeMA8i/JEjCddKSHnSXGfDGKJfu3hmGYHrf88bLBaB/EwC0BMALSaustiTcKAP33gHm11x1p5o0CQH92BPWO739cI6j9WR+kvNyQfD549WedPD2ef2/Z6+TSn31FW4DnFTGArY/Kd/++LXmcXPuzI8grYPKMIGPAas/PpXbNav8ABOD/ANCJtp1UaKLZASRUpPHZfk9cqCjt3YA22M0FMHMjmO0AkmQLIHPherIB2oRT7i/BGAFqey+ApszH6wH4FT2sAOrj9QHYyXbA3sfT5gFoBJMDANdRpb31QQDsAG6d0wcY/KvlADBLf2Gi8QC6n9gavxRsQkXiAInsJ6wjqMFueUIDIO12H9RwnTIGkHYzYHVlyQAUQNvNr6imTAmw2w9YnVyT/rpf2ANou3kEddmSecCuXdlj8Quv3usABOD9AWgjrgFMEw1JCSpAChW6mKEBlGCnyzE9ACFc64KS6lQ54eiSmAqQU6Yu6uk/SzHp67Jkx+9eWrbowqpxYgXgAACLH3YAaQ/AyYB2I97aEQCQEoAdACwh4aW2YLXZD0ByDjIn4J6RIAXdPPoAM5LUkM1OQEKiILLkA6y5AuQOsMdwAFzCbAAC8KaA7XnBJRNtqyVfECr25wUXBDuaaU8P1/S84PSEsz8vuCBl7s8LLkj6exHpgmXL0cVvAPyAszYgATgF4Jto/QBnqEi9AC3Y0WtZPAEAb7jG8k8L8CccKGBhgCdldgO8SZ8RESHAtWzJ/QDfwouZiAEIwBsA6LIJAaRCPr7wb7mm6z4IkApO2dLF5VofgVxMyRdfMnI/BvQZLR/tBMgFrUIBbLnWX5FckiuU8JZr3clDn4/bIuQ0dI6gz8dtGTXvqiOF3l2/hQCcW20TgMMGCu+kiaVWfqDSE+7oENlI+9+bUNN+Ae7wE6ct+oLVIYLyTT4835glu+bmUS5gPQRoS2jFFGl/RW0RsJTkf49/iN0/dScnrQx6Y78o4EsbwXmF3ExwDEAA3gDAb6Th+YB9ovFSADwfaENFRz5gxAx4PuDLB1iOQecDznzACUqn5QNWEjsrH7CiHsgHTdL/7HYykiWbEfyk/X9YnBxLyX8C+As1UU/YR9BeiAAAAABJRU5ErkJggg==')
	},

	MAP = {
		"  %%": 25,
		" %% ": 16,
		" %%%": 3,
		" % %": 5,
		"%  %": 9,
		"% % ": 20,
		"%%  ": 24,
		"% %%": 14,
		"%   ": 23,
		" %  ": 22,
		"%% %": 17,
		"   %": 8,
		"  % ": 2,
		"%%% ": 21,
		"%%%%": 15,
		"    ": 11
	},

	ss = j5g3.spritesheet($assets.walls).grid(6, 5),

	map = ss.map(32, 32),
	mapfile = $loader.data('res/bigCorners.lay')
;
	function generate()
	{
	var
		data = mapfile.raw.split("\n"),
		result = [], s, y, x, row, yl = data.length
	;
		for (y=0; y<yl; y++)
		{
			row = [];
			result.push(row);
			xl = data[y].length;

			for (x=0; x<xl; x++)
			{
				if (data[y][x]==='%')
					s = ((y > 0 && data[y-1][x]==='%') ? '%' : ' ') +
						((x > 0 && data[y][x-1]==='%') ? '%' : ' ') +
						((x < xl-1 && data[y][x+1]==='%') ? '%' : ' ') +
						((y < yl-1 && data[y+1][x]==='%') ? '%' : ' ');
				else
					s = 29;

				row.push(MAP[s]);
			}
		}

		map.map = result;
		map.size(map.tw*x, map.th*y)
			.stretch($engine.stage.width, $engine.stage.height);
	}

	$loader.ready(generate);
	$engine.stage.add(map);
};