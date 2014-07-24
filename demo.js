
var
	j5g3 = window.j5g3,
	$loader = j5g3.loader();
	$loading = new j5g3.gdk.Loading({ loader: $loader, x: 640, y: 360 });

	$engine = j5g3.engine({

		stage: new j5g3.StageDirty({ width: 1280, height: 720 }),

		startFn: function() {
			$input = new j5g3.in(this.stage.canvas);
			this.background = this.layer({ background: true });
			this.stage.add($loading);
		}
	})
;