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
    var circleType = document.querySelector('.about_right ol');
    var circleTypeAttr = 'data-circle-type';
    var circleTypeList = document.querySelectorAll('.about_right ol li');
    var circleTypeListObj = {};
    var curElem = '';

    function addCircleType() {
        if(circleType.getAttribute(circleTypeAttr) != 1){
            for (var i = 0; i < circleTypeList.length; i++) {
                curElem = 'elem' + i;
                circleTypeListObj[curElem] = new CircleType(circleTypeList[i]);
                circleTypeListObj[curElem].radius(800);
            }

            circleType.setAttribute(circleTypeAttr, 1);
        }
    }

    function destroyCircleType() {
        if(circleType.getAttribute(circleTypeAttr) == 1) {
            for (var i = 0; i < circleTypeList.length; i++) {
                curElem = 'elem' + i;
                circleTypeListObj[curElem].destroy();
            }

            circleType.setAttribute(circleTypeAttr, 0);
        }
    }

    $('#add').click(function () {
        addCircleType();
    });

    $('#destroy').click(function () {
        destroyCircleType();
    });

    function setCircleType() {
        if ($(window).width() > 1023){
            addCircleType();
        }
        else {
            destroyCircleType();
        }
    }


    //событие при изменении ширины окна
    $(window).resize(function() {
        setCircleType();
    });

    // срабатывает при загрузке страницы
    $(function(){
        setCircleType();
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
    $(function($) {
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

    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');

     open_modal.click( function(event){
         event.preventDefault();
         var div = $(this).attr('href');
         overlay.fadeIn(400,
             function(){
                 $(div)
                     .css('display', 'block')
                     .animate({opacity: 1, top: '0%'}, 200);
         });
     });

     close.click( function(){
        modal
         .animate({opacity: 0, top: '0%'}, 200,
             function(){
                 $(this).css('display', 'none');
                 overlay.fadeOut(400);
             }
         );
     });

     // Валидация полей
    $('#form').validate({
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
     $('#modal_form').validate({
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
