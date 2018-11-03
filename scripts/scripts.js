$(document).ready(function() {

    //плавная прокрутка до якоря

    $(function(){
        $("a[href^='#about']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
    });

    //текст по дуге

    $(function(){
        if ($(window).width() > 1023){
            $('.about_right ol li').circleType({radius: 800});
        }
    });


    //текст по дуге

    $('.serv_price div').circleType({radius: 150});

    // плаавное появление элементов

    // $(window).scroll(function(){
    // 		if($(window).scrollTop()>1220){
    // 			$('.help>ul>li').fadeIn(1000)
    // 		}else{
    // 			$('.help>ul>li').fadeOut(1000)
    // 		}
    // 	});
    //по умолчанию скрыть





    //Фикс меню

    jQuery(function($) {
        $(window).scroll(function(){
            if($(this).scrollTop()>76){
                $('header').addClass('fixed');
            }
            else if ($(this).scrollTop()<76){
                $('header').removeClass('fixed');
            }
        });
    });

    //модальные окна

    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay.fadeIn(400, //пoкaзывaем oверлэй
             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                     .css('display', 'block')
                     .animate({opacity: 1, top: '0%'}, 200); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
             .animate({opacity: 0, top: '0%'}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
     });


});
