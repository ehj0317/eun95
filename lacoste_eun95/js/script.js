$(document).ready(function () {

    //sec1 슬릭
    $('.fade').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500,
        fade: true,
        autoPlay: true,
        cssEase: 'linear',
    });

    //sec3 슬릭
    $('.sec3-wrap').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
        fade: false,
        autoPlay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: 'linear'
    });

    $('.sec3-left').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500,
        fade: true,
        autoPlay: true,
        cssEase: 'linear'
    });

    //sec5 슬릭
    $('.sec5-wrap').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500,
        fade: false,
        autoPlay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear'
    });

    //풀페이지

    if ($(window).width() < 480) {
        $('#fullpage').removeAttr('id');
    }

    const body = document.querySelector("body");
    const fullPage = document.getElementById("fullpage");
    const boxes = document.querySelectorAll(".box");

    new fullpage('#fullpage', {
        navigation: true,
        continuousVertical: false,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling: true,
        scrollHorizontally: true,
        navigationTooltips: ['', 'New Year Collectionㅡ', 'New Collectionㅡ', '', 'Saleㅡ', 'Sport Boutiqueㅡ', 'Your Lacosteㅡ', ''],
        navigationPosition: 'right',
        anchors: ['main', 'sec1', 'sec2', 'sec2-1', 'sec3', 'sec4', 'sec5', 'footer'],
        slidesNavigation: false,
        css3: false,
        scrollOverflow: true,
        afterLoad: function (origin, destination, direction) {
            const activeSection = destination.item;
            if (activeSection.querySelector(".main")) {
                activeSection.querySelector(".main").classList.add("kenburns-top");
            }
            if (activeSection.querySelector(".sec1-right-box")) {
                activeSection.querySelector(".sec1-right-box").classList.add("is-animated");
            }
            if (activeSection.querySelector(".sec2-txt")) {
                activeSection.querySelector(".sec2-txt").classList.add("is-animated");
            }
            if (activeSection.querySelector(".img1")) {
                activeSection.querySelector(".img1").classList.add("is-animated");
            }
            if (activeSection.querySelector(".sec4-right")) {
                activeSection.querySelector(".sec4-right").classList.add("is-animated");
            }
            if (activeSection.querySelector(".img2")) {
                activeSection.querySelector(".img2").classList.add("is-animated");
            }
        },
        onLeave: function (origin, destination, direction) {
            destination.isLast ?
                body.classList.add("fp-last") :
                body.classList.remove("fp-last");
            if (document.querySelector(".main.kenburns-top")) {
                document
                    .querySelector(".main.kenburns-top")
                    .classList.remove("kenburns-top");
            }
            if (document.querySelector(".sec1-right-box.is-animated")) {
                document
                    .querySelector(".sec1-right-box.is-animated")
                    .classList.remove("is-animated");
            }
            if (document.querySelector(".sec2-txt.is-animated")) {
                document
                    .querySelector(".sec2-txt.is-animated")
                    .classList.remove("is-animated");
            }
            if (document.querySelector(".img1.is-animated")) {
                document
                    .querySelector(".img1.is-animated")
                    .classList.remove("is-animated");
            }
            if (document.querySelector(".img2.is-animated")) {
                document
                    .querySelector(".img2.is-animated")
                    .classList.remove("is-animated");
            }
            if (document.querySelector(".sec4-right.is-animated")) {
                document
                    .querySelector(".sec4-right.is-animated")
                    .classList.remove("is-animated");
            }
        }
    });




    //링크 끄기
    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });


    //메인에서 섹션1 넘어가기
    $(document).on('click', '.main', function () {
        fullpage_api.moveTo('sec1', 1);
    });


    //헤더 메뉴
    //2차 메뉴
    $(".menu-box1 > li").mouseover(function () {
        var $thisIndex = $(this).index();
        console.log($thisIndex);
        $(".nav-menu-wrap > .menu-box2").removeClass("active");
        $(".nav-menu-wrap > .menu-box2").eq($thisIndex).addClass("active");
        $(".header").addClass("active");
    });

    $(".menu-box1 > li").mouseleave(function () {
        $(".nav-menu-wrap > .menu-box2").removeClass("active");
        $(".header").removeClass("active");
    });

    $(".nav-menu-wrap > .menu-box2").mouseover(function () {
        $(this).addClass("active");
        $(".header").addClass("active");
    });

    $(".nav-menu-wrap > .menu-box2").mouseleave(function () {
        $(this).removeClass("active");
        $(".header").removeClass("active");
    });

    //모바일 헤더
   $(function() {

  var w = $(window).width(),
    h = $(window).height();
  $('menu .container').height(h - 60);
  $('body').prepend('<div id="overlay">');

  $('#menu').click(function() {$('html').addClass('active');});
  $('#close-menu').click(function() {$('html').removeClass('active');});
  $('#overlay').click(function() {$('html').removeClass('active');});
  $(window).resize(function() {
    var w = $(window).width(),
      h = $(window).height();
    $('menu .container').height(h - 60);
  });

});

    //메인
    //메인 글자 애니메이션
    $(".main-wrap").mouseover(function () {
        $('.rubberBand').addClass("infinite");
    });
    $(".main-wrap").mouseleave(function () {
        $('.rubberBand').removeClass("infinite");
    });

    //헤더 스크롤 고정
    $(window).scroll(function () {
        var $scrollTop = $(this).scrollTop();
        console.log($scrollTop);

        if ($scrollTop > 32) {
            $(".scroll-box").css({
                'display': 'none'
            })
        } else if ($scrollTop <= 1100) {
            $(".scroll-box").css({
                'display': 'block'
            })
        }
    });







});
