var draw_now_type = (preview_index) => {

    var now_color = now_type.split('_')[0]

    if (preview_index == 0) {
        now_focus_t = now_focus
    } else {
        now_focus_t = preview_index
    }

    if (now_type == 'purple_up') {
        var num_p1 = now_focus_t - 1,
            num_p2 = now_focus_t - 100,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t + 100
    } else if (now_type == 'purple_right') {
        var num_p1 = now_focus_t - 1,
            num_p2 = now_focus_t,
            num_p3 = now_focus_t + 100,
            num_p4 = now_focus_t + 1
    } else if (now_type == 'purple_down') {
        var num_p1 = now_focus_t - 100,
            num_p2 = now_focus_t,
            num_p3 = now_focus_t + 100,
            num_p4 = now_focus_t + 1
    } else if (now_type == 'purple_left') {
        var num_p1 = now_focus_t - 1,
            num_p2 = now_focus_t - 100,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t + 1
    } else if (now_type == 'orange_up') {
        var num_p1 = now_focus_t - 1 - 100,
            num_p2 = now_focus_t - 1,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t + 1
    } else if (now_type == 'orange_right') {
        var num_p1 = now_focus_t - 1 + 100,
            num_p2 = now_focus_t + 100,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t - 100
    } else if (now_type == 'orange_down') {
        var num_p1 = now_focus_t + 1 + 100,
            num_p2 = now_focus_t + 1,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t - 1
    } else if (now_type == 'orange_left') {
        var num_p1 = now_focus_t - 100 + 1,
            num_p2 = now_focus_t - 100,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t + 100
    } else if (now_type == 'blue_up') {
        var num_p1 = now_focus_t - 1 + 100,
            num_p2 = now_focus_t - 1,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t + 1
    } else if (now_type == 'blue_right') {
        var num_p1 = now_focus_t + 100,
            num_p2 = now_focus_t + 1 + 100,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t - 100
    } else if (now_type == 'blue_down') {
        var num_p1 = now_focus_t + 1 - 100,
            num_p2 = now_focus_t + 1,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t - 1
    } else if (now_type == 'blue_left') {
        var num_p1 = now_focus_t - 100 - 1,
            num_p2 = now_focus_t - 100,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t + 100
    } else if (now_type == 'red_up') {
        var num_p1 = now_focus_t - 1 - 100,
            num_p2 = now_focus_t - 1,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t + 100
    } else if (now_type == 'red_right') {
        var num_p1 = now_focus_t + 100 - 1,
            num_p2 = now_focus_t + 100,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t + 1
    } else if (now_type == 'red_down') {
        var num_p1 = now_focus_t - 100,
            num_p2 = now_focus_t,
            num_p3 = now_focus_t + 1,
            num_p4 = now_focus_t + 1 + 100
    } else if (now_type == 'red_left') {
        var num_p1 = now_focus_t - 1,
            num_p2 = now_focus_t,
            num_p3 = now_focus_t - 100,
            num_p4 = now_focus_t - 100 + 1
    } else if (now_type == 'green_up') {
        var num_p1 = now_focus_t - 1,
            num_p2 = now_focus_t - 1 + 100,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t - 100
    } else if (now_type == 'green_right') {
        var num_p1 = now_focus_t - 1,
            num_p2 = now_focus_t,
            num_p3 = now_focus_t + 100,
            num_p4 = now_focus_t + 100 + 1
    } else if (now_type == 'green_down') {
        var num_p1 = now_focus_t,
            num_p2 = now_focus_t + 100,
            num_p3 = now_focus_t + 1,
            num_p4 = now_focus_t + 1 - 100
    } else if (now_type == 'green_left') {
        var num_p1 = now_focus_t - 100 - 1,
            num_p2 = now_focus_t - 100,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t + 1
    } else if (now_type == 'cyan_up') {
        var num_p1 = now_focus_t + 100,
            num_p2 = now_focus_t,
            num_p3 = now_focus_t - 100,
            num_p4 = now_focus_t - 200
    } else if (now_type == 'cyan_right') {
        var num_p1 = now_focus_t - 2,
            num_p2 = now_focus_t - 1,
            num_p3 = now_focus_t,
            num_p4 = now_focus_t + 1
    } else if (now_type == 'cyan_down') {
        var num_p1 = now_focus_t + 100,
            num_p2 = now_focus_t,
            num_p3 = now_focus_t - 100,
            num_p4 = now_focus_t - 200
    } else if (now_type == 'cyan_left') {
        var num_p1 = now_focus_t - 2 - 100,
            num_p2 = now_focus_t - 1 - 100,
            num_p3 = now_focus_t - 100,
            num_p4 = now_focus_t + 1 - 100
    } else if (now_type == 'yellow_up') {
        var num_p1 = now_focus_t - 1 - 100,
            num_p2 = now_focus_t - 1,
            num_p3 = now_focus_t - 100,
            num_p4 = now_focus_t
    } else if (now_type == 'yellow_right') {
        var num_p1 = now_focus_t - 1 - 100,
            num_p2 = now_focus_t - 1,
            num_p3 = now_focus_t - 100,
            num_p4 = now_focus_t
    } else if (now_type == 'yellow_down') {
        var num_p1 = now_focus_t - 1 - 100,
            num_p2 = now_focus_t - 1,
            num_p3 = now_focus_t - 100,
            num_p4 = now_focus_t
    } else if (now_type == 'yellow_left') {
        var num_p1 = now_focus_t - 1 - 100,
            num_p2 = now_focus_t - 1,
            num_p3 = now_focus_t - 100,
            num_p4 = now_focus_t
    }

    var p1 = tri_digit(num_p1),
        p2 = tri_digit(num_p2),
        p3 = tri_digit(num_p3),
        p4 = tri_digit(num_p4)

    if (preview_index == 0) {

        $("#" + p1).attr("color", now_color).addClass("now_focus")
        $("#" + p2).attr("color", now_color).addClass("now_focus")
        $("#" + p3).attr("color", now_color).addClass("now_focus")
        $("#" + p4).attr("color", now_color).addClass("now_focus")
        draw_color()

    } else {

        if (!($("#" + p1).hasClass("now_focus"))) {
            $("#" + p1).attr("color", now_color + "_pv").addClass("now_pv")
        } else {
            $("#" + p1).attr("color", now_color)
        }

        if (!($("#" + p2).hasClass("now_focus"))) {
            $("#" + p2).attr("color", now_color + "_pv").addClass("now_pv")
        } else {
            $("#" + p2).attr("color", now_color)
        }

        if (!($("#" + p3).hasClass("now_focus"))) {
            $("#" + p3).attr("color", now_color + "_pv").addClass("now_pv")
        } else {
            $("#" + p3).attr("color", now_color)
        }

        if (!($("#" + p4).hasClass("now_focus"))) {
            $("#" + p4).attr("color", now_color + "_pv").addClass("now_pv")
        } else {
            $("#" + p4).attr("color", now_color)
        }

        //$("#" + p2).attr("color", now_color + "_pv").addClass("now_pv")
        //$("#" + p3).attr("color", now_color + "_pv").addClass("now_pv")
        //$("#" + p4).attr("color", now_color + "_pv").addClass("now_pv")
        draw_color()

    }

}

