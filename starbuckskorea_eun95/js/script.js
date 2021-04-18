$(document).ready(function () {

    //링크 끄기
    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    //팝업
    $(".layer>a>svg").click(function () {
        $(".layer").addClass("active");
    });

    $(".layer2>a>svg").click(function () {
        $(".layer2").addClass("active");
    });

    //모바일 헤더
    $('#cssmenu li.has-sub>a').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        } else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });

    $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');

    (function getColor() {
        var r, g, b;
        var textColor = $('#cssmenu').css('color');
        textColor = textColor.slice(4);
        r = textColor.slice(0, textColor.indexOf(','));
        textColor = textColor.slice(textColor.indexOf(' ') + 1);
        g = textColor.slice(0, textColor.indexOf(','));
        textColor = textColor.slice(textColor.indexOf(' ') + 1);
        b = textColor.slice(0, textColor.indexOf(')'));
        var l = rgbToHsl(r, g, b);
        if (l > 0.7) {
            $('#cssmenu>ul>li>a').css('text-shadow', '0 1px 1px rgba(0, 0, 0, .35)');
            $('#cssmenu>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)');
        } else {
            $('#cssmenu>ul>li>a').css('text-shadow', '0 1px 0 rgba(255, 255, 255, .35)');
            $('#cssmenu>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)');
        }
    })();

    function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b),
            min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0;
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return l;
    }

    $(".mobile-header>svg").click(function () {
        $(".mobile-header").addClass("active");
    });

    $(".header-mobile>svg").click(function () {
        $(".mobile-header").removeClass("active");
    });


    //헤더 스크롤 고정
    $(window).scroll(function () {
        var $scrollTop = $(this).scrollTop();
        console.log($scrollTop);

        if ($scrollTop > 70) {
            $(".header3").css({
                opacity: 1
            })
        } else if ($scrollTop <= 1100) {
            $(".header3").css({
                opacity: 0
            })
        }
    });


    //헤더 검색+점셋
    $('.header3-search').click(function () {
        if ($('.header3-search').hasClass('active')) {
            $('.header3-search').removeClass('active');
        } else {
            $('.header3-search').addClass('active');
        }
    });

    $('.header3-icon').click(function () {
        if ($('.header3-icon-hover').hasClass('active')) {
            $('.header3-icon-hover').removeClass('active');
        } else {
            $('.header3-icon-hover').addClass('active');
        }
    });

    $('.header2-search').click(function () {
        if ($('.header2-search').hasClass('active')) {
            $('.header2-search').removeClass('active');
        } else {
            $('.header2-search').addClass('active');
        }
    });


    //메인 슬라이드
    $('.main-wrap').slick({
        infinite: true, // 무한반복
        slidesToShow: 1, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: true, // 점 네비게이션 표시
        arrows: false, // 화살표 표시
        fade: false, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: true, //자동스크롤
        autoplaySpeed: 1000, //자동스크롤 속도
    });

    $(".stop-btn").click(function () {
        $(".main-wrap").slick("slickPause");
        $(".stop-btn").removeClass("active");
        $(".play-btn").addClass("active");
    });
    $(".play-btn").click(function () {
        $(".main-wrap").slick("slickPlay");
        $(".play-btn").removeClass("active");
        $(".stop-btn").addClass("active");
    });


    //프로모션 슬라이드
    $('.promotion-wrap').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true, //자동스크롤
        autoplaySpeed: 1000, //자동스크롤 속도
        dots: true,
        dotsClass: "slick-dots dot-bottom",
        arrows: true,
        prevArrow: "<button type='button' class='promotion-arrow-l'></button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='promotion-arrow-r'></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
    }
  ]
    });

    //리저브 애니메이션
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        console.log(scrollTop);

        if (scrollTop > 3300) {
            $(".animation").addClass("animation-run");
        }
    })


    //푸터 공지사항 슬라이드
    $('.event-wrap').slick({
        infinite: true, // 무한반복
        slidesToShow: 1, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: false, // 점 네비게이션 표시
        arrows: false, // 화살표 표시
        fade: false, // 페이드 효과
        vertical: true, // 상하 슬라이드
        autoplay: true, //자동스크롤
        autoplaySpeed: 1000, //자동스크롤 속도
    });

    //푸터 수상 슬라이드
    $('.award-wrap').slick({
        infinite: true, // 무한반복
        slidesToShow: 3, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: false, // 점 네비게이션 표시
        arrows: false, // 화살표 표시
        fade: false, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: true, //자동스크롤
        autoplaySpeed: 1000, //자동스크롤 속도
    });

    //업 버튼
    $(window).scroll(function () {
        var $scrollTop = $(this).scrollTop();
        console.log($scrollTop);

        if ($scrollTop > 900) {
            $(".go-top").css({
                opacity: 1
            })
        } else if ($scrollTop <= 1100) {
            $(".go-top").css({
                opacity: 0
            })
        }
    });

    $(".go-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });

});
