//给导航栏添加hover效果
$("#nav_ul li").mouseenter(function() {
	$("#nav_silder").animate({
		left: $(this).offset().left - $('li').eq(0).offset().left,
	}, 50);
	$("#nav_silder").css({
		width: $(this).innerWidth(),
	});
	$(this).children("a").css("color", "white");
});
$("#nav_ul li").mouseleave(function() {
	$(this).children("a").css("color", "#999")
	$("#nav_ul li:eq(0)").children("a").css("color", "white");
});

$("#nav_ul").mouseleave(function() {
	$("#nav_silder").css({
		width: '50',
	});
	$("#nav_silder").animate({
		left: "0",
	}, 500);
});

