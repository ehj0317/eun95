$(document).ready(function () {

    //링크 끄기
    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });


    //sec1
    $('.sec1-box').slick({
        infinite: true, // 무한반복
        centerMode: false,
        slidesToShow: 1, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: false, // 점 네비게이션 표시
        arrows: true, // 화살표 표시
        fade: false, // 페이드 효과
        vertical: true, // 상하 슬라이드
        autoplay: false, //자동스크롤
        autoplaySpeed: 1000, //자동스크롤 속도
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        prevArrow: $(".upBox"),
        // 이전 화살표 모양 설정"<button type='button' class='slick-prev'>Previous</button>"
        nextArrow: $(".botBox"),
        // 다음 화살표 모양 설정"<button type='button' class='slick-next'>Next</button>"
    });

    $(".btn1").mouseover(function () {
        $(".slide2-btn1").addClass('active');
        $(".slide2-btn2").removeClass('active');
    });

    $(".btn2").mouseover(function () {
        $(".slide2-btn2").addClass('active');
        $(".slide2-btn1").removeClass('active');
    });

    $('.sec1, #uno').click(function () {
        $('.slide1 h1').addClass('active');
    });

    $('#dos,#tres,#cuatro,#cinco').click(function () {
        $('.slide1 h1').removeClass('active');
    });

    //sec2

    //sec3
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );

    $('.sec3, #tres').click(function () {
        $('.sec3-box>.profile-box').addClass('active');
    });

    $('#dos,#uno,#cuatro,#cinco').click(function () {
        $('.sec3-box>.profile-box').removeClass('active');
    });

    //sec4
    $(".hover2").mouseleave(
        function () {
            $(this).removeClass("hover2");
        }
    );

    $('.fade').slick({
        dots: false,
        arrows: true, // 화살표 표시
        nextArrow: $(".sec-arrow-r"),
        infinite: true,
        autoplay: false,
        Speed: 500,
        fade: true,
        cssEase: 'linear',
    });

    $('.sec4, .sec-arrow-r, #cuatro').click(function () {
        $('.gallery-box').addClass('active');
    });

    $('.sec-arrow-r,#dos,#uno,#tres,#cinco').click(function () {
        $('.gallery-box').removeClass('active');
    });



    //sec5

});
