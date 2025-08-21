var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h3 = document.querySelector("h3");

form.addEventListener("submit", function(ev){
    ev.preventDefault();
    for(var i = 0; i<inps.length; i++){
        if( inps[i].value.trim() === ''){
            h3.textContent = "Error, Some fields are blank";
            h3.style.color = "red";
            break;
        }
    }
})