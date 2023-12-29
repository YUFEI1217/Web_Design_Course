"use strict";
(function(){

    
    const skipBtn = document.querySelector('.skip_btn');
    skipBtn.addEventListener("click",(event) => {
        window.scrollTo({
            top: 240,
            behavior: "smooth"
        });
    })

    const Hamburger_icon = document.querySelector('.menu_icon');
    Hamburger_icon.onclick = function() {
        const menu = document.querySelector('.nav_head_mobile');
        if (menu.style.visibility === "visible") {
            menu.style.visibility = "hidden";
        } 
        else {
            menu.style.visibility = "visible";
        }
    }

})();