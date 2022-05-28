

//取得nav中的圖片按鈕，以此來綁定單擊響應函數打開Pop頁面
let dynamicSelf = document.getElementById("my-pic");
let dynamic1 = document.getElementById("friend-pic1");
let dynamic2 = document.getElementById("friend-pic2");
let dynamic3 = document.getElementById("friend-pic3");
let dynamic4 = document.getElementById("friend-pic4");

//取得pop頁面，將其設置成display:"block";
let modalSelf = document.getElementById("myModal")
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modal4 = document.getElementById("myModal4");

//獲取close按鈕與modal元素，可用來將限時動態關閉
let close = document.getElementsByClassName("close");
let modal = document.getElementsByClassName("modal");

//獲取紙飛機圖示打開小盒子
let plane = document.getElementById("open");
//獲取小盒子頁面
let textbox = document.getElementById("textbox");

//獲取一個愛心
let heart = document.getElementById("heart");

heart.onclick = function(){
    if( heart.style.color == "red"){
        heart.className ="fa-regular  fa-heart";
        heart.style.color = "#fff"
    } else{
        heart.className ="fa-solid fa-heart";
        heart.style.color = "red"
    }
    return false
   
}

//獲取頁首頁尾
let header =document.getElementById("header");
let footer = document.getElementById("footer");
//設定一個函數，設型參
function pop (e,pic){
    e.onclick = function(){
        header.style.zIndex = "-10";
        footer.style.zIndex ="-10";
        pic.style.display = "block";
        if(e.alt == "好友頭貼"){
            e.style.border = "1px solid #ccc"
        };
               
}
}


//設置pop事件
pop(dynamicSelf,modalSelf);
pop(dynamic1,modal1);
pop(dynamic2,modal2);
pop(dynamic3,modal3);
pop(dynamic4,modal4);
pop(plane,textbox)


//設置返回主頁事件
for(let i=0 ; i<modal.length ; i++){
    close[i].onclick = function() {
        modal[i].style.display = "none";
        header.style.zIndex = "1000";
        footer.style.zIndex ="1000";
        return false
      }

}
//-----------------------------以上為限時動態Pop區--------------------------------

//留言區
//獲取留言框
let leaveMessage = document.querySelectorAll(".doc input");
let area = document.getElementsByClassName("message-area");

for(let i=0 ; i<leaveMessage.length ; i++)
    leaveMessage[i].onkeydown = function(event){
    event = event || window.event;
    if(event.keyCode == 13){
        let message = leaveMessage[i].value;
        let li = document.createElement("li");
        li.innerHTML = "<img src='../../圖片/chong-gi.jpg' alt='我的頭貼' width='20px' id='my-pic'>"+"daniel_yu0402:"+message;
        area[i].appendChild(li);
        li.style.color = "#fff";
        li.style.listStyle = "none"
        li.style.fontSize = "0.6em"
     
        leaveMessage[i].value = null;  
    }
 
}