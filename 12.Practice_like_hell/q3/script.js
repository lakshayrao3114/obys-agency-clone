

var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]') ;
var h1 = document.querySelector("h1");




form.addEventListener("submit", function(event){
    event.preventDefault();

    for(var i=0 ; i<inps.length ; i++)
        {
            if (inps[i].value.trim() === '')
                {
                    h1.textContent="Error" ;
                    h1.style.color= "red" ;
                    break;
                }


        }
})