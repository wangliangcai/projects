  		document.documentElement.style.fontSize = window.innerWidth/3.75 + 'px'
  		document.addEventListener('plusready', function(){
   			
   			//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
   		});
// 		rem布局开始
   		(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=640){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

// 		rem布局结束
// 		滚动时固定顶部
// 		$(document).ready(function () {
//		    $(window).on('scroll', function () {
//		        var t = $(window).scrollTop();
//		        if (t > 10) {
//		            $(".bottom").addClass("asyt");
//		        } else {
//		            $(".bottom").removeClass("asyt");
//		        }
//		    })
//		});
		
//document.documentElement.style.fontSize = window.innerWidth/3.75 + 'px'
//导航栏点击事件
//显示li
 			var AV = 6;
 			$(function ($)
 			{
 				$(".li-tui ul li").filter("li:gt(" + (AV - 1) + ")").hide().filter(":last").show().click(function()
 				{
 					$(this).siblings("li:gt(" + (AV -1) +")").toggle();
 					
 				});
 			});

// 当页面加载之后
window.onload=function  () {
	// 常量 const
	const designWidh=375;
	const fontSize= 100;
	function resizeFont(){
		// 变量 var
		var CW = document.documentElement.clientWidth;
		
		var ratio = CW/designWidh;

		var newFontSize=ratio<1?fontSize*ratio:100;

		document.querySelector("html").style.fontSize= newFontSize + "px";
		
	}
	// 执行resizeFont
	resizeFont();
	// 窗口大小改变时执行resizeFont
	window.onresize= resizeFont;
	window.addEventListener("orientation",resizeFont,false);
            // 屏幕自动旋转得时候
}

//分类版块
// 眉页导航点击显示
   $(document).ready(function(){
            $(".toplistul li a").click(function(){
                var order = $(".toplistul li a").index(this);//获取点击之后返回当前a标签index的值
                $(".con" + order).show().siblings("div").hide();//显示class中con加上返回值所对应的DIV
            });
        })
   
   
   	$(function(){
	    $(".toplistul li").click(function() {
	        $(this).siblings('li').removeClass('nen_ao');  // 删除其他兄弟元素的样式
	        $(this).addClass('nen_ao');                            // 添加当前元素的样式
	    });
	
	}); 
//	$(document).ready(function () {
//		        $(".toplistul > li").removeClass("active_na");
//		        $(".toplistul > li:eq(0)").addClass("active_na");
//		    })

//搜索框弹出层
	$(document).ready(function($){
		$(".glyphicon-search").click(function(){
			$(".search-quan").fadeIn('linea');
			$(".search-quan").slideDown(200);
		})
		$(".search-ding .cas-ap").click(function(){
			$(".search-quan").fadeOut("linea");
			$(".search-quan").slideUp(200);
		})
	})

//排行榜
// $(document).ready(function(){
//          $(".zo-left li a").click(function(){
//              var order = $(".zo-left li a").index(this);//获取点击之后返回当前a标签index的值
//              $(".youb-RI" + order).show().siblings("div").hide();//显示class中con加上返回值所对应的DIV
//          });
//      })
$(function(){
	    $(".zo-left li").click(function() {
	        $(this).siblings('li').removeClass('app-cs');  // 删除其他兄弟元素的样式
	        $(this).addClass('app-cs');                            // 添加当前元素的样式
	    });
	
	});
	$(document).ready(function(){
            $("#sia-yun li a").click(function(){
                var order = $("#sia-yun li a").index(this);//获取点击之后返回当前a标签index的值
                $(".youb-RI" + order).show().siblings("div").hide();//显示class中con加上返回值所对应的DIV
            });
        })

//	排行榜二级导航
$(function(){
	    $(".you-neirong li").click(function() {
	        $(this).siblings('li').removeClass('ano-aps');  // 删除其他兄弟元素的样式
	        $(this).addClass('ano-aps');                            // 添加当前元素的样式
	    });
	
	});
$(document).ready(function(){
            $("#you-neirong li a").click(function(){
                var order = $("#you-neirong li a").index(this);//获取点击之后返回当前a标签index的值
                $(".you-Catalog" + order).show().siblings("div").hide();//显示class中con加上返回值所对应的DIV
            });
        })


//触屏滑动
//	var t = 0;
//			var H = $("aside").height()-$(".fenlei-top").height();
//			var uh = $(".zuob-Lo").height();
//			$("aside").on({
//				startY:0,
//				touchstart:function(e){
//					this.startY= e.originalEvent.touches[0].pageY;
//				},
//				touchmove:function(e){
//					var y = e.originalEvent.touches[0].pageY;
//					t =  t+y-this.startY;
//					// 控制下越界
//					t = t>150?150:t;
//					// 控制上越界
//					t = t<(H-uh-150)?(H-uh-150):t;
//					$(".slide").css("top",t+"px");
//					console.log(H-(uh+t));
//					this.startY = y;
//				},
//				touchend:function(e){
//					if(t>0){
//						$(".slide").animate({top:"0px"},200);
//					}
//					if(t<(H-uh)){
//						$(".slide").animate({top:(H-uh)+"px"},200);
//					}
//				}
//			});

//页面向下滑动 逐渐出来 淡入的
//$(window).scroll(function(event)
//{
//	  var tops=$(window).scrollTop();	  					  
//	  if(tops>0)
//	  {	
//	  	 var nums=((tops-0)*0.01);
//	  	 $(".new-index-header").css("transition","all 0.2s").css("background","rgba(0, 170, 160,"+nums+")");
//	  }	  					  
//});


//plus.screen.lockOrientation('portrait-primary');
//@media screen and (orientation: portrait) {  
//    html{  
//       width : 100% ;  
//       height : 100% ;  
//        background-color: white ;  
//        overflow : hidden;  
//    }  
//    body{  
//        width : 100% ;  
//       height : 100% ;  
//       background-color: red ;  
//        overflow : hidden;  
//    }  
//    #book{  
//       position : absolute ;  
//       background-color: yellow ;  
//    }  
//}   
//@media screen and (orientation: landscape) {  
//     html{  
//       width : 100% ;  
//       height : 100% ;  
//       background-color: white ;  
//    }   
//     body{  
//        width : 100% ;  
//       height : 100% ;  
//       background-color: white ;  
//    }  
//         #book{  
//          position : absolute ;  
//          top : 0 ;   
//          left : 0 ;  
//          width : 100% ;  
//          height : 100% ;  
//          background-color: yellow ;  
//       }  
//}  
//#book p{  
//      margin: auto ;  
//      margin-top : 20px ;  
//      text-align: center;  
//    }  
//把book这个div在竖屏模式下横过来，横屏状态下不变。所以在portrait下，没定义它的宽高。会通过下面的js来补。
	var width = document.documentElement.clientWidth;  
  	var height =  document.documentElement.clientHeight;  
  if( width < height ){  
      console.log(width + " " + height);
      $book =  $('#book');  
      $book.width(height);  
      $book.height(width);  
      $book.css('top',  (height-width)/2 );  
      $book.css('left',  0-(height-width)/2 );  
      $book.css('transform' , 'rotate(90deg)');  
      $book.css('transform-origin' , '50% 50%');  
 }  
//如果用户手机的旋转屏幕按钮开着，那么当手机横过来之后，会造成一定的悲剧。解决办法如下:
var evt = "onorientationchange" in window ? "orientationchange" : "resize";  
  
   window.addEventListener(evt, function() {  
       console.log(evt);  
       var width = document.documentElement.clientWidth;  
        var height =  document.documentElement.clientHeight;  
         $book =  $('#book');  
        
        if( width > height ){
  
           $book.width(width);  
           $book.height(height);  
           $book.css('top',  0 );  
           $book.css('left',  0 );  
           $book.css('transform' , 'none');  
           $book.css('transform-origin' , '50% 50%');  
        }  
        else{  
           $book.width(height);  
           $book.height(width);  
           $book.css('top',  (height-width)/2 );  
           $book.css('left',  0-(height-width)/2 );  
           $book.css('transform' , 'rotate(90deg)');  
           $book.css('transform-origin' , '50% 50%');  
        }  
  
   }, false);  

//设备旋转横屏竖屏
(function(){
			var supportOrientation = (typeof window.orientation === 'number' &&
			typeof window.onorientationchange === 'object');
			var init = function(){
			var htmlNode = document.body.parentNode,
			orientation;
			var updateOrientation = function(){
			if(supportOrientation){
			orientation = window.orientation;
			switch(orientation){
			case 90:
			case -90:
			orientation = 'landscape';
			break;
			default:
			orientation = 'portrait';
			break;
			}
			}else{
			orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
			}
			htmlNode.setAttribute('class',orientation);
			};
			if(supportOrientation){
			window.addEventListener('orientationchange',updateOrientation,false);
			}else{
			//监听resize事件
			window.addEventListener('resize',updateOrientation,false);
			}
			updateOrientation();
			};
			window.addEventListener('DOMContentLoaded',init,false);
			})();


//固定导航栏在顶部
	$(document).ready(function(){
				
			var headHeight=$(".search").height()+0;
			var nav=$(".search");
			$(window).scroll(function(){
			if($(this).scrollTop()>headHeight){
			nav.addClass("bottom");
			}
			else{
			nav.removeClass("bottom");
			}
		})
	})
	

//	$(document).ready(function(){
//					
//				var headHeight=$(".fenlei-top").height()+0;
//				var nav=$(".fenlei-top");
//				$(window).scroll(function(){
//				if($(this).scrollTop()>headHeight){
//				nav.addClass("bottom");
//				}
//				else{
//				nav.removeClass("bottom");
//				}
//			})
//		})
//	

//orientationchange事件在获取页面宽高时出错
 window.addEventListener('orientationchange', function () {
            setTimeout(function () {
                var page_w = document.documentElement.clientWidth;
                var page_h = document.documentElement.clientHeight;
                console.log(page_w, page_h);
            },200);
        });
//         window.addEventListener('resize', function () {
//             var page_w = document.documentElement.clientWidth;
//             var page_h = document.documentElement.clientHeight;
//             console.log(page_w, page_h);
//         });

//倒计时模块
		var intDiff = parseInt(86400);//倒计时总秒数量
		
		function timer(intDiff){
			window.setInterval(function(){
			var 
				day=0,
				hour=0,
				minute=0,
				second=0;//时间默认值		
			if(intDiff > 0){
				day = Math.floor(intDiff / (60 * 60 * 24));
				hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
				minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
				second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if (minute <= 9) minute = '0' + minute;
			if (second <= 9) second = '0' + second;
//	$('#day_show').html(day+"");
			$('#hour_show').html('<s id="h"></s>'+hour+'');
			$('#minute_show').html('<s></s>'+minute+'');
			$('#second_show').html('<s></s>'+second+'');
			intDiff--;
			}, 1000);
		} 

$(function(){
			timer(intDiff);
		});	
		var timer;
		var count=10;
		function startCount(){
			timer=window.setInterval("myTimeBack()",1000);
		}
		function myTimeBack(){
			myFrame.document.getElementById("time-item").value=count;
			count=count-1;
			if(count==0)
			count=10;	
		}
		function fromClose(){
			clearInterval(timer);
		}


//查看限免日历
var AV = 3;
 			$(function ($)
 			{
 				$(".cha-free ul li").filter("li:gt(" + (AV - 1) + ")").hide().filter(":last").show().click(function()
 				{
 					$(this).siblings("li:gt(" + (AV -1) +")").toggle();
 					
 				});
 			});
 			
//男生女生
 $(document).ready(function(){
            $(".free-ul li a").click(function(){
                var order = $(".free-ul li a").index(this);//获取点击之后返回当前a标签index的值
                $(".body-neir" + order).show().siblings("div").hide();//显示class中con加上返回值所对应的DIV
            });
        })
 
// 删除其他li元素的样式
   $(function(){
	    $(".free-ul li").click(function() {
	        $(this).siblings('li').removeClass('girl');  // 删除其他兄弟元素的样式
	        $(this).addClass('girl');                            // 添加当前元素的样式
	    });
	
	}); 

//按钮
jQuery(function(){
  $("#div1").click(function(){$(".div2").slideToggle("slow");});
});













//弹出层
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
	


