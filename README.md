# Hysteresis jQuery Plugin

Hysteresis adds a lag to controls to give the user more control over what happens on the screen.

Common use is when a user leaves an opened menu item, to keep it open for a short time. The user can choose to move back to the menu item before it disappears.

> A menu that was drawn in response to a mouse-over event may remain on-screen for a brief moment after the mouse has moved out of the trigger region and the menu region. This allows the user to move the mouse directly to an item on the menu, even if part of that direct mouse path is outside of both the trigger region and the menu region. -- [Wikipedia](http://en.wikipedia.org/wiki/Hysteresis)



## Demo
See [demo page]( http://arthurclemens.github.io/jquery-hysteresis-plugin/).


## Usage

Initialize:

    $(".my-element").hysteresis({ ... });

Init options:

* `show` (required) function; params: element, event (if this was passed)
* `hide` (required) function; params: element, event (if this was passed)
* `inDelay` (required) delay in ms; default: 0
* `outDelay` (required) delay in ms; default: 0
* `debug` (optional) true or false; default: false

Commands:

    $(".my-element").hysteresis("show");
    $(".my-element").hysteresis("hide");
    $(".my-element").hysteresis("stop");

Show is called after `inDelay` ms have passed; similar for hide and `outDelay`.

## Example

    $(".my-element").hysteresis({
        show: function(el, e) {
            $(el).addClass("over");
        },
        hide: function(el, e) {
            $(el).removeClass("over");
        },
        inDelay: 0,
        outDelay: 0,
        debug: false
    }).hover(function (e) {
        $(this).hysteresis("show", e);
    }, function (e) {
        $(this).hysteresis("hide", e);
    });