var test_num = (t) => {
    var test_focus = now_focus + t
    if (now_type == 'purple_up') {
        num_p1 = test_focus - 1
        num_p2 = test_focus - 100
        num_p3 = test_focus
        num_p4 = test_focus + 100
    } else if (now_type == 'purple_right') {
        num_p1 = test_focus - 1
        num_p2 = test_focus
        num_p3 = test_focus + 100
        num_p4 = test_focus + 1
    } else if (now_type == 'purple_down') {
        num_p1 = test_focus - 100
        num_p2 = test_focus
        num_p3 = test_focus + 100
        num_p4 = test_focus + 1
    } else if (now_type == 'purple_left') {
        num_p1 = test_focus - 1
        num_p2 = test_focus - 100
        num_p3 = test_focus
        num_p4 = test_focus + 1
    } else if (now_type == 'orange_up') {
        num_p1 = test_focus - 1 - 100
        num_p2 = test_focus - 1
        num_p3 = test_focus
        num_p4 = test_focus + 1
    } else if (now_type == 'orange_right') {
        num_p1 = test_focus - 1 + 100
        num_p2 = test_focus + 100
        num_p3 = test_focus
        num_p4 = test_focus - 100
    } else if (now_type == 'orange_down') {
        num_p1 = test_focus + 1 + 100
        num_p2 = test_focus + 1
        num_p3 = test_focus
        num_p4 = test_focus - 1
    } else if (now_type == 'orange_left') {
        num_p1 = test_focus - 100 + 1
        num_p2 = test_focus - 100
        num_p3 = test_focus
        num_p4 = test_focus + 100
    } else if (now_type == 'blue_up') {
        num_p1 = test_focus - 1 + 100
        num_p2 = test_focus - 1
        num_p3 = test_focus
        num_p4 = test_focus + 1
    } else if (now_type == 'blue_right') {
        num_p1 = test_focus + 100
        num_p2 = test_focus + 1 + 100
        num_p3 = test_focus
        num_p4 = test_focus - 100
    } else if (now_type == 'blue_down') {
        num_p1 = test_focus + 1 - 100
        num_p2 = test_focus + 1
        num_p3 = test_focus
        num_p4 = test_focus - 1
    } else if (now_type == 'blue_left') {
        num_p1 = test_focus - 100 - 1
        num_p2 = test_focus - 100
        num_p3 = test_focus
        num_p4 = test_focus + 100
    } else if (now_type == 'red_up') {
        num_p1 = test_focus - 1 - 100
        num_p2 = test_focus - 1
        num_p3 = test_focus
        num_p4 = test_focus + 100
    } else if (now_type == 'red_right') {
        num_p1 = test_focus + 100 - 1
        num_p2 = test_focus + 100
        num_p3 = test_focus
        num_p4 = test_focus + 1
    } else if (now_type == 'red_down') {
        num_p1 = test_focus - 100
        num_p2 = test_focus
        num_p3 = test_focus + 1
        num_p4 = test_focus + 1 + 100
    } else if (now_type == 'red_left') {
        num_p1 = test_focus - 1
        num_p2 = test_focus
        num_p3 = test_focus - 100
        num_p4 = test_focus - 100 + 1
    } else if (now_type == 'green_up') {
        num_p1 = test_focus - 1
        num_p2 = test_focus - 1 + 100
        num_p3 = test_focus
        num_p4 = test_focus - 100
    } else if (now_type == 'green_right') {
        num_p1 = test_focus - 1
        num_p2 = test_focus
        num_p3 = test_focus + 100
        num_p4 = test_focus + 100 + 1
    } else if (now_type == 'green_down') {
        num_p1 = test_focus
        num_p2 = test_focus + 100
        num_p3 = test_focus + 1
        num_p4 = test_focus + 1 - 100
    } else if (now_type == 'green_left') {
        num_p1 = test_focus - 100 - 1
        num_p2 = test_focus - 100
        num_p3 = test_focus
        num_p4 = test_focus + 1
    } else if (now_type == 'cyan_up') {
        num_p1 = test_focus + 100
        num_p2 = test_focus
        num_p3 = test_focus - 100
        num_p4 = test_focus - 200
    } else if (now_type == 'cyan_right') {
        num_p1 = test_focus - 2
        num_p2 = test_focus - 1
        num_p3 = test_focus
        num_p4 = test_focus + 1
    } else if (now_type == 'cyan_down') {
        num_p1 = test_focus + 100
        num_p2 = test_focus
        num_p3 = test_focus - 100
        num_p4 = test_focus - 200
    } else if (now_type == 'cyan_left') {
        num_p1 = test_focus - 2 - 100
        num_p2 = test_focus - 1 - 100
        num_p3 = test_focus - 100
        num_p4 = test_focus + 1 - 100
    } else if (now_type == 'yellow_up') {
        num_p1 = test_focus - 1 - 100
        num_p2 = test_focus - 1
        num_p3 = test_focus - 100
        num_p4 = test_focus
    } else if (now_type == 'yellow_right') {
        num_p1 = test_focus - 1 - 100
        num_p2 = test_focus - 1
        num_p3 = test_focus - 100
        num_p4 = test_focus
    } else if (now_type == 'yellow_down') {
        num_p1 = test_focus - 1 - 100
        num_p2 = test_focus - 1
        num_p3 = test_focus - 100
        num_p4 = test_focus
    } else if (now_type == 'yellow_left') {
        num_p1 = test_focus - 1 - 100
        num_p2 = test_focus - 1
        num_p3 = test_focus - 100
        num_p4 = test_focus
    }
    return [num_p1, num_p2, num_p3, num_p4]
}

var clear_to_gray = (update_now = 1) => {

    var now_color = now_type.split('_')[0]

    for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 19; b++) {

            var check_block = ""
            if (b < 10) {
                check_block = a + "0" + b
            } else {
                check_block = a + "" + b
            }

            let $check_block = $("#" + check_block)

            // now_focus_blocks that are moved
            if ($check_block.attr("color") == now_color && !(all_bottom.includes(check_block)) && !($check_block.hasClass("now_focus"))) {
                $check_block.attr("color", "gray")
            }

            // pv blocks that are moved
            if ($check_block.attr("color") == now_color + "_pv" && !($check_block.hasClass("now_pv"))) {
                $check_block.attr("color", "gray")
            }

            // not now_focus and not pv blocks
            if (!($check_block.hasClass("now_focus")) && !(all_bottom.includes(check_block)) && !($check_block.hasClass("now_pv"))) {
                $check_block.attr("color", "gray")
            }

            if (update_now == 1) {
                if ($check_block.hasClass("now_focus")) {
                    $check_block.removeClass("now_focus")
                }
                if ($check_block.hasClass("now_pv")) {
                    $check_block.removeClass("now_pv")
                }
            }
        }
    }

}


var to_left = () => {

    if (lock_left_right != 1) {
        console.log("to_left", now_focus)

        clear_to_gray()

        var [num_p1, num_p2, num_p3, num_p4] = test_num(-100)
        if (!(all_bottom.includes(tri_digit(num_p1)) || all_bottom.includes(tri_digit(num_p2)) || all_bottom.includes(tri_digit(num_p3)) || all_bottom.includes(tri_digit(num_p4)))) {
            if (num_p1 > 0 && num_p2 > 0 && num_p3 > 0 && num_p4 > 0) { now_focus -= 100 }
        }
        draw_now_type(0)
    } else {
        console.log("left_locked")
    }

}

