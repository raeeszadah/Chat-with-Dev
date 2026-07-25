let navbar = document.querySelector('nav')

window.addEventListener('scroll',(e)=>{
    if(window.scrollY > 100){
        navbar.classList.add('stick')
    }else{
        navbar.classList.remove('stick')
    }
})