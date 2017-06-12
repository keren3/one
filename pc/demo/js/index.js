$(".pic li").each(function(i){
	$(this).hover(function(){
		$(this).find("div").eq(0).slideDown(400)
	},function(){
		$(this).find("div").eq(0).stop().slideUp(400)
	})
});