var to_right = () => {

    if (lock_left_right != 1) {
        console.log("to_right", now_focus)

        clear_to_gray()

        var [num_p1, num_p2, num_p3, num_p4] = test_num(100)
        if (!(all_bottom.includes(tri_digit(num_p1)) || all_bottom.includes(tri_digit(num_p2)) || all_bottom.includes(tri_digit(num_p3)) || all_bottom.includes(tri_digit(num_p4)))) {
            if (num_p1 < 1000 && num_p2 < 1000 && num_p3 < 1000 && num_p4 < 1000) { now_focus += 100 }
        }
        draw_now_type(0)
    } else {
        console.log("right_locked")
    }

}

var tri_digit = (d) => {
    if (d < 10) {
        return "00" + d
    } else if (d < 100) {
        return "0" + d
    } else {
        return "" + d
    }
}

var check_bottomed = () => {

    if (all_bottom.includes("300") || all_bottom.includes("400") || all_bottom.includes("500") || all_bottom.includes("600")) {
        blink_score("Good Game!")
        setTimeout(() => { blink_score("Press < n >") }, 2000);
        stop_game()
        return
    }

    if ((num_p1 % 100) == 19 || (num_p2 % 100) == 19 || (num_p3 % 100) == 19 || (num_p4 % 100) == 19) {
        bottomed = 1
        return
    }
    if (all_bottom.includes(tri_digit((num_p1 + 1))) || all_bottom.includes(tri_digit((num_p2 + 1))) || all_bottom.includes(tri_digit((num_p3 + 1))) || all_bottom.includes(tri_digit((num_p4 + 1)))) {
        bottomed = 1
        return
    }

}

var life_in_the_space = () => {

    if (mode_life_in_the_space == 0) {
        mode_life_in_the_space = 1
            //game_speed = 100
        return
    }
    if (mode_life_in_the_space == 1) {
        mode_life_in_the_space = 0
        return
    }

}

// for game mode life_in_the_space
var space_for_life_in_the_space = () => {

    clear_to_gray()

    var [num_p1, num_p2, num_p3, num_p4] = test_num(1)
    if ((num_p1 % 100) > 0 && (num_p2 % 100) > 0 && (num_p3 % 100) > 0 && (num_p4 % 100) > 0) {
        now_focus -= 1
    }
    draw_now_type(0)
    console.log("moon-walk", now_focus)

}

// for game mode anti_gravity
var anti_gravity = () => {

    for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 19; b++) {

            var check_block = "",
                change_id = ""
            if (b < 10) {
                check_block = a + "0" + b
                change_id = a + "" + (19 - b)
            } else {
                check_block = a + "" + b
                change_id = a + "0" + (19 - b)
            }

            let $check_block = $("#" + check_block)
            $check_block.addClass("id_" + change_id)

        }
    }

    for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 19; b++) {

            var check_block = "",
                change_id = ""
            if (b < 10) {
                check_block = a + "0" + b
                change_id = a + "" + (19 - b)
            } else {
                check_block = a + "" + b
                change_id = a + "0" + (19 - b)
            }

            let $check_block = $(".id_" + change_id)
            console.log(check_block, $check_block)
            $check_block.removeClass("id_" + change_id)
            $check_block.attr("id", change_id)

        }
    }

}

var key_down = () => {

    clear_to_gray()

    var [num_p1, num_p2, num_p3, num_p4] = test_num(0)
    check_bottomed()

    if (!(bottomed == 1)) {
        if (!((num_p1 % 100) == 19 || (num_p2 % 100) == 19 || (num_p3 % 100) == 19 || (num_p4 % 100) == 19)) { now_focus = now_focus + 1 }
    }

    draw_now_type(0)

    console.log("key_down", now_focus, "bottomed", bottomed)
}

var auto_down = () => {

    clear_to_gray()

    var [num_p1, num_p2, num_p3, num_p4] = test_num(0)
    check_bottomed()

    if (!(bottomed == 1)) {
        if (!((num_p1 % 100) == 19 || (num_p2 % 100) == 19 || (num_p3 % 100) == 19 || (num_p4 % 100) == 19)) { now_focus = now_focus + 1 }
    }

    draw_now_type(0)

    console.log("auto_down", now_focus, "bottomed", bottomed)

}

var purple_bottom = [],
    cyan_bottom = [],
    blue_bottom = [],
    orange_bottom = [],
    green_bottom = [],
    red_bottom = [],
    yellow_bottom = [],
    all_bottom = []

var draw_color = () => {

    for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 19; b++) {

            var draw_block = ""
            if (b < 10) {
                draw_block = a + "0" + b
            } else {
                draw_block = a + "" + b
            }
            let $draw_block = $("#" + draw_block)

            $draw_block.removeClass("color-purple").removeClass("color-cyan").removeClass("color-blue").removeClass("color-orange").removeClass("color-green").removeClass("color-red").removeClass("color-yellow")

            if ($draw_block.attr("color") == "purple") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-purple")
            } else if ($draw_block.attr("color") == "cyan") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-cyan")
            } else if ($draw_block.attr("color") == "blue") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-blue")
            } else if ($draw_block.attr("color") == "orange") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-orange")
            } else if ($draw_block.attr("color") == "green") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-green")
            } else if ($draw_block.attr("color") == "red") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-red")
            } else if ($draw_block.attr("color") == "yellow") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-yellow")
            } else if ($draw_block.attr("color") == "gray") {
                $draw_block.addClass("color-gray")
            }

            $draw_block.removeClass("color-purple_pv").removeClass("color-cyan_pv").removeClass("color-blue_pv").removeClass("color-orange_pv").removeClass("color-green_pv").removeClass("color-red_pv").removeClass("color-yellow_pv")

            if ($draw_block.attr("color") == "purple_pv") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-purple_pv")
            } else if ($draw_block.attr("color") == "cyan_pv") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-cyan_pv")
            } else if ($draw_block.attr("color") == "red_pv") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-red_pv")
            } else if ($draw_block.attr("color") == "green_pv") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-green_pv")
            } else if ($draw_block.attr("color") == "orange_pv") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-orange_pv")
            } else if ($draw_block.attr("color") == "blue_pv") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-blue_pv")
            } else if ($draw_block.attr("color") == "yellow_pv") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-yellow_pv")
            } else if ($draw_block.attr("color") == "orange_pv") {
                $draw_block.removeClass("color-gray")
                $draw_block.addClass("color-orange_pv")
            }

        }
    }

}

var draw_bottom = () => {

    for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 19; b++) {
            var draw_block = ""
            if (b < 10) {
                draw_block = a + "0" + b
            } else {
                draw_block = a + "" + b
            }
            let $draw_block = $("#" + draw_block)
            if (!(all_bottom.includes(draw_block)) && !($draw_block.hasClass("now_focus")) && !($draw_block.hasClass("now_pv"))) {
                $draw_block.attr("color", "gray")
            }
        }
    }

    for (let i = 0; i < purple_bottom.length; i++) { $("#" + purple_bottom[i]).attr("color", "purple") }
    for (let i = 0; i < cyan_bottom.length; i++) { $("#" + cyan_bottom[i]).attr("color", "cyan") }
    for (let i = 0; i < blue_bottom.length; i++) { $("#" + blue_bottom[i]).attr("color", "blue") }
    for (let i = 0; i < orange_bottom.length; i++) { $("#" + orange_bottom[i]).attr("color", "orange") }
    for (let i = 0; i < green_bottom.length; i++) { $("#" + green_bottom[i]).attr("color", "green") }
    for (let i = 0; i < red_bottom.length; i++) { $("#" + red_bottom[i]).attr("color", "red") }
    for (let i = 0; i < yellow_bottom.length; i++) { $("#" + yellow_bottom[i]).attr("color", "yellow") }

}

