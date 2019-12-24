## 前端程式設計期末專案

### 1. 主題簡介

本專案是一個「俄羅斯方塊遊戲(Tetris)」，由於今年內著名的 Tetris 網站 Tetris Friends 和 FB 上大家或多或少都玩過的童年回憶 Tetris 都成為了時代的眼淚，而據說背後採用的 Flash 技術即將被淘汰是主要原因之一，從小學電腦課玩到大學不離不棄（然而技術一直差強人意）的我只好發憤圖強，選修前端程式設計來自己寫個 Tetris 玩啦！（而且用的是 JavaScript，各家瀏覽器總不可能不支援了吧:）


### 2. 遊玩方法

在遊戲網頁上，滑鼠游標移到「？」上就會以懸浮視窗顯示基本遊玩方法：

| Key           |  Function     |
| ------------- |:-------------:|
| < / >         | 向左/向右      |
| ^ / z         | 順時針旋轉/逆時針旋轉      | 
| shift         | 替換方塊(hold)      | 
| space         | 落下方塊(drop)      | 
| p             | 暫停遊戲      | 
| n             | 開始新遊戲      | 

Tetris 的主要目標是「消行」，也就是當落下的方塊佔滿其中一行時，該行就會消除，騰出空間給新產生的方塊，當新的方塊無法再往下落時（之前的方塊已經擋到遊戲視窗的頂端）則遊戲結束。

本專案採用的遊戲模式是不限時間，每消去 10 行就提升一個 Level ，並且加快遊戲速度，一般玩家的遊玩水準應該到 10 - 15 關左右是極限。

另外滿足我的童年幻想，加上了兩個特殊模式（可以疊加），透過點擊 Mode 下方的 [A] 和 [S] 鈕來開啟/關閉，具體內容請見 <4.特色亮點>。

3. 使用技術

    A. 鍵盤控制
    
    因為遊戲控制用到了方向鍵和空白鍵，為了不讓視窗跟著移動，用到下面的程式碼來限制瀏覽器預設行為：
    ```
    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault()
        }
    }, false)
    ```
    
    將鍵盤與遊戲操控連結起來(簡化範例)：
    
    ```
    function checkKey(e) {

        e = e || window.event

        if (e.keyCode == '16') {
            // shift
            // hold_tetris()
            
        } else if (e.keyCode == '32') {
            // space
            // space_tetris(0)

        } else if (e.keyCode == '38') {
            // up arrow
            // turn_tetris(0)
           
        } else if (e.keyCode == '90') {
            // Key z
            // turn_tetris(1)
            
        }
    }
    ```
    
    由於長按鍵盤（比如左右鍵）預設會有比較長的等待時間，可能從按下後半秒才開始處理長按事件，所以部分操作改用隨時記錄有哪些鍵按下，立刻執行的方式(簡化範例)：
    
    ```
    const keys = {}
    
    if (keys.ArrowLeft) {
        // move left
        to_left()
    }

    if (keys.ArrowRight) {
        // move right
        to_right()
    }
    
    if (keys.ArrowDown) {
        // move down
        key_down()
    }
    ```
    
    B. 滑鼠控制
    
    遊戲介面剛載入時，因為希望視窗自動往下捲一段，且過程中不要被玩家用滑鼠移動，所以用到下列程式碼：
    
    (1) 限制/恢復滑鼠捲動（第三個參數一定要加上 {passive: false}）
    
    ```
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
    ```
    
    (2) 自動捲到網頁頂端
    
    ```
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
    ```
    
    (3) 自動下捲（設定延遲來控制速度）
    
    ```
    var total_scroll = 0
    var runScroll

    var pageScroll = () => {
        // 每次只卷 1px
        window.scrollBy(0, 1);
        total_scroll += 1
        
        // 捲動結束條件
        if (total_scroll > 135) {
            clearInterval(runScroll)
            enable_mouse()
            // 開始遊戲
            initial_game()
        }
    }

    var controlScroll = () => {
        // 設定執行 pageScroll 的間隔
        runScroll = setInterval(pageScroll, 8)
    }

    disable_mouse()
    // 設定網頁載入到開始捲動的時間
    scrolldelay = setTimeout(controlScroll, 1500)
    ```
    
    C. 懸浮視窗（hover 時顯示）
    
    CSS:
    ```
    .hide_menu { visibility: hidden; }
    .show_menu { visibility: visible; }
    ```
    
    JS:
    ```
    $("#menu_sign").hover(function() {
        $("#menu_table").removeClass("hide_menu").addClass("show_menu")
    }, function() {
        $("#menu_table").removeClass("show_menu").addClass("hide_menu")
    });
    ```
    
    
    D. 隨機序列
    
    在正式的 Tetris 遊戲裡，不同顏色方塊出現的順序不是完全隨機的，而是採七個一循環的方式，例如 [橘黃靛紫藍紅綠] [綠黃紫靛紅橘藍]，也因此雖然有時候會遇到連續出現兩個相同顏色的方塊，但一定不會有三個以上連續相同顏色方塊出現的的情形，為了滿足這個規則，要使用到 random 的方法。
    
    ```
    var rand = (start, end) => {
        var r
        n = end - start + 1 //求亂數的範圍 
        r = Math.random() * n // 放大
        r = Math.floor(r) // 去除小數點
        r += start // 位移
        return r
    }
    
    while (this_change_list.length < 7) {
        var r = rand(0, 6)
        while (this_change_list.includes(r)) {
            r += 1
            if (r > 6) { r = 0 }
        }
        this_change_list.push(r)
    }
    ```
    
    E. 加上/去除類別
    
    把方塊所在方格塗上不同顏色的方法，是根據目前方塊的所在位置設定 "color" 這個 attribute 的值，之後再依據此值調整 css 類別（如果直接調整 css 類別，會造成不同區塊更新顏色的時間有微小差異）
     
    HTML
    ```
    <td id="300" color="gray" class="color-gray">300</td>
    ```
    
    CSS
    ```
    .color-gray {
        color: rgb(0, 0, 0);
        background: rgb(0, 0, 0);
        border: 2px #5
    }
    
    .color-blue {
        color: rgba(0, 0, 0, 0);
        background: rgb(77, 84, 181);
        border: 1px rgb(85, 85, 85) solid;
        -webkit-box-shadow: inset 0px 0px 0px 2px rgb(189, 193, 252);
        -moz-box-shadow: inset 0px 0px 0px 2px rgb(189, 193, 252);
        box-shadow: inset 0px 0px 0px 2px rgb(189, 193, 252);
    }
    ```
    
    JS
    ```
    // 經其他 function 判斷 now_color = "blue"
    
    // 調整 "color" 屬性
    $("#" + p1).attr("color", now_color)
    
    // 根據 "color" 屬性調整 css 類別
    if ($draw_block.attr("color") == "blue") {
        $draw_block.removeClass("color-gray")
        $draw_block.addClass("color-blue")
    }
    ```
    
    
