$(window).resize(function(){
	var size = ($(window).width()/10);
	if(size > 75) size = 75;
	$('html').css('font-size',size+'px');
}).resize();

$(function(){
	$(".header .back").click(function(){
		history.go(-1);
	})
})
// 提示
function toast(txt){
	layer.open({
	    content: txt
		    ,skin: 'msg'
		    ,time: 2 //2秒后自动关闭
	  });
}

function popup(content){
	//页面层
  	layer.open({
    	type: 1
    	,content:content
    	,anim: 'up'
    	,style: 'position:fixed; bottom:0; left:0; width: 100%; height: 200px; padding:10px 0; border:none;'
  	});
}


