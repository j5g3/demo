
$loading.on_remove = function()
{
var
	resources= {

		hour: j5g3.dom.image("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAADwCAMAAAA3grSrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAAAAAApWe5zwAAAAJ0Uk5T/wDltzBKAAAAPElEQVR42uzXoRHAIADAwHT/pZEgiutVwEf+Bul5KQgh/ATrH6ypEEII78BaFEII4RVYq56ALhJucAgwAIIjD43QJRo/AAAAAElFTkSuQmCC"),

		min: j5g3.dom.image("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAADwCAMAAAA3grSrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAAAAAApWe5zwAAAAJ0Uk5T/wDltzBKAAAAPUlEQVR42uzYoQHAIADAsPL/05NDMMMEglTmhDYWtYEFIYSnsF6FEEJ4B9akEEIIr8CaFR7G/ysJfuMjwAA3rg7hWWtNkAAAAABJRU5ErkJggg=="),

		sec: j5g3.dom.image("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAADwCAMAAAA3grSrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRF/wAAAAAAQaMSAwAAAAJ0Uk5T/wDltzBKAAAAUklEQVR42uzYMQoAIAxD0fT+lxbEoUJwaEFEfsY3BZqpChMVUAJBEARBEARBEATBv1AzO0pZtdnSy2gr+fKcGDyj3VIT/RQfxEhWwe5vLWUIMABZGRBta6PNxwAAAABJRU5ErkJggg==")

	},

	update = function()
	{
	var
		t = new Date(),
		pi = Math.PI,
		_secs = t.getSeconds() + t.getMilliseconds() / 1000,
		_mins = t.getMinutes() + _secs / 60,
		_hours= t.getHours() + _mins / 60
	;
		hour.rotation = pi + pi / 6  * _hours;
		mins.rotation = pi + pi / 30 * _mins;
		secs.rotation = pi + pi / 30 * _secs;

		$engine.stage.invalidate();
	},

	hour  = j5g3.image({ source: resources.hour, cx: -10, cy: -210, sy: -1 }),
	mins  = j5g3.image({ source: resources.min, cx: -10, cy: -220, sy: -1 }),
	secs  = j5g3.image({ source: resources.sec, cx: -10, cy: -190, sy: -1 })
;
	$engine.background.add([
		j5g3.rect({ fill: '#fff', width: 1280, height: 720 }),
		j5g3.line({ line_width: 1, stroke: '#000', x: 1280/2, y: 0, height: 720 }),
		j5g3.line({ line_width: 1, stroke: '#000', x: 0, y: 360, width: 1280 })
	]);

	$engine.stage.add([ hour, mins, secs, update ])
		.align_children('center middle')
	;
};
