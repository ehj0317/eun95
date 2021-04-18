$(document).ready(function () {

    //링크 끄기
    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    //헤더 스크롤 고정
    $(window).scroll(function () {
        var $scrollTop = $(this).scrollTop();
        console.log($scrollTop);
        
        var widtest = $(this).width();
        console.log(widtest);
        
        
        if( widtest < 32 ){
            
            
            $(".header3").css({
                'display': 'none'
            })
            
             
        } else {


            if ($scrollTop > 32) {
                $(".header3").css({
                'display': 'block'
                })
                $('.nav-menu-wrap').css({
                     'position':'fixed',
                'top':'60px',
                })
            } else if ($scrollTop <= 1100) {
                    $(".header3").css({
                    'display': 'none'
                })
                $('.nav-menu-wrap').css({
                     'position':'fixed',
                'top':'100px',
                })
            }
            
        }
        

    });

//    $(window).resize(function () {
//        if ($(window).width() < 1201) {
//            $(".header3").css({
//                'display': 'none'
//            })
//        }
//    });


    //헤더 메뉴
    //2차 메뉴
    $(".menu-box1 > li").mouseover(function () {
        var $thisIndex = $(this).index();
        console.log($thisIndex);
        $(".nav-menu-wrap > .menu-box2").removeClass("active");
        $(".nav-menu-wrap > .menu-box2").eq($thisIndex).addClass("active");
    });

    $(".menu-box1 > li").mouseleave(function () {

        $(".nav-menu-wrap > .menu-box2").removeClass("active");

    });

    $(".nav-menu-wrap > .menu-box2").mouseover(function () {
        $(this).addClass("active");
    });

    $(".nav-menu-wrap > .menu-box2").mouseleave(function () {
        $(this).removeClass("active");
    });

    //헤더 전체메뉴
    $('.header2 .menu-icon-img').click(function () {
        if ($('.icon-hover').hasClass('active')) {
            $('.icon-hover').removeClass('active')
        } else {
            $('.icon-hover').addClass('active');
        }

        $(".full-menu-wrap").toggleClass("active")
    });

    $('.header3 .menu-icon-img').click(function () {
        if ($('.icon-hover').hasClass('active')) {
            $('.icon-hover').removeClass('active')
        } else {
            $('.icon-hover').addClass('active');
        }

        $(".full-menu-wrap").toggleClass("active")
    });


    //스크롤 매직
    //스크롤 매직, 컨트롤러  이건 한번만 만들면 됩니다.
    var controller = new ScrollMagic.Controller();

    // 적용해야하는 애니메이션-메인 페이드인업0
    var tween2 = TweenMax.to('.main-icon>li', 1, {
        opacity: 1,
        y: 0, //transform: translateX 의 줄임말
        //background-color 같이 '-'가 들어갈경우에는 낙타 표기법으로 써준다 (backgroundColor)
    });

    // 스크롤매직 씬 생성-메인 페이드인업0
    var scene2 = new ScrollMagic.Scene({
            triggerElement: ".container.main",
            triggerHook: 0.7, //0~1 ,
            offset: 1,
        })
        .setTween(tween2) // 애니메이션 등록
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "0",
            colorTrigger: "rgba(0,0,0,0)", //트리거 팁 색상
            colorStart: "rgba(0,0,0,0)", //스타트 팁 색상
            colorEnd: "rgba(0,0,0,0)", //종료 팁 색상
            indent: 40 //우측 스크롤바부터 얼마나 떨어뜨릴지
        });

    // 적용해야하는 애니메이션-메인 페이드인아웃0
    var tween2 = TweenMax.to('.main-icon>li', 1, {
        opacity: 0,
        y: '50%', //transform: translateX 의 줄임말
        //background-color 같이 '-'가 들어갈경우에는 낙타 표기법으로 써준다 (backgroundColor)
    });

    // 스크롤매직 씬 생성-메인 페이드인아웃0
    var scene2 = new ScrollMagic.Scene({
            triggerElement: ".container.main-icon",
            triggerHook: 0.7, //0~1 ,
            offset: 1,
        })
        .setTween(tween2) // 애니메이션 등록
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "0",
            colorTrigger: "rgba(0,0,0,0)", //트리거 팁 색상
            colorStart: "rgba(0,0,0,0)", //스타트 팁 색상
            colorEnd: "rgba(0,0,0,0)", //종료 팁 색상
            indent: 40 //우측 스크롤바부터 얼마나 떨어뜨릴지
        });


    // 적용해야하는 애니메이션-섹션0 페이드인left
    var tween1 = TweenMax.to('.sec0-left', 1, {
        opacity: 1,
        x: '50%', //transform: translateX 의 줄임말
        //background-color 같이 '-'가 들어갈경우에는 낙타 표기법으로 써준다 (backgroundColor)
    });

    // 스크롤매직 씬 생성-섹션0 페이드인left
    var scene2 = new ScrollMagic.Scene({
            triggerElement: ".container.section0",
            triggerHook: 0.7, //0~1 ,
            offset: 0,
        })
        .setTween(tween1) // 애니메이션 등록
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "2",
            colorTrigger: "rgba(0,0,0,0)", //트리거 팁 색상
            colorStart: "rgba(0,0,0,0)", //스타트 팁 색상
            colorEnd: "rgba(0,0,0,0)", //종료 팁 색상
            indent: 40 //우측 스크롤바부터 얼마나 떨어뜨릴지
        });

    // 적용해야하는 애니메이션-섹션3 페이드인업1
    var tween2 = TweenMax.to('.sec3-slide', 1, {
        opacity: 1,
        y: 0, //transform: translateX 의 줄임말
        //background-color 같이 '-'가 들어갈경우에는 낙타 표기법으로 써준다 (backgroundColor)
    });

    // 스크롤매직 씬 생성-섹션3 페이드인업1
    var scene2 = new ScrollMagic.Scene({
            triggerElement: ".container.section3",
            triggerHook: 0.7, //0~1 ,
            offset: 0,
        })
        .setTween(tween2) // 애니메이션 등록
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "3",
            colorTrigger: "rgba(0,0,0,0)", //트리거 팁 색상
            colorStart: "rgba(0,0,0,0)", //스타트 팁 색상
            colorEnd: "rgba(0,0,0,0)", //종료 팁 색상
            indent: 40 //우측 스크롤바부터 얼마나 떨어뜨릴지
        });

    // 적용해야하는 애니메이션-섹션3 페이드인업2
    var tween3 = TweenMax.to('.sec3-slide2', 1, {
        opacity: 1,
        y: 0,
        //transform: translateX 의 줄임말
        //background-color 같이 '-'가 들어갈경우에는 낙타 표기법으로 써준다 (backgroundColor)
    });


    // 스크롤매직 씬 생성-섹션3 페이드인업2
    var scene2 = new ScrollMagic.Scene({
            triggerElement: ".container.section3",
            triggerHook: 0.7, //0~1 ,
            offset: 90, //애니메이션 동작 시간 조절
        })
        .setTween(tween3) // 애니메이션 등록
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: '3', //팁 이름, 기본값 넘버링
            colorTrigger: "rgba(0,0,0,0)", //트리거 팁 색상
            colorStart: "rgba(0,0,0,0)", //스타트 팁 색상
            colorEnd: "rgba(0,0,0,0)", //종료 팁 색상
            indent: 40 //우측 스크롤바부터 얼마나 떨어뜨릴지
        });


    //sec1 슬라이드
    $('.sec1-slide').slick({
        infinite: true, // 무한반복
        slidesToShow: 1, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: true, // 점 네비게이션 표시
        arrows: true, // 화살표 표시
        prevArrow: "<button type='button' class='sec1-arrow-l'></button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='sec1-arrow-r'></button>",
        fade: false, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: true, //자동스크롤
        autoplaySpeed: 1000, //자동스크롤 속도
        responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 960, //화면 사이즈 960px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                            dots:false
						} 
					},
					{ 
						breakpoint: 480, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                            dots:false
						} 
					}
				]
    });

    $(".stop-btn").click(function () {
        $(".sec1-slide").slick("slickPause");
        $(".stop-btn").removeClass("active");
        $(".play-btn").addClass("active");
    });
    $(".play-btn").click(function () {
        $(".sec1-slide").slick("slickPlay");
        $(".play-btn").removeClass("active");
        $(".stop-btn").addClass("active");
    });

    //sce1 아이콘
    $(".box1-top").click(function () {
        $(".box1-bot").addClass('active');
        $(".box2-bot").removeClass('active');
        $(".box3-bot").removeClass('active');
    });
    $(".box2-top").click(function () {
        $(".box2-bot").addClass('active');
        $(".box1-bot").removeClass('active');
        $(".box3-bot").removeClass('active');
    });
    $(".box3-top").click(function () {
        $(".box3-bot").addClass('active');
        $(".box1-bot").removeClass('active');
        $(".box2-bot").removeClass('active');
    });

    //sec2 슬라이드
    //이미지 호버
    $('.sec2-box-wrap').hover(function () {
        $(this).find('.img-hover').addClass('active');
    }, function () {
        $(this).find('.img-hover').removeClass('active');
    });
    //하트
    $('.heart-btn').click(function () {
        $(this).toggleClass('active');
    });


    //슬라이드
    $('.sec2-slide-wrap').slick({
        infinite: true, // 무한반복
        slidesToShow: 4, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: true, // 점 네비게이션 표시
        arrows: true, // 화살표 표시
        prevArrow: "<button type='button' class='sec2-arrow-l'></button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='sec2-arrow-r'></button>",
        fade: false, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: true, //자동스크롤
        autoplaySpeed: 1000, //자동스크롤 속도
        responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 960, //화면 사이즈 960px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:2,
                            dots:false
						} 
					},
					{ 
						breakpoint: 480, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:1,
                            dots:false
						} 
					}
				]
    });

    $(".stop-btn").click(function () {
        $(".sec2-slide-wrap").slick("slickPause");
        $(".stop-btn").removeClass("active");
        $(".play-btn").addClass("active");
    });
    $(".play-btn").click(function () {
        $(".sec2-slide-wrap").slick("slickPlay");
        $(".play-btn").removeClass("active");
        $(".stop-btn").addClass("active");
    });

    //sec4 공고 알림
    $(".left-01").click(function () {
        $(".left-1").addClass('active');
        $(".left-2").removeClass('active');
    });
    $(".left-02").click(function () {
        $(".left-2").addClass('active');
        $(".left-1").removeClass('active');
    });

    //sec4 슬라이드
    $('.sec4-slide-wrap').slick({
        infinite: true, // 무한반복
        slidesToShow: 1, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: true, // 점 네비게이션 표시
        arrows: false, // 화살표 표시
        prevArrow: "<button type='button' class='sec4-arrow-l'></button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='sec4-arrow-r'></button>",
        fade: false, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: true, //자동스크롤
        autoplaySpeed: 1000, //자동스크롤 속도
        responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint:1200, //화면 사이즈 960px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:3,
                            dots:false
						} 
					},
					{ 
						breakpoint: 480, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:1,
                            dots:false
						} 
					}
				]
    });

    $(".stop-btn").click(function () {
        $(".sec4-slide-wrap").slick("slickPause");
        $(".stop-btn").removeClass("active");
        $(".play-btn").addClass("active");
    });
    $(".play-btn").click(function () {
        $(".sec4-slide-wrap").slick("slickPlay");
        $(".play-btn").removeClass("active");
        $(".stop-btn").addClass("active");
    });




});
