(function ($) {
    "use strict";

    var init,
        show,
        hide,
        stop,
        log,
        defaultOptions = {
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

    init = function (el, options) {
        $(el).data("jquery-hysteresis-options", $.extend(defaultOptions, options));
    };

    show = function (el, event) {
        var data = $(el).data("jquery-hysteresis-options");
        stop(el);
        log(data.debug, "showing after " + data.outDelay + " ms");
        data.timer = setTimeout(function () {
            data.show(el, event);
            log(data.debug, "show done");
        }, data.inDelay);
    };

    hide = function (el, event) {
        var data = $(el).data("jquery-hysteresis-options");
        stop(el);
        log(data.debug, "hiding after " + data.outDelay + " ms");
        data.timer = setTimeout(function () {
            data.hide(el, event);
            log(data.debug, "hide done");
        }, data.outDelay);
    };

    stop = function (el, event) {
        var data = $(el).data("jquery-hysteresis-options");
        if (data.timer) {
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

}(jQuery));