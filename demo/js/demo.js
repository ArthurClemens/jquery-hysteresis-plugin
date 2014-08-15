jQuery(document).ready(function($) {

    $(".menu1 > ul > li").hysteresis({
        show: function(el, e) {
            $(el).addClass("over");
        },
        hide: function(el, e) {
            $(el).removeClass("over");
        },
        inDelay: 0,
        outDelay: 0
    }).hover(function (e) {
        $(this).hysteresis("show", e);
    }, function (e) {
        $(this).hysteresis("hide", e);
    });
    
    $(".menu2 > ul > li").hysteresis({
        show: function(el, e) {
            $(el).addClass("over");
        },
        hide: function(el, e) {
            $(el).removeClass("over");
        },
        inDelay: 0,
        outDelay: 200
    }).hover(function (e) {
        $(this).hysteresis("show", e);
    }, function (e) {
        $(this).hysteresis("hide", e);
    });
    
    $(".menu3 > ul > li").hysteresis({
        show: function(el, e) {
            $(el).addClass("over");
        },
        hide: function(el, e) {
            $(el).removeClass("over");
        },
        inDelay: 200,
        outDelay: 300
    }).hover(function (e) {
        $(this).hysteresis("show", e);
    }, function (e) {
        $(this).hysteresis("hide", e);
    });
    
});