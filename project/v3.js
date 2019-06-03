// All custom jQuery will go here
$(document).ready(function() {
    const up_distance = 1323;
    const left_distance = 2132;
    const left_distance_2 = 1345;
    const left_distance_3 = 545;
    const stage_1_offset = -108;
    var arrow = {left: 37, up: 38, right: 39, down: 40 },
    map = $("#map"),
    image_1_1 = $("#1_1"),
    text = $(".text"),
    map_left = map.position().left,
    map_top = map.position().top,
    console_counter = 1,
    // Initially pressed key: 'a'
    pressed_key = 97;
    var start_top = 0;

    // audio
    var test_audio = $('audio#test')[0];
    var intro_audio = $('audio#intro')[0];
    var loading_audio = $('audio#loading')[0];


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
    function show_question(prompt, left, right, option) {
        /*$(".text").show();
        $(".prompt p span").text(prompt);
        $(".left-option p span").text(left);
        $(".right-option p span").text(right);
        // $(".right-option").removeClass("selected");
        $(".left-option").removeClass("selected");*/
        $("." + option).removeClass("hidden");
    }

    function clear() {
        $(".option").addClass("hidden");
        pressed_key = 0;
        $(document).unbind('keypress');
    }

    function process_keyPress(keyCode) {
        // a == left
        if (keyCode == 97) {
            pressed_key = 97;
            console.log("should select left");
            $(".left-select").addClass("selected");
            $(".right-select").removeClass("selected");
        // d == right
        } else if (keyCode == 100) {
            pressed_key = 100;
            console.log("should select right");
            $(".right-select").addClass("selected");
            $(".left-select").removeClass("selected");
        } else if (keyCode == 115) {
          
        }
    }

    // Replay screen
    function replay() {
        $("#replay_screen").html('<img class="endscreen" src="8-1.png" id="8a"><img class="endscreen" src="8-1-1.png" id="8b"><img class="endscreen" src="8-1-2.png" id="8c">');
        $("#8a").fadeIn(function() {
            $("#8b").show();
            $(this).delay(2000).fadeOut();
            setTimeout(function() {
                $("#8c").show();
                $("#8b").delay(2000).fadeOut();
            }, 4000);
        });
        $(document).keypress(function (event) {
            process_keyPress(event.keyCode);
            //$(document).unbind('keypress');
            text.hide();
            if (event.keyCode == 119) { // if press 'w'
                clear();
                $(".endscreen").fadeOut();
                setTimeout(function() {
                    map_left = -4363;
                    map_top = start_top;
                    //map_top = -0;
                    map.css('left', map_left + 'px');
                    map.css('top', map_top + 'px');
                    stage_1();
                }, 500);
            }
        });
    }

    //
    // Stage 4
    //

    function stage_2L_3L_4L() {
        clear();
        loading_audio.play();
        map_left = map_left + left_distance_3;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                $("#screen").html('<img class="endscreen" src="Scientists/4.jpg" id="4a"><img class="endscreen" src="Scientists/4-1.jpg" id="4b">');
                $("#4a").fadeIn(function() {
                    $("#4b").show();
                    $(this).delay(2000).fadeOut();
                    setTimeout(function() { replay(); }, 4000);
                });
            });
        });
    }

    function stage_2L_3L_4R() {
        clear();
        loading_audio.play();
        map_left = map_left - left_distance_3;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                $("#screen").html('<img class="endscreen" src="Scientists/3.jpg" id="3a"><img class="endscreen" src="Scientists/3-1.jpg" id="3b">');
                $("#3a").fadeIn(function() {
                    $("#3b").show();
                    $(this).delay(2000).fadeOut();
                    setTimeout(function() { replay(); }, 4000);
                });
            });
        });
    }

    function stage_2L_3R_4L() {
        clear();
        loading_audio.play();
        map_left = map_left + left_distance_3;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                $("#screen").html('<img class="endscreen" src="Scientists/5.jpg" id="5a"><img class="endscreen" src="Scientists/5-1.jpg" id="5b">');
                $("#5a").fadeIn(function() {
                    $("#5b").show();
                    $(this).delay(2000).fadeOut();
                    setTimeout(function() { replay(); }, 4000);
                });
            });
        });
    }

    function stage_2L_3R_4R() {
        clear();
        loading_audio.play();
        map_left = map_left - left_distance_3;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                $("#screen").html('<img class="endscreen" src="Scientists/6.jpg" id="6a"><img class="endscreen" src="Scientists/6-1.jpg" id="6b">');
                $("#6a").fadeIn(function() {
                    $("#6b").show();
                    $(this).delay(2000).fadeOut();
                    setTimeout(function() { replay(); }, 4000);
                });
            });
        });
    }

    function stage_2R_3L_4L() {
        clear();
        loading_audio.play();
        map_left = map_left + left_distance_3;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                $("#screen").html('<img class="endscreen" src="Scientists/7.jpg" id="7a"><img class="endscreen" src="Scientists/7-1.jpg" id="7b">');
                $("#7a").fadeIn(function() {
                    $("#7b").show();
                    $(this).delay(2000).fadeOut();
                    setTimeout(function() { replay(); }, 4000);
                });
            });
        });
    }

    function stage_2R_3L_4R() {
        clear();
        loading_audio.play();
        map_left = map_left - left_distance_3;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                $("#screen").html('<img class="endscreen" src="Scientists/8.jpg" id="8a"><img class="endscreen" src="Scientists/8-1.jpg" id="8b">');
                $("#8a").fadeIn(function() {
                    $("#8b").show();
                    $(this).delay(2000).fadeOut();
                    setTimeout(function() { replay(); }, 4000);
                });
            });
        });
    }

    function stage_2R_3R_4L() {
        clear();
        loading_audio.play();
        map_left = map_left + left_distance_3;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                $("#screen").html('<img class="endscreen" src="Scientists/2.jpg" id="2a"><img class="endscreen" src="Scientists/2-1.jpg" id="2b">');
                $("#2a").fadeIn(function() {
                    $("#2b").show();
                    $(this).delay(2000).fadeOut();
                    setTimeout(function() { replay(); }, 4000);
                });
            });
        });
    }

    function stage_2R_3R_4R() {
        clear();
        loading_audio.play();
        map_left = map_left - left_distance_3;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                $("#screen").html('<img class="endscreen" src="Scientists/1.jpg" id="1a"><img class="endscreen" src="Scientists/1-1.jpg" id="1b">');
                $("#1a").fadeIn(function() {
                    $("#1b").show();
                    $(this).delay(2000).fadeOut();
                    setTimeout(function() { replay(); }, 4000);
                });
            });
        });
    }

    //
    // Stage 3
    //

    function stage_2L_3L() {
        clear();
        map_left = map_left + left_distance_2;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                show_question(
                    "Do you prefer to work hands on?",
                    "Yes",
                    "No",
                    "3_1"
                );
                $(document).keypress(function (event) {
                    process_keyPress(event.keyCode);
                    //$(document).unbind('keypress');
                    text.hide();
                    if (pressed_key == 97) { // if press 'a'
                        stage_2L_3L_4L();
                    } else if (pressed_key == 100) { // if press 'd'
                        stage_2L_3L_4R();
                    }
                });
            });
        });
    }

    function stage_2L_3R() {
        clear();
        map_left = map_left - left_distance_2;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                show_question(
                    "Would you rather work:",
                    "Start from the ground up",
                    "Work on an established project",
                    "3_2"
                );
                $(document).keypress(function (event) {
                    process_keyPress(event.keyCode);
                    //$(document).unbind('keypress');
                    if (pressed_key == 97) { // if press 'a'
                        stage_2L_3R_4L();
                    } else if (pressed_key == 100) { // if press 'd'
                        stage_2L_3R_4R();
                    }
                });
            });
        });
    }

    function stage_2R_3L() {
        clear();
        map_left = map_left + left_distance_2;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                show_question(
                    "Do you prefer:",
                    "Working on user facing products",
                    "Focusing more on the back-end of things",
                    "3_3"
                );
                $(document).keypress(function (event) {
                    process_keyPress(event.keyCode);
                    //$(document).unbind('keypress');
                    text.hide();
                    if (pressed_key == 97) { // if press 'a'
                        stage_2R_3L_4L();
                    } else if (pressed_key == 100) { // if press 'd'
                        stage_2R_3L_4R();
                    }
                });
            });
        });
    }

    function stage_2R_3R() {
        clear();
        map_left = map_left - left_distance_2;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                show_question(
                    "Are you interested in:",
                    "Recognition",
                    "Financial Incentives",
                    "3_4"
                );
                $(document).keypress(function (event) {
                    process_keyPress(event.keyCode);
                    //$(document).unbind('keypress');
                    text.hide();
                    if (pressed_key == 97) { // if press 'a'
                        stage_2R_3R_4L();
                    } else if (pressed_key == 100) { // if press 'd'
                        stage_2R_3R_4R();
                    }

                });
            });
        });
    }

    //
    // Stage 2
    //

    function stage_2L() {
        clear();
        //$('audio#test')[0].play()
        map_left = map_left + left_distance;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            //$('audio#test')[0].play()
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                show_question(
                    "Do you prefer:",
                    "Cultivating talent",
                    "Finding undiscovered talent",
                    "2_1"
                );
                $(document).keypress(function (event) {
                    process_keyPress(event.keyCode);
                    //$(document).unbind('keypress');
                    text.hide();
                    if (pressed_key == 97) { // if press 'a'
                        stage_2L_3L();
                    } else if (pressed_key == 100) { // if press 'd'
                        stage_2L_3R();
                    }
                });
            });
        });
    }

    function stage_2R() {
        clear();
        //$('audio#test')[0].play()
        map_left = map_left - left_distance - 20;
        map.animate({left: map_left, top: map_top}, 1500, function() {
            //$('audio#test')[0].play()
            map_top = map_top + up_distance;
            map.animate({left: map_left, top: map_top}, 1500, function() {
                show_question(
                    "How comfortable are you with ambiguity?",
                    "I’d like to work on pre-assigned tasks",
                    "I prefer to create my own goals",
                    "2_2"
                );
                $(document).keypress(function (event) {
                    process_keyPress(event.keyCode);
                    //$(document).unbind('keypress');
                    text.hide();
                    if (pressed_key == 97) { // if press 'a'
                        stage_2R_3L();
                    } else if (pressed_key == 100) { // if press 'd'
                        stage_2R_3R();
                    }
                });
            });
        });
    }

    //
    // Stage 1
    //

    function stage_1_decision() {
        console.log("stage 1");
        show_question(
            "In company do you: ",
            "initiate conversation",
            "wait to be approached",
            "1_1"
        );
        $(document).keypress(function (event) {
            process_keyPress(event.keyCode);
            // choose an option, rn we'll say they chose Left
            //$(document).unbind('keypress');
            text.hide();
            if (pressed_key == 97) { // if press 'a'
                //show_question("", "", "", "1_1_L");
                //map.animate({}, 1500);
                stage_2L();
            } else if (pressed_key == 100) { // if press 'd'
                //clear();
                //show_question("", "", "", "1_1_R");
                //map.animate({opactiy: 100}, 4000);
                //clear();
                //show_question("", "", "", "1_1_R");
                //map.animate({left: map_left, top: map_top}, 3000);
                stage_2R();
            }
        });
    }

    function stage_1() {
        clear();
        map_top = map_top + up_distance + stage_1_offset;
        $('#intro').animate({volume: 0.0}, 3000);
        map.animate({left: map_left, top: map_top}, 3000, function() {
            /*show_question(
                "In company do you: ",
                "initiate conversation",
                "wait to be approached",
                "1_1"
            );*/
            stage_1_decision();
        });

        // Specific to stage 1, add bubble
        $(".left-select").addClass("bubble");
        $(".right-select").addClass("bubble");
        $(".left-select").addClass("selected");
        //$(".prompt").addClass("bubble");
    }

    function stage_start() {
        intro_audio.play()
        console.log("Map Top = " + map_top);
        // set this here because it changes by display
        start_top = map_top;
        $(document).keypress(function (event) {
            // choose an option, rn we'll say they chose Left
            if (event.keyCode == 119) { // if press 'w'
                $(document).unbind('keypress');
                $("#start").fadeOut('slow', function() {
                    stage_1();
                });
            }
        });
    }

    // Do stuff!
    stage_start();


});
