# Hysteresis jQuery Plugin

version 0.0.1

## Features

Manage [hysteresis](http://en.wikipedia.org/wiki/Hysteresis) timings when interacting with elements.


## Usage

Initialize:

    $(".my-element").hysteresis({ ... });

Init options:

    show: function; params: element, event (if this was passed)
    hide: function; params: element, event (if this was passed)
    inDelay: delay in ms
    outDelay: delay in ms
    debug: true or false

Commands:

    $(".my-element").hysteresis("show");
    $(".my-element").hysteresis("hide");
    $(".my-element").hysteresis("stop");

## Example
    $(".my-element").hysteresis({
        show: function(el, e) {
            $(el)
              .find(".scrollbar")
              .removeClass("out")
              .addClass("over");
        },
        hide: function(el, e) {
            $(el)
              .find(".scrollbar.over")
              .removeClass("over")
              .addClass("out");
        },
        inDelay: 200,
        outDelay: 300,
        debug: false
    }).hover(function (e) {
        $(this).hysteresis("show", e);
    }, function (e) {
        $(this).hysteresis("hide", e);
    });