var clear_complete_row = (c) => {

    temp_all_bottom = []

    for (let a = 0; a < all_bottom.length; a++) {

        row_nm = Number(all_bottom[a]) % 20
        if (row_nm > c) {
            console.log("retain", all_bottom[a])
            temp_all_bottom.push(all_bottom[a])
        } else if (row_nm < c) {
            console.log("shift", all_bottom[a], "->", tri_digit(Number(all_bottom[a]) + 1))
            temp_all_bottom.push(tri_digit(Number(all_bottom[a]) + 1))
        }

    }

    all_bottom = []
    for (let a = 0; a < temp_all_bottom.length; a++) {
        all_bottom.push(temp_all_bottom[a])
    }

    console.log("all_bottom -> ", all_bottom)

    /* red */
    temp_red_bottom = []
    for (let a = 0; a < red_bottom.length; a++) {
        row_nm = Number(red_bottom[a]) % 20
        if (row_nm > c) { temp_red_bottom.push(red_bottom[a]) }
        if (row_nm < c) { temp_red_bottom.push(tri_digit(Number(red_bottom[a]) + 1)) }
    }
    red_bottom = []
    for (let a = 0; a < temp_red_bottom.length; a++) { red_bottom.push(temp_red_bottom[a]) }
    console.log("red_bottom -> ", red_bottom)

    /* green */
    temp_green_bottom = []
    for (let a = 0; a < green_bottom.length; a++) {
        row_nm = Number(green_bottom[a]) % 20
        if (row_nm > c) { temp_green_bottom.push(green_bottom[a]) }
        if (row_nm < c) { temp_green_bottom.push(tri_digit(Number(green_bottom[a]) + 1)) }
    }
    green_bottom = []
    for (let a = 0; a < temp_green_bottom.length; a++) { green_bottom.push(temp_green_bottom[a]) }
    console.log("green_bottom -> ", green_bottom)

    /* blue */
    temp_blue_bottom = []
    for (let a = 0; a < blue_bottom.length; a++) {
        row_nm = Number(blue_bottom[a]) % 20
        if (row_nm > c) { temp_blue_bottom.push(blue_bottom[a]) }
        if (row_nm < c) { temp_blue_bottom.push(tri_digit(Number(blue_bottom[a]) + 1)) }
    }
    blue_bottom = []
    for (let a = 0; a < temp_blue_bottom.length; a++) { blue_bottom.push(temp_blue_bottom[a]) }
    console.log("blue_bottom -> ", blue_bottom)

    /* orange */
    temp_orange_bottom = []
    for (let a = 0; a < orange_bottom.length; a++) {
        row_nm = Number(orange_bottom[a]) % 20
        if (row_nm > c) { temp_orange_bottom.push(orange_bottom[a]) }
        if (row_nm < c) { temp_orange_bottom.push(tri_digit(Number(orange_bottom[a]) + 1)) }
    }
    orange_bottom = []
    for (let a = 0; a < temp_orange_bottom.length; a++) { orange_bottom.push(temp_orange_bottom[a]) }
    console.log("orange_bottom -> ", orange_bottom)

    /* cyan */
    temp_cyan_bottom = []
    for (let a = 0; a < cyan_bottom.length; a++) {
        row_nm = Number(cyan_bottom[a]) % 20
        if (row_nm > c) { temp_cyan_bottom.push(cyan_bottom[a]) }
        if (row_nm < c) { temp_cyan_bottom.push(tri_digit(Number(cyan_bottom[a]) + 1)) }
    }
    cyan_bottom = []
    for (let a = 0; a < temp_cyan_bottom.length; a++) { cyan_bottom.push(temp_cyan_bottom[a]) }
    console.log("cyan_bottom -> ", cyan_bottom)

    /* yellow */
    temp_yellow_bottom = []
    for (let a = 0; a < yellow_bottom.length; a++) {
        row_nm = Number(yellow_bottom[a]) % 20
        if (row_nm > c) { temp_yellow_bottom.push(yellow_bottom[a]) }
        if (row_nm < c) { temp_yellow_bottom.push(tri_digit(Number(yellow_bottom[a]) + 1)) }
    }
    yellow_bottom = []
    for (let a = 0; a < temp_yellow_bottom.length; a++) { yellow_bottom.push(temp_yellow_bottom[a]) }
    console.log("yellow_bottom -> ", yellow_bottom)

    /* purple */
    temp_purple_bottom = []
    for (let a = 0; a < purple_bottom.length; a++) {
        row_nm = Number(purple_bottom[a]) % 20
        if (row_nm > c) { temp_purple_bottom.push(purple_bottom[a]) }
        if (row_nm < c) { temp_purple_bottom.push(tri_digit(Number(purple_bottom[a]) + 1)) }
    }
    purple_bottom = []
    for (let a = 0; a < temp_purple_bottom.length; a++) { purple_bottom.push(temp_purple_bottom[a]) }
    console.log("purple_bottom -> ", purple_bottom)

}

var check_complete_row = () => {

    var count_row = {}
    var check_num = ""
    var all_clear_row = []

    for (let a = 0; a <= 9; a++) {

        for (let b = 0; b <= 19; b++) {

            if (b < 10) {
                check_num = a + "0" + b
            } else {
                check_num = a + "" + b
            }
            if ($("#" + check_num).hasClass("now_focus")) {
                $("#" + check_num).removeClass("now_focus")
            }
            if (all_bottom.includes(check_num)) {
                if (b in count_row) {
                    count_row[b] += 1
                } else {
                    count_row[b] = 1
                }
            }
        }
    }

    for (let c = 19; c >= 0; c--) {

        if (c in count_row) {
            if (count_row[c] == 10) {
                all_clear_row.push(c)
            }
        }
    }

    console.log('All clear rows:', all_clear_row)

    var cleared_row_cnt = 0

    all_clear_row = all_clear_row.sort(function(a, b) { return b - a })
    for (let i = 0; i < all_clear_row.length; i++) {
        clear_complete_row(all_clear_row[i] + cleared_row_cnt)
        cleared_row_cnt += 1
    }

    total_cleared_rows += all_clear_row.length
    if (all_clear_row.length == 1) {
        blink_score("< Single >")
    } else if (all_clear_row.length == 2) {
        blink_score("< Double >")
    } else if (all_clear_row.length == 3) {
        blink_score("< Triple >")
    } else if (all_clear_row.length == 4) {
        blink_score("< Tetris! >")
    }

    all_clear_row = []
    cleared_row_cnt = 0
}

var blink_score = (s) => {

    if (s != "") {
        $("#score").html(s)
        $("#score").addClass("text_blue")
        setTimeout(() => { $("#score").removeClass("text_blue").addClass("text_black") }, 250);
        setTimeout(() => { $("#score").removeClass("text_black").addClass("text_blue") }, 500);
        //setTimeout(() => { $("#score").removeClass("text_blue").addClass("text_black") }, 750);
        //setTimeout(() => { $("#score").removeClass("text_black").addClass("text_blue") }, 1000);
    }

}

