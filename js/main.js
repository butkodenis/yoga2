$.noConflict();
jQuery(document).ready(function ($) {
    // валидация
    $("#form").validetta({


    });

    $("#basic").hover(function(){
        $("h2.h2").toggleClass("basic");


    });

    $("#pro").hover(function(){
        $("h2.h23").toggleClass("basic");

    });
    $("#premium").hover(function(){
        $("h2.h24").toggleClass("basic");

    });


    // плавная прокрутка
    $('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1500);
        return false;
    });


    // слайдер slick
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true

    });
    $('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav2'
    });
    $('.slider-nav2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for2',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });



    // скрытый фильтр

    // $(".hide-menu").click( function () {
    //     $(".portfolio-filtr").slideToggle("slow");
    //     $("#filtr-all").animate({
    //         opacity: '0.99'
    //     }, 1300);
    //     $("#filtr-1").animate({
    //         opacity: '0.99'
    //     }, 1600);
    //     $("#filtr-2").animate({
    //         opacity: '0.99'
    //     }, 2000);
    //     $("#filtr-3").animate({
    //         opacity: '0.99'
    //     }, 2400);
    //     $("#filtr-4").animate({
    //         opacity: '0.99'
    //     }, 2800);
    //     $("#filtr-5").animate({
    //         opacity: '0.99'
    //     }, 3200);
    //
    // });

    // фильтрация блоков портфолио  ( незабыть .mix { display: none;})

    // $(function(){
    //     $("#filter-block").mixItUp({
    //
    //     });
    // });

        //   show more

    // size_li = $("#filter-block > div").size();
    // x=9;
    // console.log(size_li);
    // $('#filter-block  > div:lt('+x+')').show();
    // $('#loadMore').click(function () {
    //     x = (x+3 <= size_li) ? x+3 : size_li;
    //     $('#filter-block > div:lt('+x+')').show();
    // });



        // изминение при прокрутке nav
    // if ($('#contact').length > 0) {
    //     (function () {
    //         $(window).on("scroll", function() {
    //             if ($(window).scrollTop() > 50) $('.navbar').addClass('fix') && $('#logo').attr("src", 'images/logo.svg' );
    //             else $('.navbar').removeClass('fix') && $('#logo').attr("src", 'images/logo.png' ) ;
    //         });
    //     })();
    // }





   //slider
   //  if ($('.owl-carousel').length > 0) {
   //      (function () {
   //          //слайдер с коментариями
   //          $('.carusel_1').owlCarousel({
   //              loop:true,
   //              // margin:10,
   //              navText : ["",""],
   //              autoplay: true,
   //              nav:true,
   //              center: true,
   //              smartSpeed:1000, //Время движения слайда
   //              autoplayTimeout:6000, //Время смены слайда
   //              responsive:{
   //                  0:{
   //                      items:1
   //                  },
   //                  600:{
   //                      items:1
   //                  },
   //                  1000:{
   //                      items:1
   //                  }
   //              }
   //          });
   //          // слайдер с логотипами
   //          $('.slide-partners').owlCarousel({
   //              loop:true, //Зацикливаем слайдер
   //              // margin:10, //Отступ от картино если выводите больше 1
   //              nav:false, //Отключил навигацию
   //              autoplay:true, //Автозапуск слайдера
   //              smartSpeed:2000, //Время движения слайда
   //              autoplayTimeout:4000, //Время смены слайда
   //              responsive:{ //Адаптация в зависимости от разрешения экрана
   //                  0:{
   //                      items:5
   //                  },
   //                  600:{
   //                      items:5
   //                  },
   //                  1000:{
   //                      items:5
   //                  }
   //              }
   //          });
   //
   //          // слайдер с блогами
   //          $('.slide-blog').owlCarousel({
   //              loop:true,
   //              margin:10,
   //              nav:true,
   //              responsive:{
   //                  0:{
   //                      items:1
   //                  },
   //                  600:{
   //                      items:3
   //                  },
   //                  1000:{
   //                      items:3
   //                  }
   //              }
   //          });
   //
   //      })();
   //  }








});
// $(document).ready(function(){


//
//         size_li = $("#filter-block > div").length;
//         x=9;
//         console.log(size_li);
//         $('#filter-block  > div:lt('+x+')').show();
//         $('#loadMore').click(function () {
//             x = (x+3 <= size_li) ? x+3 : size_li;
//             $('#filter-block > div:lt('+x+')').show();
//         });
//
// //



    // $(function(){
    //    sizeMenu = $('#hide-menu').scrollTop();
    //    console.log(sizeMenu);
    //     var s = $("#hide-menu").scrollTop();
    //
    //     $('p').text("scrollTop = " + s)
    // });












// });


