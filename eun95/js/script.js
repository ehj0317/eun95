$(document).ready(function () {

    //링크 끄기
    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    //sec0 - 햄버거 아이콘
    $(".icon-menu").click(function () {
        $(".icon-menu").toggleClass("active");
    });
    $(".icon-menu").click(function () {
        $(".side-menu-wrap").toggleClass("active");
    });
    $(".sec0-menu,.scroll").click(function () {
        $(".side2").addClass("active");
    });

    $("a,.scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });

    //sec0 - 사이드 메뉴 스크롤 고정
    $(window).scroll(function () {
        var $scrollTop = $(this).scrollTop();
        console.log($scrollTop);

        var widtest = $(this).width();
        console.log(widtest);


        if (widtest < 1080) {
            $(".side").css({
                'display': 'none',
            })
            $(".side2").css({
                'display': 'block',
            })
        } else {
            if ($scrollTop > 1000) {
                $(".side").css({
                    'display': 'block',
                    'position': 'fixed'
                })
                $(".side2").css({
                    'display': 'none',
                })
            } else if ($scrollTop <= 1080) {
                $(".side").css({
                    'display': 'none'
                })
            }
        }
    });

    //sec2
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: false
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrow: false,
        centerMode: true,
        focusOnSelect: true
    });

    //sec4 - graphic
    var index = 0;

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        initialSlide: 2,
        speed: 1000,
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        mousewheel: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    //sec4 - logo
    $(".tlogo-main>ul>li").on("click", function () {
        var idx = $(".tlogo-main>ul>li").index(this); //idx = 클릭한 li가 몇번째 요소인지
        $(".tlogo-main .b-img-box>div.b-img").stop().fadeOut("fast"); //모든 .bk 끄기
        $(".tlogo-main .b-img-box>div.b-img").eq(idx).stop().fadeIn("fast"); //.bk 중에 idx와 같은 순서의 요소 fadeIn.
        return false;
    });

    $(function () {
        $(".tlogo-img img").click(function () {
            // Récupérationdu body, pour la suite
            var $body = $("body");
            $thumbnail = $(this);

            var $blackout = $("<div id='blackout'>").css("display", "none");

            var $img = $("<img>").attr("src", $thumbnail.data("img"));
            $blackout.append($img);

            if ($(this).attr("alt")) {
                var $title = $("<div class='title'>" + $thumbnail.attr("alt") + "</div>");
                $blackout.append($title);
            }

            $blackout.click(function () {
                $blackout.fadeOut(function () {
                    $blackout.remove();
                });
            });

            $body.append($blackout);
            $blackout.fadeIn();

            if ($img.height() < $blackout.height()) {
                $img.css("marginTop", ($blackout.height() - $img.height()) / 2);
            }
        });
    });

    $(".logo-btn").click(function () {
        var current__height = $(".tlogo-imgwrap").height();
        var next__height = current__height + 300;

        if (next__height > 1290) {} else {
            $(".tlogo-imgwrap").css({
                "height": next__height + "px"
            });
        }
    });

    //sec4 - bookcover
    $(".bookcover-main>ul>li").on("click", function () {
        var idx = $(".bookcover-main>ul>li").index(this); //idx = 클릭한 li가 몇번째 요소인지
        $(".bookcover-main .b-book-wrap>div.b-book-box").stop().fadeOut("fast"); //모든 .bk 끄기
        $(".bookcover-main .b-book-wrap>div.b-book-box").eq(idx).stop().fadeIn("fast"); //.bk 중에 idx와 같은 순서의 요소 fadeIn.
        return false;
    });

    $('#rotate').click(function () {
        $('.book-main').toggleClass('active');
    });

    //sec4 - goods
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.gimg-box').hover(function () {
        $(this).find('.gimg').addClass('active');
    }, function () {
        $(this).find('.gimg').removeClass('active');
    });

    //sec4-render
        $('.slider').slick({
        infinite: true, // 무한반복
        slidesToShow: 1, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: false, // 점 네비게이션 표시
        arrows: true, // 화살표 표시
        fade: true, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: true, //자동스크롤
        autoplaySpeed: 1500, //자동스크롤 속도 
            speed: 500,
    });


    //sec5
    $('.js-input').keyup(function () {
        if ($(this).val()) {
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    });

    // 스크롤 매직, 컨트롤러
    var controller = new ScrollMagic.Controller();

    // 스크롤매직 씬 생성
    var scene1 = new ScrollMagic.Scene({
            triggerElement: ".sec0",
            triggerHook: 0, //0~1 ,
            duration: "100%"
        })
        .setPin(".sec0", {
            pushFollowers: false
        })
        .setTween(TweenMax.to('.progress svg:nth-child(2) path', 0.9, {
            'animation': 'load 10s'
        }))

        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "첫번째"
        });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: "#sec1",
            triggerHook: 0, //0~1 ,
            duration: "100%"
        })
        .setPin("#sec1", {
            pushFollowers: false
        })
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "두번째"
        });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: "#sec2",
            triggerHook: 0, //0~1 ,
            duration: "100%"
        })
        .setPin("#sec2", {
            pushFollowers: false
        })
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "세번째"
        });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: "#sec3",
            triggerHook: 0, //0~1 ,
            duration: "100%"
        })
        .setPin("#sec3", {
            pushFollowers: false
        })
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "네번째"
        });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: "#sec4",
            triggerHook: 0, //0~1 ,
            duration: "100%"
        })
        .setPin("#sec4", {
            pushFollowers: false
        })
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "네번째"
        });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: "#se5",
            triggerHook: 0, //0~1 ,
            duration: "100%"
        })
        .setPin("#sec5", {
            pushFollowers: false
        })
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "다섯번째"
        });

});
