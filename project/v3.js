// All custom jQuery will go here
$(document).ready(function() {
    const up_distance = 1228;
    const left_distance = 2153;
    const left_distance_2 = 950;
    var arrow = {left: 37, up: 38, right: 39, down: 40 },
    map = $("#map"),
    text = $(".text"),
    map_left = map.position().left,
    map_top = map.position().top,
    console_counter = 1,
    pressed_key = 0;

    // This function displays the map's position for debugging!
    function console_pos() {
        var d = new $.Deferred();
        console.log(console_counter++ + " left: " + map.position().left + " top: " + map.position().top);

        setTimeout(function () {
            d.resolve();
        }, 3000);
        return d;
    }

    // Show questions function
    function show_question(prompt, left, right) {
        $(".text").show();
        $(".prompt p").text(prompt);
        $(".left-option p span").text(left);
        $(".right-option p span").text(right);
        // $(".right-option").removeClass("selected");
        $(".left-option").removeClass("selected");
    }

    function process_keyPress(keyCode) {
        // a == left
        if (keyCode == 97) {
            pressed_key = 97;
            console.log("should select left");
            $(".left-option").addClass("selected");
            $(".right-option").removeClass("selected");
        // d == right
        } else if (keyCode == 100) {
            pressed_key = 100;
            console.log("should select right");
            $(".right-option").addClass("selected");
            $(".left-option").removeClass("selected");
        }
    }

    //
    // Stage 4
    //

    function stage_2L_3L_4L() {
        map_left = map_left + 500;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                alert("You reached 4L!");
            });
        });
    }

    function stage_2L_3L_4R() {
        map_left = map_left - 500;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                alert("You reached 4R!");
            });
        });
    }

    function stage_2L_3R_4L() {
        map_left = map_left + 500;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                alert("You reached 4L!");
            });
        });
    }

    function stage_2L_3R_4R() {
        map_left = map_left - 500;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                alert("You reached 4R!");
            });
        });
    }

    function stage_2R_3L_4L() {
        map_left = map_left + 500;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                alert("You reached 4L!");
            });
        });
    }

    function stage_2R_3L_4R() {
        map_left = map_left - 500;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                alert("You reached 4R!");
            });
        });
    }

    function stage_2R_3R_4L() {
        map_left = map_left + 500;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                alert("You reached 4L!");
            });
        });
    }

    function stage_2R_3R_4R() {
        map_left = map_left - 500;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                alert("You reached 4R!");
            });
        });
    }

    // 
    // Stage 3
    // 

    function stage_2L_3L() {
        map_left = map_left + 1400;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                show_question(
                    "Are you interested in:",
                    "Recognition",
                    "Financial Incentives"
                );
                $(document).keypress(function (event) {            
                    process_keyPress(event.keyCode);
                    if (event.keyCode == 119) { // if press 'w'
                        $(document).unbind('keypress');
                        text.hide();
                        if (pressed_key == 97) { // if press 'a'
                            stage_2L_3L_4L();
                        } else if (pressed_key == 100) { // if press 'd'
                            stage_2L_3L_4R();
                        }
                    }  
                });
            });
        });
    }

    function stage_2L_3R() {
        map_left = map_left - 1400;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                show_question(
                    "Do you prefer:",
                    "Working on user facing products",
                    "Focusing more on the back-end of things "
                );
                $(document).keypress(function (event) {            
                    process_keyPress(event.keyCode);
                    if (event.keyCode == 119) { // if press 'w'
                        $(document).unbind('keypress');
                        text.hide();
                        if (pressed_key == 97) { // if press 'a'
                            stage_2L_3R_4L();
                        } else if (pressed_key == 100) { // if press 'd'
                            stage_2L_3R_4R();
                        }
                    }  

                });
            });
        });
    }

    function stage_2R_3L() {
        map_left = map_left + 1400;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                show_question(
                    "Would you rather work:",
                    "Start from the ground up",
                    "Work on an established project"
                );
                $(document).keypress(function (event) {            
                    process_keyPress(event.keyCode);
                    if (event.keyCode == 119) { // if press 'w'
                        $(document).unbind('keypress');
                        text.hide();
                        if (pressed_key == 97) { // if press 'a'
                            stage_2R_3L_4L();
                        } else if (pressed_key == 100) { // if press 'd'
                            stage_2R_3L_4R();
                        }
                    } 
                });
            });
        });
    }

    function stage_2R_3R() {
        map_left = map_left - 1400;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                show_question(
                    "Do you prefer to work hands on?",
                    "Yes",
                    "No"
                );
                $(document).keypress(function (event) {            
                    process_keyPress(event.keyCode);
                    text.hide();
                    if (event.keyCode == 119) { // if press 'w'
                        $(document).unbind('keypress');
                        if (pressed_key == 97) { // if press 'a'
                            stage_2R_3R_4L();
                        } else if (pressed_key == 100) { // if press 'd'
                            stage_2R_3R_4R();
                        }
                    }  

                });
            });
        });
    }

    // 
    // Stage 2
    // 

    function stage_2L() {
        map_left = map_left + left_distance;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                show_question(
                    "How comfortable are you with ambiguity?",
                    "I prefer to create my own goals",
                    "I’d like to work on pre-assigned tasks"
                );
                $(document).keypress(function (event) {    
                    process_keyPress(event.keyCode);
                    if (event.keyCode == 119) { // if press 'w'
                        $(document).unbind('keypress');
                        text.hide();
                        if (pressed_key == 97) { // if press 'a'
                            stage_2L_3L();
                        } else if (pressed_key == 100) { // if press 'd'
                            stage_2L_3R();
                        }
                    }  
                });
            });
        });
    }

    function stage_2R() {
        map_left = map_left - left_distance;
        map.animate({left: map_left, top: map_top}, 500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 500, function() {
                show_question(
                    "Do you prefer:",
                    "Finding undiscovered talent",
                    "Cultivating talent"
                );
                $(document).keypress(function (event) {    
                    process_keyPress(event.keyCode);
                    if (event.keyCode == 119) { // if press 'w'
                        $(document).unbind('keypress');
                        text.hide();
                        if (pressed_key == 97) { // if press 'a'
                            stage_2R_3L();
                        } else if (pressed_key == 100) { // if press 'd'
                            stage_2R_3R();
                        }
                    } 
                });
            });
        });
    }

    // 
    // Stage 1
    // 
    
    function stage_1() {
        map_top = map_top + up_distance;
        map.animate({left: map_left, top: map_top}, 1000, function() {
            show_question(
                "In a company do you: ",
                "initiate conversation",
                "wait to be approached"
            );
            $(document).keypress(function (event) {      
                process_keyPress(event.keyCode);      
                // choose an option, rn we'll say they chose Left
                if (event.keyCode == 119) { // if press 'w'
                    $(document).unbind('keypress');
                    text.hide();
                    if (pressed_key == 97) { // if press 'a'
                        stage_2L();
                    } else if (pressed_key == 100) { // if press 'd'
                        stage_2R();
                    }
                }  
            });
        });
    }

    function stage_start() {
        $(document).keypress(function (event) {          
            // choose an option, rn we'll say they chose Left
            if (event.keyCode == 119) { // if press 'w'
                $(document).unbind('keypress');
                $("#start").hide();
                stage_1();
            }  
        });
    }

    function start() {
        stage_start();
    }

    // Do stuff!
    start();
    
});