var add_bottom = () => {

    var now_color = now_type.split('_')[0]

    for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 19; b++) {

            var check_block = ""
            if (b < 10) {
                check_block = a + "0" + b
            } else {
                check_block = a + "" + b
            }
            let $check_block = $("#" + check_block)

            if ($check_block.hasClass("now_focus")) {
                if (now_color == "purple") {
                    if (!(purple_bottom.includes(check_block))) {
                        purple_bottom.push(check_block)
                        if (!(all_bottom.includes(check_block))) {
                            all_bottom.push(check_block)
                        }
                    }
                } else if (now_color == "cyan") {
                    if (!(cyan_bottom.includes(check_block))) {
                        cyan_bottom.push(check_block)
                        if (!(all_bottom.includes(check_block))) {
                            all_bottom.push(check_block)
                        }
                    }
                } else if (now_color == "blue") {
                    if (!(blue_bottom.includes(check_block))) {
                        blue_bottom.push(check_block)
                        if (!(all_bottom.includes(check_block))) {
                            all_bottom.push(check_block)
                        }
                    }
                } else if (now_color == "orange") {
                    if (!(orange_bottom.includes(check_block))) {
                        orange_bottom.push(check_block)
                        if (!(all_bottom.includes(check_block))) {
                            all_bottom.push(check_block)
                        }
                    }
                } else if (now_color == "green") {
                    if (!(green_bottom.includes(check_block))) {
                        green_bottom.push(check_block)
                        if (!(all_bottom.includes(check_block))) {
                            all_bottom.push(check_block)
                        }
                    }
                } else if (now_color == "red") {
                    if (!(red_bottom.includes(check_block))) {
                        red_bottom.push(check_block)
                        if (!(all_bottom.includes(check_block))) {
                            all_bottom.push(check_block)
                        }
                    }
                } else if (now_color == "yellow") {
                    if (!(yellow_bottom.includes(check_block))) {
                        yellow_bottom.push(check_block)
                        if (!(all_bottom.includes(check_block))) {
                            all_bottom.push(check_block)
                        }
                    }
                }

            }
        }
    }

    console.log("purple_bottom:", purple_bottom)
}

var turn_tetris = (d) => {

    var now_color = now_type.split('_')[0]
    var now_dir = now_type.split('_')[1]
    console.log(now_color, now_dir)
    var next_dir = ""

    if (d == 0) {
        // up turn
        if (now_dir == 'up') {
            next_dir = 'right'
        } else if (now_dir == 'right') {
            next_dir = 'down'
        } else if (now_dir == 'down') {
            next_dir = 'left'
        } else if (now_dir == 'left') {
            next_dir = 'up'
        }
    } else if (d == 1) {
        // Z turn
        if (now_dir == 'up') {
            next_dir = 'left'
        } else if (now_dir == 'right') {
            next_dir = 'up'
        } else if (now_dir == 'down') {
            next_dir = 'right'
        } else if (now_dir == 'left') {
            next_dir = 'down'
        }
    }

    now_type = now_color + '_' + next_dir

    var [num_p1, num_p2, num_p3, num_p4] = test_num(0)
    if (all_bottom.includes(tri_digit(num_p1)) || all_bottom.includes(tri_digit(num_p2)) || all_bottom.includes(tri_digit(num_p3)) || all_bottom.includes(tri_digit(num_p4))) {

        now_dir = now_type.split('_')[1]

        if (d == 0) {
            if (now_dir == 'up') {
                next_dir = 'left'
            } else if (now_dir == 'right') {
                next_dir = 'up'
            } else if (now_dir == 'down') {
                next_dir = 'right'
            } else if (now_dir == 'left') {
                next_dir = 'down'
            }
        } else if (d == 1) {
            if (now_dir == 'up') {
                next_dir = 'right'
            } else if (now_dir == 'right') {
                next_dir = 'down'
            } else if (now_dir == 'down') {
                next_dir = 'left'
            } else if (now_dir == 'left') {
                next_dir = 'up'
            }
        }

        now_type = now_color + '_' + next_dir
        console.log('turn prohibited')

    } else if ((num_p1 % 100) >= 19 || (num_p2 % 100) >= 19 || (num_p3 % 100) >= 19 || (num_p4 % 100) >= 19) {

        now_dir = now_type.split('_')[1]
        if (d == 0) {
            if (now_dir == 'up') {
                next_dir = 'left'
            } else if (now_dir == 'right') {
                next_dir = 'up'
            } else if (now_dir == 'down') {
                next_dir = 'right'
            } else if (now_dir == 'left') {
                next_dir = 'down'
            }
        } else if (d == 1) {
            if (now_dir == 'up') {
                next_dir = 'right'
            } else if (now_dir == 'right') {
                next_dir = 'down'
            } else if (now_dir == 'down') {
                next_dir = 'left'
            } else if (now_dir == 'left') {
                next_dir = 'up'
            }
        }

        now_type = now_color + '_' + next_dir
        console.log('turn prohibited')

    } else {

        while (1) {
            var [num_p1, num_p2, num_p3, num_p4] = test_num(0)
            if (num_p1 < 0 || num_p2 < 0 || num_p3 < 0 || num_p4 < 0) {
                var [num_t1, num_t2, num_t3, num_t4] = test_num(100)
                if (!(all_bottom.includes(tri_digit(num_t1)) || all_bottom.includes(tri_digit(num_t2)) || all_bottom.includes(tri_digit(num_t3)) || all_bottom.includes(tri_digit(num_t4)))) {
                    now_focus += 100
                    continue
                } else {
                    now_dir = now_type.split('_')[1]
                    if (d == 0) {
                        if (now_dir == 'up') {
                            next_dir = 'left'
                        } else if (now_dir == 'right') {
                            next_dir = 'up'
                        } else if (now_dir == 'down') {
                            next_dir = 'right'
                        } else if (now_dir == 'left') {
                            next_dir = 'down'
                        }
                    } else if (d == 1) {
                        if (now_dir == 'up') {
                            next_dir = 'right'
                        } else if (now_dir == 'right') {
                            next_dir = 'down'
                        } else if (now_dir == 'down') {
                            next_dir = 'left'
                        } else if (now_dir == 'left') {
                            next_dir = 'up'
                        }
                    }
                    now_type = now_color + '_' + next_dir
                    console.log('turn prohibited')
                    break
                }
            }
            if (num_p1 > 1000 || num_p2 > 1000 || num_p3 > 1000 || num_p4 > 1000) {
                var [num_t1, num_t2, num_t3, num_t4] = test_num(-100)
                if (!(all_bottom.includes(tri_digit(num_t1)) || all_bottom.includes(tri_digit(num_t2)) || all_bottom.includes(tri_digit(num_t3)) || all_bottom.includes(tri_digit(num_t4)))) {
                    now_focus -= 100
                    continue
                } else {
                    now_dir = now_type.split('_')[1]
                    if (d == 0) {
                        if (now_dir == 'up') {
                            next_dir = 'left'
                        } else if (now_dir == 'right') {
                            next_dir = 'up'
                        } else if (now_dir == 'down') {
                            next_dir = 'right'
                        } else if (now_dir == 'left') {
                            next_dir = 'down'
                        }
                    } else if (d == 1) {
                        if (now_dir == 'up') {
                            next_dir = 'right'
                        } else if (now_dir == 'right') {
                            next_dir = 'down'
                        } else if (now_dir == 'down') {
                            next_dir = 'left'
                        } else if (now_dir == 'left') {
                            next_dir = 'up'
                        }
                    }
                    now_type = now_color + '_' + next_dir
                    console.log('turn prohibited')
                    break
                }
            }
            break
        }
    }

    console.log('tetris turned:', now_type)
}

