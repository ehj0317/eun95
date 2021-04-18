$(document).ready(function () {

    //링크 끄기
    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    //헤더 스크롤 고정
    $(window).scroll(function () {
        var $scrollTop = $(this).scrollTop();
        console.log($scrollTop);

        if ($scrollTop > 70) {
            $(".header-bottom>.logo").css({
                opacity: 1
            })
            $('.header-bottom-bg').addClass('active')
            $('.header-bottom').addClass('active')
            
            $('#nav-bottom-wrap').css({
                'position':'fixed',
                'top':'60px',
                'backgroundColor':'white',
            })
        } else if ($scrollTop <= 1100) {
            $(".header-bottom>.logo").css({
                opacity: 0
            })
            $('.header-bottom-bg').removeClass('active')
            $('.header-bottom').removeClass('active')
            $('#nav-bottom-wrap').css({
                'position':'fixed',
                'top':'170px',
                'backgroundColor':'rgba(255,255,255,0.55)',
            })
        }
    });

    //하단 메뉴    
    $('.header-bottom>.nav-wrap>li , #nav-bottom-wrap .nav-bottom .nav-bottom-list > .nav-content').hover(function () {
        $(this).index();
        $('#nav-bottom-wrap .nav-content').eq($(this).index()).addClass('active');
    }, function () {
        $('#nav-bottom-wrap .nav-content').eq($(this).index()).removeClass('active');
    });


    $('.header-bottom>.nav-wrap, #nav-bottom-wrap').hover(function () {
        $('#nav-bottom-wrap').addClass('active');
    }, function () {
        $('#nav-bottom-wrap').removeClass('active');
    });
    
    //메인 슬라이드
    $('.main').slick({
        infinite: true, // 무한반복
        slidesToShow: 1, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: false, // 점 네비게이션 표시
        arrows: false, // 화살표 표시
        fade: true, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: true, //자동스크롤
        autoplaySpeed: 1500, //자동스크롤 속도
    });
    
    //sec
    $('.calc2').slick({
        infinite: true, // 무한반복
        slidesToShow: 1, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: true, // 점 네비게이션 표시
        arrows: false, // 화살표 표시
        fade: true, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: true, //자동스크롤
        autoplaySpeed: 1500, //자동스크롤 속도
    });
    
    //sec2
    $('.sec2-right').slick({
        infinite: true, // 무한반복
        slidesToShow: 2, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: false, // 점 네비게이션 표시
        arrows: true, // 화살표 표시
        fade: false, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: true, //자동스크롤
        autoplaySpeed: 1500, //자동스크롤 속도
        nextArrow: "<button type='button' class='nextBox'></button>",
    });
    
    //sec3
    $(".box1-top").click(function () {
        $(".box1-bot").addClass('active');
        $(".box2-bot").removeClass('active');
    });
    $(".box2-top").click(function () {
        $(".box2-bot").addClass('active');
        $(".box1-bot").removeClass('active');
    });

    

    //업 버튼
    $(window).scroll(function () {
        var $scrollTop = $(this).scrollTop();
        console.log($scrollTop);

        if ($scrollTop > 1100) {
            $(".go-top").css({
                opacity: 1
            })
        } else if ($scrollTop <= 1100) {
            $(".go-top").css({
                opacity: 0
            })
        }

    });



});
