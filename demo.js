
var
	j5g3 = window.j5g3,
	$loader = j5g3.loader(),
	$loading = new j5g3.gdk.Loading({ loader: $loader }),
	$input,

	$engine = j5g3.engine({

		stage_settings: { width: 1280, height: 720 },

		startFn: function() {
			this.stage.container.className = 'j5g3-stage-full';
			$input = new j5g3.in(this.stage.canvas);

			this.background = this.layer({ background: true });
			this.stage.add($loading);
		}
	})
;
