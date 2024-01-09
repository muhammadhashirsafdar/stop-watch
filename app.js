// !  calling values

let displaytime = document.getElementById("time");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let [hours,minutes,seconds] = [0,0,0];

let timer = null;



// !  this function will increment
function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let hourdisplay = hours < 10 ? "0" + hours : hours;
    let minutedisplay = minutes < 10 ? "0" + minutes : minutes;
    let seconddisplay = seconds < 10 ? "0" + seconds : seconds;
    displaytime.innerText = hourdisplay + ":"+ minutedisplay + ":" + seconddisplay;
}
  


// !  start button function



startbtn.onclick = function(){
    
    if( timer !== null ){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch,1000);
}



// ! Stop button function



stopbtn.onclick = function(){
    clearInterval(timer);
}



// ! reset button function



resetbtn.onclick = function(){
    clearInterval(timer);
    [hours,minutes,seconds] = [0,0,0];
    displaytime.innerText = "00" + ":" + "00" + ":" + "00"
}

