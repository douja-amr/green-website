
$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = 3;
<<<<<<< HEAD
    var w = $('#sliderchow').width() / show;
    var l = $('.slide_chow').length;
    
    $('.slide_chow').width(w);
    $('#slide-containerchow').width(w * l)
    
    function slider() {
        $('.slide_chow:first-child').animate({
=======
    var w = $('#slider').width() / show;
    var l = $('.slide').length;
    
    $('.slide').width(w);
    $('#slide-container').width(w * l)
    
    function slider() {
        $('.slide:first-child').animate({
>>>>>>> about-us
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slider, 2000);
    
<<<<<<< HEAD
    $('#sliderchow').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(sliderchow, 2000);
=======
    $('#slider').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(slider, 2000);
>>>>>>> about-us
    });
});