4. 特色亮點

    除了傳統的 Tetris 玩法以外，我還加上了兩個可以疊加的模式：
    
    A. LIFE_IN_THE_SPACE
    
    這個模式把空白鍵的功能改成向上移動，可以幫忙爭取一點時間 :)，另外我是故意設計成可以向上飛超出視窗一點點
    
    ```
    // for game mode life_in_the_space
    var space_for_life_in_the_space = () => {

        // 更新顏色
        clear_to_gray()

        // 不能向上超出視窗太多，至少有一格方塊要在第一行以下
        var [num_p1, num_p2, num_p3, num_p4] = test_num(1)
        if ((num_p1 % 100) > 0 && (num_p2 % 100) > 0 && (num_p3 % 100) > 0 && (num_p4 % 100) > 0) {
            now_focus -= 1
        }
        
        // 調整 css 類別
        draw_now_type(0)
        
        // 印出 "moon-walk"
        console.log("moon-walk", now_focus)

    }
    ```
    
    B. ANTI-GRAVITY
    
    這個模式是把視窗上下倒轉，讓方塊往上移動，具體做法是把遊戲的主 table 裡每一格的 id 和對應格的 id 調換過來 (比如最上面一列的 id 全部換成最下面一列的 id)
    
    ```
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
                
                // 先把每一格根據原始 id 加上一個 "id_[][][]" 的屬性
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
                
                // 把每一格根據 "id_[][][]" 的屬性設定新 id
                $check_block.attr("id", change_id)

            }
        }

    }
    ```

5. 總結

    這次專案因為做的是鍵盤操控的遊戲，在做的過程中剛好補足了上課沒有提到的鍵盤控制部分，另外也接觸到了設定重複執行、延遲執行的 setInterval 和 setTimeout，很有收穫。
    
    一開始還在腦中構想時，還想說要讓方塊是獨立的 html element，然後透過調整 margin 來讓在視窗中移動，結果後來靈機一動用了 table 來解決，應該是精巧許多的做法，沒想到平常都拿來放文字數字的 table 實在是妙用無窮呢！（為了讓大家都知道他是 table，我特別把裡面填上每一格的 id，反白起來就會看到＾＾）
    
    最後希望大家喜歡這個專案，如果之後也想玩的話建議把程式碼抄到自己電腦裡，因為 Tetris 這個遊戲是有版權，需要付費給官方的哈哈（要是這個專案被認為有商業用途就...我也不知道怎麼辦），但是可以時不時來看一下，或許會有更新喔 :)
    
    
    b04703018 Ringo Chang 2019.12.24
    
    EOF
    