var rand = (start, end) => {
    var r
    n = end - start + 1 //求亂數的範圍 
    r = Math.random() * n // 放大
    r = Math.floor(r) // 去除小數點
    r += start // 位移
    return r
}

var this_change_list = []
var next_change_list = []
var change_cnt = 0

var random_new_tetris = () => {

    this_change_list = []

    if (!(next_change_list.length == 0)) {

        console.log("non-first random", next_change_list)

        for (let t = 0; t < next_change_list.length; t++) { this_change_list.push(next_change_list[t]) }

        next_change_list = []
        while (next_change_list.length < 7) {
            var r = rand(0, 6)
            while (next_change_list.includes(r)) {
                r += 1
                if (r > 6) { r = 0 }
            }
            next_change_list.push(r)
        }

    } else {

        console.log("First random")

        while (this_change_list.length < 7) {
            var r = rand(0, 6)
            while (this_change_list.includes(r)) {
                r += 1
                if (r > 6) { r = 0 }
            }
            this_change_list.push(r)
        }

        while (next_change_list.length < 7) {
            var r = rand(0, 6)
            while (next_change_list.includes(r)) {
                r += 1
                if (r > 6) { r = 0 }
            }
            next_change_list.push(r)
        }

    }
    console.log("random list constructed:", this_change_list)
}

var clear_preview_to_gray = () => {

    for (let d = 0; d <= 3; d++) {
        for (let a = 0; a <= 4; a++) {
            for (let b = 0; b <= 4; b++) {
                var $draw_block = $("#n" + d + "_" + a + b)
                $draw_block.removeClass("color-purple").removeClass("color-cyan").removeClass("color-blue").removeClass("color-orange").removeClass("color-green").removeClass("color-red").removeClass("color-yellow")
                $draw_block.attr("color", "gray")
                $draw_block.addClass("color-gray")
            }
        }
    }

}

var draw_preview_color = () => {

    for (let d = 0; d <= 3; d++) {

        for (let a = 0; a <= 4; a++) {
            for (let b = 0; b <= 4; b++) {

                var $draw_block = $("#n" + d + "_" + a + b)

                $draw_block.removeClass("color-purple").removeClass("color-cyan").removeClass("color-blue").removeClass("color-orange").removeClass("color-green").removeClass("color-red").removeClass("color-yellow")

                if ($draw_block.attr("color") == "purple") {
                    $draw_block.removeClass("color-gray").addClass("color-purple")
                } else if ($draw_block.attr("color") == "cyan") {
                    $draw_block.removeClass("color-gray").addClass("color-cyan")
                } else if ($draw_block.attr("color") == "blue") {
                    $draw_block.removeClass("color-gray").addClass("color-blue")
                } else if ($draw_block.attr("color") == "orange") {
                    $draw_block.removeClass("color-gray").addClass("color-orange")
                } else if ($draw_block.attr("color") == "green") {
                    $draw_block.removeClass("color-gray").addClass("color-green")
                } else if ($draw_block.attr("color") == "red") {
                    $draw_block.removeClass("color-gray").addClass("color-red")
                } else if ($draw_block.attr("color") == "yellow") {
                    $draw_block.removeClass("color-gray").addClass("color-yellow")
                } else if ($draw_block.attr("color") == "gray") {
                    $draw_block.addClass("color-gray")
                }
            }
        }

    }
}

var preview_tetris_innerdraw = (d, c) => {

    if (c == "purple") {
        $("#n" + d + "_02").attr("color", "purple")
        $("#n" + d + "_11").attr("color", "purple")
        $("#n" + d + "_12").attr("color", "purple")
        $("#n" + d + "_22").attr("color", "purple")
    } else if (c == "green") {
        $("#n" + d + "_11").attr("color", "green")
        $("#n" + d + "_12").attr("color", "green")
        $("#n" + d + "_22").attr("color", "green")
        $("#n" + d + "_23").attr("color", "green")
    } else if (c == "red") {
        $("#n" + d + "_21").attr("color", "red")
        $("#n" + d + "_22").attr("color", "red")
        $("#n" + d + "_12").attr("color", "red")
        $("#n" + d + "_13").attr("color", "red")
    } else if (c == "yellow") {
        $("#n" + d + "_11").attr("color", "yellow")
        $("#n" + d + "_21").attr("color", "yellow")
        $("#n" + d + "_12").attr("color", "yellow")
        $("#n" + d + "_22").attr("color", "yellow")
    } else if (c == "orange") {
        $("#n" + d + "_11").attr("color", "orange")
        $("#n" + d + "_21").attr("color", "orange")
        $("#n" + d + "_22").attr("color", "orange")
        $("#n" + d + "_23").attr("color", "orange")
    } else if (c == "blue") {
        $("#n" + d + "_11").attr("color", "blue")
        $("#n" + d + "_21").attr("color", "blue")
        $("#n" + d + "_12").attr("color", "blue")
        $("#n" + d + "_13").attr("color", "blue")
    } else if (c == "cyan") {
        $("#n" + d + "_02").attr("color", "cyan")
        $("#n" + d + "_12").attr("color", "cyan")
        $("#n" + d + "_22").attr("color", "cyan")
        $("#n" + d + "_32").attr("color", "cyan")
    }

}

var preview_tetris = () => {

    var color_list = ["purple", "orange", "blue", "red", "green", "cyan", "yellow"]

    if (change_cnt < 4) {
        var next_1 = color_list[this_change_list[change_cnt + 1]]
        var next_2 = color_list[this_change_list[change_cnt + 2]]
        var next_3 = color_list[this_change_list[change_cnt + 3]]
    } else if (change_cnt == 4) {
        var next_1 = color_list[this_change_list[change_cnt + 1]]
        var next_2 = color_list[this_change_list[change_cnt + 2]]
        var next_3 = color_list[next_change_list[0]]
    } else if (change_cnt == 5) {
        var next_1 = color_list[this_change_list[change_cnt + 1]]
        var next_2 = color_list[next_change_list[0]]
        var next_3 = color_list[next_change_list[1]]
    } else if (change_cnt == 6) {
        var next_1 = color_list[next_change_list[0]]
        var next_2 = color_list[next_change_list[1]]
        var next_3 = color_list[next_change_list[2]]
    }

    clear_preview_to_gray()

    preview_tetris_innerdraw(1, next_1)
    console.log("inner_draw:", 1, next_1)
    preview_tetris_innerdraw(2, next_2)
    console.log("inner_draw:", 2, next_2)
    preview_tetris_innerdraw(3, next_3)
    console.log("inner_draw:", 3, next_3)

    if (hold != "") {
        console.log("draw hold:", hold)
        preview_tetris_innerdraw(0, hold)
    }

    draw_preview_color()

    console.log('preview:', next_1, next_2, next_3)
}

