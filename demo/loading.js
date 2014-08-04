
$loading.on_remove = (function()
{
var
	a = new j5g3.gdk.Loading()
;
	$engine.stage.add(a);
	a.update();
	a.on_progress(0.5);
});
