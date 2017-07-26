$(function(){
    var windowWidth = $(window).width();
    //메뉴 스크롤 
    if(windowWidth >767){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
               $("#top-nav").css({
                    background:"#fbfbfb"
               });
               $(".top-nav-web a").css({
                    color:"#000000"
               });
               $("#nav-right-contact").css({
                    border:"1px solid #000000"
               });
               $(".top-nav-logo-img").attr("src","img/c_logo_scroll.png");
               $(".hamburger").css({
                    color:"#000000"
               });
                $('#top-nav').css('box-shadow', '0.5px 0.5px 0.5px rgba(0,0,0,0.1)');
                
           }else{
                $("#top-nav").css({
                    background:"0"
                });
                $(".top-nav-web a").css({
                    color:"#ffffff"
                });
                $("#nav-right-contact").css({
                    border:"1px solid #ffffff"
               });
                $(".top-nav-logo-img").attr("src","img/c_logo.png");
                $(".hamburger").css({
                    color:"#ffffff"
               });
                $('#top-nav').css('box-shadow', '0.5px 0.5px 0.5px rgba(0,0,0,0)');
            }

        });
    }
});