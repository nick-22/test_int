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

    // плавное появление элементов
    // Возвращает отступ для показа элемента по его селектору
    function getOffset(selector) {
        var elem = $(selector);
        var offsetTop = elem.offset().top;

        return offsetTop - window.innerHeight / 1.3;
    }

    // Скрывает/показывает элемент
    function fadeElement (selector, offset, duration) {
        if($(window).scrollTop() > offset) {
			$(selector).fadeIn(duration);
		} else {
			$(selector).fadeOut(duration);
		}
    }

    $(window).scroll(function() {
        var offset = getOffset('.help');
        var fadeDuration = 1000;
        var selectors = [
            {
                parent: '.help',
                child: '.help>ul>li',
            },
            {
                parent: '.cases',
                child: '.cases>ul>li',
            },
        ];

        selectors.forEach(function (selector) {
            var offset = getOffset(selector.parent);

            fadeElement(selector.child, offset, fadeDuration);
        });
	});

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

     // Валидация полей
    $("#form").validate({
         rules:{
            login:{
              required: true,
              minlength: 4,
              maxlength: 16,
            },
            tel:{
              required: true,
            },
            mail:{
                required: true,
                email: true,
            },
            textarea:{
              required: true,
              minlength: 4,
            },
         },
         messages: {
             login:{
                 required: "Это поле обязательно для заполнения",
                 minlength: "Логин должен содержать минимум 4 символа",
                 maxlength: "Максимальное число символов - 16",
             },
             textarea:{
                 required: "Это поле обязательно для заполнения",
                 minlength: "Текст должен содержать минимум 4 символа",
             },
             mail:{
                 required: "Это поле обязательно для заполнения",
                 email: "E-mail должен быть в формате name@domain.com",
             },
             tel:{
                 required: "Это поле обязательно для заполнения",
             },
         }
     });

      // Маска телефона
      $('input[type="tel"]').mask('+7 (999) 999 99 99');

});
