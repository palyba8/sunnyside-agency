const toggleMenu = document.querySelector(".menu-toggle")
const mainNav = document.querySelector(".main-nav")
toggleMenu.addEventListener("click",()=>{
    mainNav.classList.toggle("main-nav--open")
})