// All custom jQuery will go here
$(document).ready(function() {
    var arrow = {left: 37, up: 38, right: 39, down: 40 },
    map = $("#map"),
    map_left = map.position().left,
    map_top = map.position().top,
    console_counter = 1;

    function console_pos() {
        var d = new $.Deferred();
        console.log(console_counter++ + " left: " + map.position().left + " top: " + map.position().top);

        setTimeout(function () {
            d.resolve();
        }, 3000);
        return d;
    }

    // Animation function
    function move_to(x, y, s = 5000) {
        var d = new $.Deferred();
        $("#map").animate({left: x, top: y}, 3000);
        console.log("Function moveto")

        setTimeout(function () {
            d.resolve();
        }, 3000);
        return d;
    }

    // Show questions function
    function show_question(prompt, left, right) {
        
    }
    
    
    // Do stuff
    function stage1() {
        // console_pos("1").done(move_to(map_left, map_top + 1028)).done(console_pos("2"));
        // move_to(map_left, map_top + 1028).done(console_pos("2"));
        console_pos();
        map.animate({left: map_left, top: map_top + 1228}, 3000, function() {
            console_pos();
        });
    }

    stage1();
    
});