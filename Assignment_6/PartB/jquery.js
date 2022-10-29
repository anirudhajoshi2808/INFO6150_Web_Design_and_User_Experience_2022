let sec = 0;
let hour = 0;
let min = 0;
let timer;

document.getElementById('main-button').addEventListener('click', () => {
    timer = setInterval(() => {
        console.log('fired')
        sec += 1;
        document.getElementsByClassName("stopwatch")[0].innerHTML = formatTime(sec);
    },1000)
})

document.getElementById('clear-button').addEventListener('click', () => {
    clearInterval(timer)
    sec = 0;
    document.getElementsByClassName("stopwatch")[0].innerHTML = "00:00:00";
})

document.getElementById('pause-button').addEventListener('click', ()=>{
    clearInterval(timer)
})

function formatTime(seconds) {

    return new Date(seconds * 1000).toISOString().substr(11, 8);
}