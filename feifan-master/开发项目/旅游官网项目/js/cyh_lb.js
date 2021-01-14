 	



//图片轮播
 	function clickLR( claaName){
		var xx= document.getElementsByClassName("cyh_li");		
 		var leftC=$(".cyh_leftlb").eq(0); 	
   		var rightC=$(".cyh_rightlb").eq(0);
   		

		leftC.on("click",function(){
			var lastLi= xx[xx.length-1].style.left;
				lastLi=parseInt(lastLi);
			$(claaName).each(function(index,item){ 
				var left= xx[index].style.left;	
				left=parseInt(left);
				if(lastLi!=0 ){					
					left=left-100;
				}else{
					var i=0;
					$(claaName).each(function(index,item){  	
			   			$(item).css("left",i+'00%' );
			   			i++;
				   	});
				}
				$(item).css('left',left+'%')		
			 })

		});

		//右击
		rightC.on("click",function(){
			var firstLi= xx[0].style.left;  //获取第一个
				firstLi=parseInt(firstLi);
			var lastLi= xx[xx.length-1].style.left;
				lastLi=parseInt(lastLi);
			$(claaName).each(function(index,item){ 
				var left= xx[index].style.left;	
				left=parseInt(left);
				if(firstLi==0){			  //如果第一个为 0		
					$(claaName).eq(0).css("left",'-400%' )
					$(claaName).eq(1).css("left",'-300%' )
					$(claaName).eq(2).css("left",'-200%' )
					$(claaName).eq(3).css("left",'-100%' )
					$(claaName).eq(4).css("left",'0%' )

				}else{
					left=left+100;
				}
				$(item).css('left',left+'%')		
			 })
		})
   	};

	
   	//文字超出
   	//
   	function spillText(id){   		
		var a = $(id).text();
		var globTempText="";
		globTempText=a;
		if( a.length > 80 ){
			a=a.substring(0,55);
			$(id).text(a+"...");		
		};
		$("#cyh_off").click(function(){

			$("#cyh_shwoAll").addClass("display-none")
		});
		$("#showA").click(function(){   //显示详细的div的点击事件

			$("#cyh_shwoAll").removeClass("display-none")
		});
	 } ;


	 // 景区介绍文本超出后 取消marginTop
	 function textOut(className){
		for(var i=0; i < $(className).length; i++){
			var a = $(className).eq(i).text();
			if( a.length > 230 ){
				$(className).eq(i).parent().css("marginTop","2%");
			}
		}

	};
	//
	function showTime_Ul(arry,imgurl,index){

		var str="";
		for(var i=0;i<arry.length;i++){
			str+="<li> "+arry[i]+"<div class='timeUl_div'><h4>"+arry[i]+"</h4> </div> </li>";
		};
		$(index).append($(str));
   // 鼠标移入事件
  		var i=0;
  		var comnet;
  		var comnetout;

		$('.timeUl li').hover(
			function(){		
		   	   $(this).find(".timeUl_div").delay(80).slideDown(600);
		       comnet=$(this).find('.timeUl_div').text().trim();
		       var urltext = 'images/'+imgurl+'/'+comnet+'.jpg';
	           $('#showImg').attr({'src':urltext,'alt':comnet,'title':comnet});	

//
//					留来介绍相应景区介绍的
//
	

		   	},function(){

		       	$(this).find('.timeUl_div').slideUp(400);

		})
		
	}