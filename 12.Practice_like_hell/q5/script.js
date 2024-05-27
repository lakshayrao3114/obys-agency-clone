var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var h1 = document.querySelector("h1");
var int ;


var count  = 0 ;
start.addEventListener("click" , function(){
    int = setInterval(function(){
        h1.textContent = count ;
        count++ ;
    },1000)
})


stop.addEventListener("click" , function(){
    clearInterval(int);
})