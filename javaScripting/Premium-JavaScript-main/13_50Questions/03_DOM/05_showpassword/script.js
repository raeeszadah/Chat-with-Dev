let button = document.querySelector('button')
let passwordInput = document.querySelector('#password')

button.addEventListener('click',()=>{
    let passwordType = passwordInput.type; // password
    passwordInput.type = passwordType === 'password' ? 'text' : 'password'
    button.innerText = passwordInput.type === 'password' ? 'Show' : 'Hide'
})