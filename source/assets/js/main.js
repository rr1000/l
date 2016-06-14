$(document).ready(function(){
    var m = $('.mobile-m');
    var n = $('header nav');

    m.click(function(){
        n.fadeToggle(350);
    });
});
