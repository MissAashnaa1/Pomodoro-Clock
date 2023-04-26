let breakdec = document.getElementsByClassName("button-decrement-break")[0];
let breakinc = document.getElementsByClassName("button-increment-break")[0];
let sessiondec = document.getElementsByClassName("button-decrement-session")[0];
let sessioninc = document.getElementsByClassName("button-increment-session")[0];
let sm = document.getElementsByClassName("s-min")[0];
let bm = document.getElementsByClassName("b-min")[0];
let sesmin = 0;
let bremin = 0;
let countdown = document.getElementById("countdown");
let sec;
let min;
let countmin = document.getElementsByClassName("minute")[0];
let start_pause = true;
let session_break = true;
let countsec = document.getElementsByClassName("second")[0];
console.log(countmin, countsec);
let play = document.getElementsByClassName("play")[0];
let reset = document.getElementsByClassName("reset")[0];
let session_name = document.getElementsByClassName("session-name")[0];
sm.innerHTML = `${sesmin} min`;
bm.innerHTML = `${bremin} min`;
let isplay = false;
let session_number = 1;
let minute= 0;
let second =0;
function s_increment() {
    sesmin++;
    // console.log("ssincrement");
    sm.innerHTML = `${sesmin} min`;
    // minute =sesmin-1 ;
    // second = 59;
}

function s_decrement() {
    //0 se less ni hona 
    if (sesmin == 0) {
        alert("Time cann't be negative");
    }
    else {
        sesmin--;
        // minute =sesmin ;
        // second = 59;
//bot aap ho nikmeeeeeee
        // console.log("ssdecrement")
    }
    sm.innerHTML = `${sesmin} min`;
}
function b_increment() {
    bremin++;
    bm.innerHTML = `${bremin} min`;
    // console.log("bbincrement");
}
function b_decrement() {
    //0 se less ni hona
    if (bremin == 0) {
        alert("Time cann't be negative");
    }

    else {
        bremin--;
        // console.log("bbdecrement"); 
        bm.innerHTML = `${bremin} min`;
    }
}



reset.addEventListener("click", function (event) {
    resett();
});
function resett() {
    sesmin = 0;
    sm.innerHTML = `${sesmin} min`;
    bremin = 0;
    bm.innerHTML = `${bremin} min`;
    session_number = 1;
    clearInterval(sec);
    clearInterval(min);
    countsec.innerHTML = "00 ";
    countmin.innerHTML = " 00 : ";
    minute = 0;
    second = 0;
    start_pause = true;
    session_break=true;
    play.innerHTML="start";
    breakdec.disabled = false;
    breakinc.disabled = false;
    sessiondec.disabled = false;
    sessioninc.disabled = false;
    session_name.innerHTML = "WATCH RESET";


}
play.addEventListener("click", function (event) {
    if (start_pause == true) {
        if(sesmin==0){
            alert("Set Session time");
        }
        if(bremin==0){
            alert("Set break time");
        }
        else{play.innerHTML = "pause";
        countdownn();
        start_pause=false;}
        
    }
    else {
        //session_name.innerHTML="Session paused";
        clearInterval(min);
        clearInterval(sec);
        console.log(minute, second, "aash");
        play.innerHTML = "start";
        start_pause=true;
    }
        // breakdec.disabled=false;
        // breakinc.disabled=false;
        // sessiondec.disabled=false;
        // sessioninc.disabled=false;
    
})





function countdownn() {
    //   //  console.log('hi3');
      breakdec.disabled=true;
      breakinc.disabled=true;
      sessiondec.disabled=true;
      sessioninc.disabled=true;
    //if sec and min==0
    if(second<=0&&minute == 0){
        if (session_break == true) {
            session_name.innerHTML=`Session Number ${session_number++}`;
            minute = sesmin-1;
            second = 59;
            session_break=false;
        }
        else {
            session_name.innerHTML="BREAK TIME";
            minute = bremin-1;
            second = 59;
            session_break=true;
        } 
    }

        countmin.innerHTML = `${minute} :`;//1
        countsec.innerHTML = `${second}`;
        //      //console.log("countdownn");

        // min = setInterval(() => {// for 5
            
        //     console.log(minute, second, "shikhar");
            
        //     if (minute ==0) {
               
        //         // start_pause=false;
        //         // countdown();
        //         return;
        //     }
        //   //m per dba rhi hu suno bs
        //     countmin.innerHTML = `${--minute} : `;//0
        //     //              console.log("hey");
        //     //4 3 2 1 0

        // }, 6000);
        sec = setInterval(() => {
            countmin.innerHTML = `${minute} : `; 
            countsec.innerHTML = `${second}`;
            console.log(minute, second, "bot");
            // 1 0
           --second;
            //59 58 1 0 59
            if(minute==0&&second==-1){
                clearInterval(sec);
                clearInterval(min);
        
                countdownn();
                
            }
            if(second == -1){
                minute--;
                second = 59;
            }

        }, 1000)

   
    //     


    //      
}