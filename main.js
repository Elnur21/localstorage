let hamburger = document.querySelector(".hamburger")
let menu = document.querySelector(".menu")

hamburger.addEventListener("click",()=>{
    menu.classList.toggle('active')
})