let sidebar = document.querySelector('.sidebar')
let button = document.querySelector('button')

button.addEventListener('click',()=>{
    sidebar.classList.toggle('showSidebar')
    console.log(sidebar)
})
