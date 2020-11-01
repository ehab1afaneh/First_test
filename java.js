$(document).ready(function() {
    initialize();
    $(window).resize(function() {
        console.log($(document).width())
        initialize();
    })
});


function initialize() {
    if ($(document).width() < 800) {
        $('.nav_edit').removeClass("ml-auto");
        $('.nav_edit').addClass("m-auto");
        $('.nav_edit').css("margin", "0 auto");
        $('.logo_image_container').css("margin", "0 auto");
        $('.navbar_2').css("margin-top", "0");
        $('.center_text').css("margin-left", "20px");
        $('.ul_footer').css("border","none") ;

    } else {
        $('.nav_edit').addClass("ml-auto");
        $('.nav_edit').removeClass("m-auto");
        $('.nav_edit').css("margin", "");
        $('.logo_image_container').css("margin", "");
        $('.navbar_2').css("margin-top", "-80px");
        $('.center_text').css("margin-left", "auto");
        $('.ul_footer').css("border-right","1px solid #787878") ;
        $('.last_footer').css("border","none")

    }
}