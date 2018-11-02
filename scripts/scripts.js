$(document).ready(function() {

$(function(){
    $("a[href^='#about']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

$('.about_right ol li').circleType({radius: 800});

$('.serv_price div').circleType({radius: 150});


// $(window).scroll(function(){
// 		if($(window).scrollTop()>420){
// 			$('.about_left li:last-child').fadeIn(900)
// 		}else{
// 			$('.about_left li:last-child').fadeOut(700)
// 		}
// 	});

//по умолчанию скрыть


});
