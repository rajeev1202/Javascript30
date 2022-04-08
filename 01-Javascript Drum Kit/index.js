 window.addEventListener("keydown",function(e){
     onKeyPress(e)
 })
// function addCickEvent(){
   
// var keys = document.getElementsByClassName("key")
// Array.from(keys).forEach(elem => {
//     elem.addEventListener("click",onKeyPress)
// })
// }

// function addTransition(keycode){
// let keys = document.querySelectorAll("div.key")
// Array.from(keys).forEach((e) =>{
//     if(e.getAttribute("data-key") == keycode){
//         e.classList.add("play-key")
//     }

// })
// }

function removeTransition(e){
    if(e.propertyName != "transform") return
    this.classList.remove("play-key")
}

function onKeyPress(e){
    let keyCode = e.keyCode
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    let key = document.querySelector(`div[data-key="${keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    if(!audio) return
    audio.play()
    key.classList.add("play-key")

    if(document.querySelectorAll(".play-key").length >1){
        document.querySelectorAll(".play-key").forEach(playKey =>{
            if(! (playKey.getAttribute("data-key") == keyCode)){
                playKey.classList.remove("play-key")
            }
        })
    }
    
    key.addEventListener("transitionend",removeTransition)
    
}

