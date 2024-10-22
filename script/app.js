let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header__icon");
let menuBtnIcon = document.querySelector(".header__icon i");

menuBtn.addEventListener("click",function(){
    menu.style.left ="0"
    if(menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left="0"
            menuBtnIcon.classList="fa fa-times"
    }
});