//固定导航栏在顶部
//	$(document).ready(function(){
//				
//			var headHeight=$(".bar-nav").height()+0;
//			var nav=$(".bar-nav");
//			$(window).scroll(function(){
//			if($(this).scrollTop()>headHeight){
//			nav.addClass("bar");
//			}
//			else{
//			nav.removeClass("bar");
//			}
//		})
//	})
//	
	$(document).ready(function($){
		$("#tan-a").click(function(){
			$(".tan-diceng").fadeIn('linea');
			$(".tan-top").slideDown(200);
		})
		$(".tan-top .que-renan").click(function(){
			$(".tan-diceng").fadeOut("linea");
			$(".tan-top").slideUp(200);
		})
	})
	
	$(document).ready(function($){
		$(".d-bo").click(function(){
			$(".tan-diceng").fadeIn('linea');
			$(".bohao").slideDown(200);
		})
		$(".bohao .que-quxiaos").click(function(){
			$(".tan-diceng").fadeOut("linea");
			$(".bohao").slideUp(200);
		})
	})
	
