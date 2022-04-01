var allKeysElem = document.getElementsByClassName("key").forEach(element => {
    addEventListener(click,() => {
        alert("wprkign")
    })
});

function onKeyClick(){
    var keycode = this.getAttribute("data-key")
    var audio = document.querySelector("audio[data-key = `${keycode}`]");
    audio.play();
}

Array.from(allKeysElem).forEach((element) => {
    element.addEventListener("click",)
})