let btn=document.querySelectorAll(".ing_event_all_box_text_btn"),btn2=document.querySelectorAll(".modal_back"),close=document.querySelectorAll(".close_btn");function modal2(e){btn2[e].classList.remove("hidden")}function close1(e){btn2[e].classList.add("hidden")}
document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
         event.preventDefault(); 
       } 
   }, false);

var lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
         event.preventDefault(); 
       } lastTouchEnd = now; 
   }, false);