var home =document.querySelector('#home');
var contact = document.querySelector('#contact');
var more = document.querySelector('#more');


var hometext =document.querySelector('#hometext');
var contacttext = document.querySelector('#contacttext');
var moretext = document.querySelector('#moretext');

hometext.style.display = 'block';
hometext.style.width = '50%';

contact.addEventListener("click",function(){

    removeh3s()

    contacttext.style.display = 'block';
    contacttext.style.width = '50%';

})

home.addEventListener("click",function(){

    removeh3s()

    hometext.style.display = 'block';
    hometext.style.width = '50%';

})

more.addEventListener("click",function(){

    removeh3s()

    moretext.style.display = 'block';
    moretext.style.width = '50%';

})

function removeh3s()
{
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display='none';
    })
}