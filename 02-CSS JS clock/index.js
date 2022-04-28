var secondHand = document.querySelector('.second-hand')
var hourHand = document.querySelector('.hour-hand')
var minuteHand = document.querySelector('.minute-hand')

function getTime(){
var current_time = new Date()
var hours = current_time.getHours() > 12 ? current_time.getHours() - 12 : current_time.getHours();
var minute = current_time.getMinutes()
var sec = current_time.getSeconds()
hourHand.style.transform = `rotate(${hours*30 + 90}deg)`
secondHand.style.transform = `rotate(${sec*6 + 90}deg)`
minuteHand.style.transform = `rotate(${minute*6 + 90}deg)`

}

function runClock(){
    setInterval(getTime,1000)
}