var space_tetris = (d) => {

    var test_plus = 0
    var break_type = 0

    while (test_plus < 20) {
        var [num_p1, num_p2, num_p3, num_p4] = test_num(test_plus + 1)
        console.log("test:", test_plus + 1)

        if (all_bottom.includes(tri_digit(num_p1)) || all_bottom.includes(tri_digit(num_p2)) || all_bottom.includes(tri_digit(num_p3)) || all_bottom.includes(tri_digit(num_p4))) {
            break_type = 1
            console.log("break_type+" + break_type, [num_p1, num_p2, num_p3, num_p4])
            break
        }
        if ((num_p1 % 100) >= 19 || (num_p2 % 100) >= 19 || (num_p3 % 100) >= 19 || (num_p4 % 100) >= 19) {
            break_type = 2
            console.log("break_type+" + break_type, [num_p1, num_p2, num_p3, num_p4])
            break
        }
        test_plus += 1
    }

    console.log("test_plus:", test_plus)

    if (d == 0) {
        now_focus += test_plus
        lock_left_right = 1
        lock_space = 1
        key_down()
        run_bottomed()
    } else {
        if (break_type == 1) {
            return test_plus
        } else if (break_type == 2) {
            return test_plus + 1
        }
    }

    draw_bottom()
    draw_color()

}

var preview_space = () => {

    var now_color = now_type.split('_')[0]

    for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 19; b++) {

            var check_block = ""
            if (b < 10) {
                check_block = a + "0" + b
            } else {
                check_block = a + "" + b
            }

            let $check_block = $("#" + check_block)

            if ($check_block.hasClass("now_pv")) {
                $check_block.removeClass("now_pv")
            }
        }
    }

    var test_plus = space_tetris(1)
    console.log("preview_space", test_plus, now_focus + test_plus)
    draw_now_type(now_focus + test_plus)

}

var hold_tetris = () => {

    var color_list = ["purple", "orange", "blue", "red", "green", "cyan", "yellow"]

    if (holded == 1 && double_holded == 0) {

        temp = hold
        hold = now_type.split("_")[0]
        now_type = temp + "_" + "up"

        double_holded = 1
        now_focus = 500

        clear_to_gray()

        change_cnt -= 1
        preview_tetris()
        change_cnt += 1

    } else if (double_holded == 0) {

        hold = now_type.split("_")[0]
        clear_to_gray()
        next_tetris()

        holded = 1
        double_holded = 1

    } else {
        console.log("double holded prohibited")
    }

    this_hold = 1

    draw_bottom()
    draw_color()

}

var next_tetris = (h) => {

    var color_list = ["purple", "orange", "blue", "red", "green", "cyan", "yellow"]

    now_focus = 500
    now_type = color_list[this_change_list[change_cnt]] + "_" + "up"

    preview_tetris()
    lock_left_right = 0

    if (change_cnt < 6) {
        change_cnt += 1
    } else {
        change_cnt = 0
        random_new_tetris()
    }

}

var NewLevel = () => {

    clearInterval(timergo)
    if (mode_life_in_the_space == 0) {
        game_speed = 350 * (1 - ((Now_level - 1) * 0.05))
    } else {
        //game_speed = 100
        game_speed = 350 * (1 - ((Now_level - 1) * 0.05))
    }
    timergo = setInterval(TetrisTimer, game_speed)

}

var TetrisTimer = () => {

    console.log(now_focus)
    auto_down()
    preview_space()

    if ((Math.floor(total_cleared_rows / 10) + 1) > Now_level) {
        Now_level = Math.floor((total_cleared_rows / 10) + 1)
        NewLevel()
    }

    $("#cleared_rows").val(total_cleared_rows)
    $("#now_level").val(Now_level)

}

var now_focus = 350
var now_type = ""
var bottomed = 0
var total_cleared_rows = 0
var hold = ""
var holded = 0
var double_holded = 0

var lock_left_right = 0
var lock_turn = 0
var lock_space = 0

if (mode_life_in_the_space == 1) {
    //var game_speed = 100
    var game_speed = 350
} else {
    var game_speed = 350
}
var Now_level = 1

var last_key_ArrowLeft = 0,
    last_key_ArrowRight = 0,
    last_key_ArrowUp = 0,
    last_key_z = 0

var mode_life_in_the_space = 0
var mode_anti_gravity = 0

//call from Main loop once every frame
function doSuperMove() {

    if (keys.ArrowLeft) {

        last_key_ArrowLeft += 1

        if (last_key_ArrowLeft != 2) {
            // move left
            to_left()
            console.log("left pressed", last_key_ArrowLeft)
        }

    } else { last_key_ArrowLeft = 0 }

    if (keys.ArrowRight) {

        last_key_ArrowRight += 1

        if (last_key_ArrowRight != 2) {
            // move right
            to_right()
            console.log("right pressed", last_key_ArrowRight)
        }

    } else { last_key_ArrowRight = 0 }

    if (keys.ArrowDown) {
        // move down
        key_down()
        console.log("key down")
    }

    if (keys.ArrowUp) {
        // up arrow
        if (last_key_ArrowUp != 1 && lock_turn != 1) {
            clear_to_gray()
            turn_tetris(0)
            draw_now_type(0)
            last_key_ArrowUp = 1
        }
    } else { last_key_ArrowUp = 0 }

    if (keys.KeyZ) {

        // Key z
        if (last_key_z != 1 && lock_turn != 1) {
            clear_to_gray()
            turn_tetris(1)
            draw_now_type(0)
            last_key_z = 1
        }
    } else { last_key_z = 0 }

    if (mode_life_in_the_space == 0) {
        if (keys.Space) {
            // space
            if (lock_space != 1 && ((now_focus % 100) > 1)) {
                space_tetris(0)
                console.log("space pressed", now_focus, lock_space)
            } else {
                console.log("space prohibited")
            }
        }
    } else if (mode_life_in_the_space == 1) {
        if (keys.Space) {
            space_for_life_in_the_space()
        }
    }

    if (keys.ShiftLeft) {
        // hold
        hold_tetris()
        console.log("hold pressed")
    }
}

var run_bottomed = () => {

    console.log('touched bottom')
    add_bottom()
    check_complete_row()
    double_holded = 0
    next_tetris()
    draw_bottom()
    draw_color()
    lock_space = 0
    bottomed = 0

}

var SuperTimer = () => {

    if (bottomed == 1) {
        run_bottomed()
    } else {
        draw_bottom()
        draw_color()
    }

    doSuperMove()
    clear_to_gray(0)
    preview_space()

}

var stop_game = () => {

    clearInterval(timergo)
    clearInterval(supertimergo)
    timeron = 0
    console.log('paused')

    purple_bottom = []
    cyan_bottom = []
    blue_bottom = []
    orange_bottom = []
    green_bottom = []
    red_bottom = []
    yellow_bottom = []
    all_bottom = []

    this_change_list = []
    next_change_list = []
    change_cnt = 0

    now_type = ""
    bottomed = 0
    hold = ""
    holded = 0
    double_holded = 0

    lock_left_right = 0
    lock_turn = 0
    lock_space = 0

    game_speed = 350

    last_key_ArrowLeft = 0
    last_key_ArrowRight = 0
    last_key_ArrowUp = 0

}

