$(function() {
	$(".menu-fruits").mouseover(function(){
		$(this).css({
			background: "#e48907"
		});
		$(this).find("button").css({
			background: "#efefef",
			color: "#333"
		})
		$(this).find("h4").css({
			color: "#fff"
		})
	});
	$(".menu-fruits").mouseout(function(){
		$(this).css({
			background: "#efefef"
		});
		$(this).find("button").css({
			background: "#e48907",
			color: "#fff"
		})
		$(this).find("h4").css({
			color: "#333"
		})
	});
	$(document).ready(function(){
		$("nav").removeClass("bg-dark");
	    $(window).scroll(function(){
          let winHeight = $(window).scrollTop();
            if(winHeight>100){  
			$("nav").addClass("bg");
		  } else if(winHeight <= 100) {
			$("nav").removeClass("bg");
		 }
	   })
	});
	$(document).ready(function(){
		$("#content .menu").click(function(){
		   $(this).after('<div class="zhezhao"><img src="img/jiahao.png" alt="" /></div>');
		})
		$("header,footer,section#caijieshao").click(function(){
			$(".zhezhao").addClass("yincang");
		})
	});
	$("#menu .view").mouseover(function() {
		$(this).css({
			background: "#e48907",
			color: "#fff"
		})
	});
	$("#menu .view").mouseout(function() {
		$(this).css({
			background: "#efefef",
			color: "#333"
		})
	});
	$("#reservation .btn-reservation").mouseover(function() {
		$(this).css({
			background: "#e48907",
			color: "#fff"
		})
	});
	$("#reservation .btn-reservation").mouseout(function() {
		$(this).css({
			background: "#efefef",
			color: "#333"
		})
	});
});
