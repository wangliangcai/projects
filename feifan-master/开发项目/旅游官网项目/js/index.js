$(function(){
	
	// 兼容placeholder
	if ( !("placeholder" in document.createElement("input")) ) {
		$("input[placeholder]").each(function(index, el) {
			var that = $(this);
			var text = that.attr("placeholder");
			console.log(text);
			if (that.val() === "") {
				that.val(text).addClass('placeholder');
			};
			that.focus(function(){
				if (that.val() === text) {
					that.val("").removeClass('placeholder');
				};
			});
			that.blur(function() {
				if (that.val() === "") {
					that.val(text).addClass('placeholder');
				};	
			});
			that.closest('form').submit(function(){
				if (that.val() === text) {
					that.val();
				};
			});
		});
	};

	// 字符长
	for(var i=0; i < $(".text_bar").length; i++){
		var a = $(".text_bar").eq(i).text();
		if( a.length > 50 ){
			a=a.substring(0,37);
			$(".text_bar").eq(i).text(a+"......");
		}
	}
	for(var i=0; i < $(".text_info").length; i++){
		var a = $(".text_info").eq(i).text();
		if( a.length > 58 ){
			a=a.substring(0,46);
			$(".text_info").eq(i).text(a+"......");
		}
	}
	for(var i=0; i < $(".mel_title").length; i++){
		var a = $(".mel_title").eq(i).text();
		var b = $(".mel_title").eq(i).text().length;
		if( a.length > 23 ){
			a=a.substring(0,23);
			$(".mel_title").eq(i).text(a+"...");
		}
	}

	// 选项卡
		$("#tabs").tabs();

		$(".tip_title_bar_a").click(function(){
			var tab_index = $(this).index();
			$(".tip_title_bar_a").removeClass('active');
			$(this).addClass("active");
			$(this).css("outline","none");
			console.log(tab_index);
//			$(".tabs").eq(tab_index).addClass("tabs_anmiate").siblings().removeClass("tabs_anmiate");
		});
//	动画
var liLength = $(".box_ul img").length;
console.log(liLength);
var index = 0;

for (var i = 0; i <liLength; i++) {
		var a=$("<a href='javascript:;' class='btn_a'></a>");
		$(".box_btn_a").append(a);
};

	var warpWidth = $(".box_btn_a").width();
	$(".box_btn_a").css({"margin-left": -warpWidth/2}); 
	$(".box_btn_a a").eq(0).addClass('active')

	$(".box").hover(function(){
		$(".btn-l,.btn-r").stop().fadeIn(500);
	},function(){
		$(".btn-l,.btn-r").stop().fadeOut(500);
	})
	$(".box_btn_a a").click(function() {
		var i=$(this).index();
		index=i;
		$(".box_btn_a a").eq(index).addClass('active').siblings().removeClass("active");
		$(".box_ul img").eq(index).addClass("activeimg").siblings().removeClass("activeimg");
	});

$(".btn-l").click(function(){
	index--;
	show();
})
$(".btn-r").click(function(){
	index++;
	show();
})
function show () {
	if (index==liLength) {
		index=0;
		console.log(1);
	}
	if(index<0){
		index=liLength-1;
	}
	console.log(index);
	$(".box_ul img").eq(index).addClass("activeimg").siblings().removeClass("activeimg");
	$(".box_btn_a a").eq(index).addClass('active').siblings().removeClass("active");
};
 var timer=setInterval(function(){
		index++;
		show();
 },7000);
 show();
})