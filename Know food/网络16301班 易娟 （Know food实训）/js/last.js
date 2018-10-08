$(function(){
	$(".flexslider").flexslider();
	$(".box").hover(function(){
		$(this).find("span").addClass("animated fadeInDown");
		$(this).find("p").addClass("animated fadeInUp")
	},function(){
	    $(this).find("span").removeClass("animated fadeInDown");
	    $(this).find("p").removeClass("animated fadeInUp");
	})
});
