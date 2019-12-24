## 前端程式設計期末專案

### 1. 主題簡介

本專案是一個「俄羅斯方塊遊戲(Tetris)」，由於今年內著名的 Tetris 網站 Tetris Friends 和 FB 上大家或多或少都玩過的童年回憶 Tetris 都成為了時代的眼淚，而據說背後採用的 Flash 技術即將被淘汰是主要原因之一，從小學電腦課玩到大學不離不棄（然而技術一直差強人意）的我只好發憤圖強，選修前端程式設計來自己寫個 Tetris 玩啦！（而且用的是 JavaScript，各家瀏覽器肯定得支援了吧:）


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
    
    
    
    
    
    
    
    
    
    
    
    
    

4. 特色亮點
