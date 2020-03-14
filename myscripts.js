
$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = 3;
    var w = $('#sliderchow').width() / show;
    var l = $('.slide_chow').length;
    
    $('.slide_chow').width(w);
    $('#slide-containerchow').width(w * l)
    
    function slider() {
        $('.slide_chow:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slider, 2000);
    
    $('#sliderchow').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(sliderchow, 2000);
    });
});