var new_game_start = () => {

    // Start new Game
    random_new_tetris()
    next_tetris()
    timergo = setInterval(TetrisTimer, game_speed)
    if (mode_life_in_the_space) {
        //supertimergo = setInterval(SuperTimer, game_speed * 0.5)
        supertimergo = setInterval(SuperTimer, 70)
    } else {
        supertimergo = setInterval(SuperTimer, 70)
    }

    if (mode_anti_gravity == 1) {
        anti_gravity()
        mode_anti_gravity = 0
        $("#mode_A").removeClass("mode_on").addClass("mode_off")
    }

    if (mode_life_in_the_space == 1) {
        mode_life_in_the_space = 0
        $("#mode_S").removeClass("mode_on").addClass("mode_off")
    }

    timeron = 1
    Now_level = 1
    total_cleared_rows = 0
    $("#score").html("")
    blink_score("New Game!")
    console.log('New Game Start')

}

var decide_mode_text = () => {
    if (mode_life_in_the_space == 0 && mode_anti_gravity == 0) {
        $("#span_mode").html("LIFE-ON-EARTH")
    } else if (mode_life_in_the_space == 1 && mode_anti_gravity == 1) {
        $("#span_mode").html("LIFE-IN-THE-ANTI-SPACE")
    } else if (mode_life_in_the_space == 1) {
        $("#span_mode").html("LIFE-IN-THE-SPACE")
    } else if (mode_anti_gravity == 1) {
        $("#span_mode").html("ANTI-GRAVITY")
    }
}

const keys = {};

var timergo
var supertimergo

var initial_game = () => {
    timergo = setInterval(TetrisTimer, game_speed)
    if (mode_life_in_the_space) {
        //supertimergo = setInterval(SuperTimer, game_speed * 0.5)
        if (game_speed > 140) {
            supertimergo = setInterval(SuperTimer, 70)
        } else { supertimergo = setInterval(SuperTimer, game_speed * 0.5) }
    } else {
        supertimergo = setInterval(SuperTimer, 70)
    }
    blink_score("New Game!")
    random_new_tetris()
    next_tetris()
}

$(() => {

    var timeron = 1

    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }

    function mouseEventHandler(event) {
        event.preventDefault();
    }

    var disable_mouse = () => {
        window.addEventListener('mousewheel', mouseEventHandler, { passive: false });
        window.addEventListener('DOMMouseScroll', mouseEventHandler, { passive: false });
    }

    var enable_mouse = () => {
        window.removeEventListener('mousewheel', mouseEventHandler, { passive: false });
        window.removeEventListener('DOMMouseScroll', mouseEventHandler, { passive: false });
    }

    // Initial Scroll Effect
    var total_scroll = 0
    var runScroll

    var pageScroll = () => {
        window.scrollBy(0, 1);
        total_scroll += 1
        if (total_scroll > 135) {
            clearInterval(runScroll)
            enable_mouse()
            initial_game()
        }
        console.log("total_scroll", total_scroll)
    }

    var controlScroll = () => {
        runScroll = setInterval(pageScroll, 8)
        console.log("runScroll!")
    }

    disable_mouse()
    scrolldelay = setTimeout(controlScroll, 1500)

    $("#menu_sign").hover(function() {
        $("#menu_table").removeClass("hide_menu").addClass("show_menu")
    }, function() {
        $("#menu_table").removeClass("show_menu").addClass("hide_menu")
    });

    $("#mode_A").css('cursor', 'pointer')
    $("#mode_A").on('click', () => {
        console.log("mode-A")
        if (mode_anti_gravity == 0) {
            anti_gravity()
            $("#mode_A").removeClass("mode_off").addClass("mode_on")
            mode_anti_gravity = 1
        } else if (mode_anti_gravity == 1) {
            anti_gravity()
            $("#mode_A").removeClass("mode_on").addClass("mode_off")
            mode_anti_gravity = 0
        }
        decide_mode_text()
    })

    $("#mode_S").css('cursor', 'pointer')
    $("#mode_S").on('click', () => {
        console.log("mode-S")
        if (mode_life_in_the_space == 0) {

            $("#mode_S").removeClass("mode_off").addClass("mode_on")

            //clearInterval(timergo)
            //game_speed = 100
            //timergo = setInterval(TetrisTimer, game_speed)

            clearInterval(supertimergo)
                //supertimergo = setInterval(SuperTimer, game_speed * 0.5)
            if (game_speed > 140) {
                supertimergo = setInterval(SuperTimer, 70)
            } else { supertimergo = setInterval(SuperTimer, game_speed * 0.5) }

            mode_life_in_the_space = 1

        } else if (mode_life_in_the_space == 1) {
            $("#mode_S").removeClass("mode_on").addClass("mode_off")
            mode_life_in_the_space = 0
        }
        decide_mode_text()
    })

    function keyEventHandler(event) {
        keys[event.code] = event.type === "keydown";
        event.preventDefault();
    }
    window.addEventListener("keydown", keyEventHandler);
    window.addEventListener("keyup", keyEventHandler);


    document.onkeydown = checkKey

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '16') {
            // shift
            //hold_tetris()
        } else if (e.keyCode == '32') {

            // space
            //space_tetris(0)

            if (mode_life_in_the_space == 0) {

                if (lock_space != 1 && ((now_focus % 100) > 1)) {
                    space_tetris(0)
                    console.log("space pressed", now_focus, lock_space)
                } else {
                    console.log("space prohibited")
                }

            } else if (mode_life_in_the_space == 1) {
                space_for_life_in_the_space()
            }

        } else if (e.keyCode == '38') {
            // up arrow
            //if (!keys.ArrowUp) {
            //    clear_to_gray()
            //    turn_tetris(0)
            //    draw_now_type(0)
            //}
            // up arrow

            if (lock_turn != 1) {
                clear_to_gray()
                turn_tetris(0)
                draw_now_type(0)
                last_key_ArrowUp = 1
            }

        } else if (e.keyCode == '90') {
            // Key z
            //clear_to_gray()
            //turn_tetris(1)
            //draw_now_type()
        } else if (e.keyCode == '40') {
            // down arrow
            //key_down()
            //console.log("key_downed", now_focus)
        } else if (e.keyCode == '37') {
            // left arrow
            //to_left()
            //console.log("to_lefted", now_focus)
        } else if (e.keyCode == '39') {
            // right arrow
            //to_right()
            //console.log("to_righted", now_focus)
        } else if (e.keyCode == '78') {
            // < N > for new Game
            stop_game()
            new_game_start()
        } else if (e.keyCode == '80') {
            if (timeron == 1) {

                clearInterval(timergo)
                clearInterval(supertimergo)

                clear_to_gray()
                draw_now_type(0)

                timeron = 0
                lock_left_right = 1
                lock_turn = 1
                lock_space = 1

                blink_score("< Paused >")
                console.log('paused')

            } else {

                clearInterval(timergo)
                clearInterval(supertimergo)
                timergo = setInterval(TetrisTimer, game_speed)
                if (mode_life_in_the_space) {
                    //supertimergo = setInterval(SuperTimer, game_speed * 0.5)
                    if (game_speed > 140) {
                        supertimergo = setInterval(SuperTimer, 70)
                    } else { supertimergo = setInterval(SuperTimer, game_speed * 0.5) }
                } else {
                    supertimergo = setInterval(SuperTimer, 70)
                }

                timeron = 1
                lock_left_right = 0
                lock_turn = 0
                lock_space = 0

                blink_score("< Resumed >")
                console.log('resumed')
            }
        }
    }

    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);

})