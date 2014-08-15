/*
Hysteresis plugin for jQuery
Version 0.0.2
(c) 2013 Arthur Clemens arthur@visiblearea.com
Released under MIT licence
*/

(function ($) {
    "use strict";

    var DATA_KEY = "jquery-hysteresis-options",
        init,
        show,
        hide,
        stop,
        log;

    init = function (el, options) {
        $(el).data(DATA_KEY, $.extend({}, $.fn.hysteresis.defaults, options));
    };

    show = function (el, event) {
        var data = $(el).data(DATA_KEY);
        stop(el);
        log(data.debug, "showing after " + data.outDelay + " ms");
        data.timer = setTimeout(function () {
            data.show(el, event);
            log(data.debug, "show done");
        }, data.inDelay);
    };

    hide = function (el, event) {
        var data = $(el).data(DATA_KEY);
        stop(el);
        log(data.debug, "hiding after " + data.outDelay + " ms");
        data.timer = setTimeout(function () {
            data.hide(el, event);
            log(data.debug, "hide done");
        }, data.outDelay);
    };

    stop = function (el, event) {
        var data = $(el).data(DATA_KEY);
        if (data.timer !== -1) {
            log(data.debug, "stopping timer: " + data.timer);
            clearTimeout(data.timer);
            log(data.debug, "stopped");
        }
    };

    log = function (debugging, message) {
        if (!debugging) {
            return;
        }
        if (console && console.log) {
            console.log("jquery.hysteresis: " + message);
        }
    };

    $.fn.hysteresis = function (command, option, val) {
        if (typeof command === "object") {
            return this.each(function () {
                init(this, command);
            });
        }
        if (typeof command === "string") {
            switch (command.toLowerCase()) {
            case "show":
                return this.each(function () {
                    show(this, option);
                });
            case "hide":
                return this.each(function () {
                    hide(this, option);
                });
            case "stop":
                return this.each(function () {
                    stop(this, option);
                });
            }
        }
    };
    
    $.fn.hysteresis.defaults = {
        inDelay: 0,
        outDelay: 0,
        timer: -1,
        debug: false,
        show: function () {
            log(true, "show function not set");
        },
        hide: function () {
            log(true, "hide function not set");
        }
    };

}(jQuery));