$(document).ready(function () {

    //링크 끄기
    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    //상위 이벤트
    $('.new-wrap').slick({
        slide: "div",
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        prevArrow: "<i class='new-arrow-l fas fa-arrow-left'></i>",
        nextArrow: "<i class='new-arrow-r fas fa-arrow-right'></i>",
    });
    
    //메뉴
    $('.header-search').click(function () {
        if ($('.header-search').hasClass('active')) {
            $('.header-search').removeClass('active');
        } else {
            $('.header-search').addClass('active');
        }
    });

    //2차 메뉴
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
    
    //메인
    $('.main').slick({
        infinite: true, // 무한반복
        centerMode: false,
        slidesToShow: 1, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: true, // 점 네비게이션 표시
        arrows: true, // 화살표 표시
        fade: true, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: true, //자동스크롤
        autoplaySpeed: 1500, //자동스크롤 속도
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        prevArrow: $(".prevBox"),
        nextArrow: $(".nextBox"),
    });

    //sec1
    $('.good-wrap').slick({
        infinite: true, // 무한반복
        centerMode: false,
        slidesToShow: 3, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: false, // 점 네비게이션 표시
        arrows: true, // 화살표 표시
        fade: false, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: false, //자동스크롤
        autoplaySpeed: 2000, //자동스크롤 속도
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        prevArrow: $(".l-arrow"),
        nextArrow: $(".r-arrow"),
    });

    //sec2
    var index = 0;

    var swiper = new Swiper('.sec2-right', {
        slidesPerView: 'auto',
        autoplay: false,
        pagination: {
            el: '.sec2-right .swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.sec2-right .swiper-button-next',
            prevEl: '.sec2-right .swiper-button-prev',
        },
    });
    //sec4
    $('.follow-img-wrap').slick({
        infinite: true, // 무한반복
        centerMode: false,
        slidesToShow: 6, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: false, // 점 네비게이션 표시
        arrows: false, // 화살표 표시
        fade: false, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: true, //자동스크롤
        autoplaySpeed: 2000, //자동스크롤 속도
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    });

    //업 버튼
    $(window).scroll(function () {
        var $scrollTop = $(this).scrollTop();
        console.log($scrollTop);

        if ($scrollTop > 800) {
            $(".go-top").css({
                opacity: 1
            })
        } else if ($scrollTop <= 800) {
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

//메뉴 스크롤 탑
$(window).scroll(function () {
    var $ThisScollTop = $(this).scrollTop();

    if ($ThisScollTop > 0) {
        $(".wrap").css({
            "top": 0
        });
        $(".icon > .icon-box").css({
            "width": "55px"
        })
    } else {
        $(".wrap").css({
            "top": "50px"
        });
        $(".icon>.icon-box").css({
            "width": "200px"
        })
    }

});
