$('.swipebox').swipebox();


function contentSet() {
	var windowHeight = $(window).height();
	$('article').height(windowHeight);
	$('article').each(function(i){
		var $img = $(this).find('img');
		var sabun = $img.height() - $(this).height();
			$(window).parallax({
				parallax : $img,
				type : 'scrollSpeed',
				style : 'top',
				minValue : -sabun,
				maxValue : 0,
				fixPosition : parseInt($(this).offset().top)+200,
				speed : 6,
				adjustment : parseInt($img.css('top'))
			});
	});
}
contentSet();
$(window).bind("resize",function(){
	contentSet();
});