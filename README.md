# b04703018.github.io

參考模板：https://colorlib.com/wp/template/cellon/

主要改動：
1. 去除不需要的區塊
2. 將內文改成我的工作經驗
3. 把聯絡資料處從 form 的形式改成顯示電子郵件和電話號碼

4. 把原本固定的標題改成動態的 typing effect
  
      (1) 參考 w3cshools 的說明：https://www.w3schools.com/howto/howto_js_typewriter.asp
  
      (2) w3cshools 提供的 code 打完一次文字就不會再改動，但我想要透過點擊 "What's more" 的按鈕來打出新的文字
  
      (3) 具體作法
  
      A. 把三次要打的不同內容設定成不同字串，例如：
        
          var txt01 = 'Consultant'
          var txt11 = 'Value Creator'
          var txt21 = 'Language Learner
        
      B. 用 t 來紀錄當前打的內容是哪一組，如果 button (id 是 #demo-button)被按到，先把內容清空再傳入新的 t
      /* button on click event */
        $('#demo-button').on('click', () => {
        
            /* 切換到下一個 t */
            if (t == 0) {
                t = 1
            } else if (t == 1) {
                t = 2
            } else if (t == 2) {
                t = 0
            }
            
            /* 清空目前的打字內容 */
            document.getElementById("demo").innerHTML = ''
            document.getElementById("demo1").innerHTML = ''
            document.getElementById("demo2").innerHTML = ''
            i = 0
            j = 0
            k = 0
            
            /* 重新傳入 t */
            typeWriter(t)
        })
     
     C. 由於要打的三行有不同的 css 格式，而且有順序性，所以我把它做成不同 function
         形式： typeWriter(t) {打第一行} -> typeWriter1(t) {打第二行} -> typeWriter2 {打第三行}
         
         由於用 t 來記錄當前內容，但是 typing effect 又需要用到 setTimeout 函式來固定打下一個字的時間間隔，
         所以在打字的迴圈裡也會需要傳入 t 作為參數，比如：
              setTimeout(typeWriter, speed) <- 想辦法傳入 t
              
         沒想到 setTimeout()裡的第一個參數傳的不是函式名稱，而是類似一個字串，所以要傳入 t 就要以
              setTimeout("typeWriter(" + t + ")", speed)  <- 將 typeWriter(t) 寫成一個 String
         的形式。寫這裡的時候卡了很久。

5. 把固定的圖片改成動態的 carousel

      A. 找到原本的<img>
      B. 替換成 Carousel 的形式
      
        <!-- Carousel -->
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
           <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/profile1.jpg" class="d-block w-100" alt="2">
                </div>
                <div class="carousel-item">
                   <img src="img/profile2.jpg" class="d-block w-100" alt="2">
                </div>
            </div>
        </div>
        
      C. 由於 Carousel 會動態把其中一個 item 加上 active 的類別，對先在 Chrome 裡打好程式碼再整個複製到 VSCode 的方法來說
         造成了不少麻煩。
         尤其寫的過程中有一次不小心把 item 的 active 類別刪掉，以為他會自己補上，沒想到跑不出來，一開始還以為是沒連到圖片，
         因此 debug 花了不少時間。


感謝閱讀。
EOF        
      
      
      
      
      
      
      
