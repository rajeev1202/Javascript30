 window.addEventListener("keydown",function(e){
     onKeyPress(e)
 })
function addCickEvent(){
   
var keys = document.getElementsByClassName("key")
Array.from(keys).forEach(elem => {
    elem.addEventListener("click",onKeyPress)
})
}



function onKeyPress(e){
    let keyCode = e.keyCode
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
}

