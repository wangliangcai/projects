$(function() {
	// 导航栏
	var scrollTop_a = $(".section_logo").position().top;
	$(window).scroll(function(){
		var scrollTop_b = $(window).scrollTop();
		if ( scrollTop_b > scrollTop_a ) {
			$(".section_logo").stop().addClass("navbar-fixed-top");
		} else {
			$(".section_logo").stop().removeClass("navbar-fixed-top");
		}
	});
	// 登录
	$("#login").on("click", function(){
			zhegai();
			$(".login_bar").css({"transform": "rotate3d(1,0,0,0deg)"});
			$(".zhegai").animate({"z-index": 0, "opacity": 1},300);
			$("#navbar").animate({"height":0},200).removeClass("in");
			
		$(".close_btn").on("click", function(){
			$(".login_bar").css({"transform": "rotate3d(1,0,0,90deg)"});
			$(".zhegai").animate({"z-index": "-99", "opacity": 0},300);
		})
	});

});

function maoAnimate (id_target) {
	var height = parseInt($("#"+id_target).position().top);
	$("html,body").animate({"scrollTop": height+"px"}, 500);
}

function zhegai() {
	$(".zhegai").css({
		"width":"100%",
		"height":"100%",
		"position":"fixed",
		"z-index":-99,
		"opacity":0,
		"top":0,
		"left":0,
		"background":"rgba(255,255,255,0.6)"
	});
}
