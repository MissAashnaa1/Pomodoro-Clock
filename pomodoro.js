let breakdec=document.getElementsByClassName("button-decrement-break")[0];
let breakinc=document.getElementsByClassName("button-increment-break")[0];
let sessiondec=document.getElementsByClassName("button-decrement-session")[0];
let sessioninc=document.getElementsByClassName("button-increment-session")[0];
let sm=document.getElementsByClassName("s-min")[0];
let bm=document.getElementsByClassName("b-min")[0];
let sesmin=0;
let bremin=0;
let countdown=document.getElementById("countdown");
let sec;
let min;
let countmin=document.getElementsByClassName("minute")[0];

let countsec=document.getElementsByClassName("second")[0];
console.log(countmin , countsec);
let play=document.getElementsByClassName("play")[0];
let reset=document.getElementsByClassName("reset")[0];
let session_name=document.getElementsByClassName("session-name")[0];
sm.innerHTML=`${sesmin} min`;
bm.innerHTML=`${bremin} min`;
let isplay=false;
let session_number=1;
let minute ;
let second ;
let tempmin;
let tempsec;
function s_increment(){
    sesmin++;
    console.log("ssincrement");
    sm.innerHTML=`${sesmin} min`;
    minute =sesmin-1 ;
    second = 59;
}

function s_decrement(){
    //0 se less ni hona 
    if(sesmin==0){
        alert("Time cann't be negative");
    }
    else{
    sesmin--;
    minute =sesmin ;
    second = 59;
    console.log("ssdecrement");}
    sm.innerHTML=`${sesmin} min`;
}
function b_increment(){
    bremin++;
    bm.innerHTML=`${bremin} min`;
    console.log("bbincrement");
}
function b_decrement(){
    //0 se less ni hona
    if(bremin==0){
        alert("Time cann't be negative");
    }
    
    else{ bremin--;
        console.log("bbdecrement"); 
    bm.innerHTML=`${bremin} min`;}
}



reset.addEventListener("click",function(event){
    resett();
});
function resett(){
    sesmin=0;
    console.log("in reset function ");
    sm.innerHTML=`${sesmin} min`;
    bremin=0;
    bm.innerHTML=`${bremin} min`;
    session_number=1;
    clearInterval(sec);
    clearInterval(min);
    countsec.innerHTML="00 ";
    countmin.innerHTML=" 00 : ";
    minute=0;
    second=0;
    breakdec.disabled=false;
    breakinc.disabled=false;
    sessiondec.disabled=false;
    sessioninc.disabled=false;
    session_name.innerHTML="WATCH RESET";


}
play.addEventListener("click",function(event){
    if(isplay==false){
        play.innerHTML="pause";
        minute = sesmin;
      
       let timerforbreak=setTimeout(() => {
        minute=bremin;
        session_name.innerHTML="BREAK TIME!!";
        console.log(minute);
        countdownn();
        
        
       }, sesmin*6000);
       countdownn();
       
       session_name.innerHTML=`session ${session_number++}`;
       isplay=true;
    }
      
       
    else {
        play.innerHTML="start";
        //pause();
        // tempsec=second;
        // tempmin=minute;
        clearInterval(sec);
        clearInterval(min);
        second=tempsec;
        minute=tempmin;
        countdownn();   
        isplay=false;
    }
    //console.log("hi");
    //start();
});
 

    


function countdownn(){
  //  console.log('hi3');
  
    if(minute<=0 ){
     alert("Increase time");
     return;    
    }
    else{
        breakdec.disabled=true;
        breakinc.disabled=true;
        sessiondec.disabled=true;
        sessioninc.disabled=true;
        countmin.innerHTML =`${ --minute} :` ;
        tempmin=minute;
        second=59;
        tempsec=second;
     countsec.innerHTML = "59";
     //console.log("countdownn");
    
         min = setInterval(()=>{// for 5
            if(minute==0&&second==-1){
                
                 return;

             }
             console.log("hey");
             countmin.innerHTML =`${--minute} : `;//4 3 2 1 0
             tempmin=minute;
              
         }, 6000);
         sec = setInterval(()=>{
            countsec.innerHTML=`${second--}`;
            tempsec=second;
            if(minute==0&&second==0){
                clearInterval(sec);
                clearInterval(min);
                console.log("Clear");
                 return;
             }
            if(second==-1){
                second = 59;
            }
            // if(isplay==true){
            //     clearInterval(sec);
            //     clearInterval(min);
            //     tempsec=second;
            //     tempmin=minute;
            // }
             
             //59 58 1 0 59
             
         },100)

     }
 }

    