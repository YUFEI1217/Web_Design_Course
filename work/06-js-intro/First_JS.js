"use strict";
(function() { 

    console.log("Page loaded")
    
    const link_btn = document.querySelectorAll('.nav_head_item');
    const btn_MB = document.querySelectorAll('.menu_button');
    const menuList = document.querySelectorAll('.submenu');
    
    menuList[0].style.display = 'none';
    for(let i = 0;i<link_btn.length;i++){

		btn_MB[i].addEventListener('click',function(){
            
            if (menuList[i].style.display === "none") {
                console.log("Show");
                menuList[i].style.display = "block";
                
            } 
            else {
                console.log("Hide");
                menuList[i].style.display = "none";
            }
            link_btn[i].classList.toggle("active");
            
        })
        menuList[i].style.display = 'none';
	}

    window.OpentheLink= OpentheLink;
    function OpentheLink(obj) {
        window.location.href='https://www.petplan.co.uk/pet-information/cat/breed/ragdoll/';
        // const value = obj.value;
        // value.classList.toggle("change");
    }

    const item = document.querySelectorAll('.submenu > li');
    // const item_link = document.querySelectorAll('.submenu_item > a');
    for(let j = 0; j < item.length; j++) {
        item[j].onmouseover = function(){
            item[j].classList.toggle("change");
        }
        item[j].onmouseup = function() {
            item[j].classList.toggle("backToOriginColor");
        }

        item[j].onmouseout = function() {
            item[j].classList.toggle("backToOriginColor");
        }

    }

    const card_link = document.querySelectorAll('.card > a');
    for(let n = 0; n < card_link.length; n++) {
        card_link[n].onclick = function() {
            card_link[n].classList.toggle("background_change");
        }
    }

    const footer_link = document.querySelectorAll('.nav_footer_item');
    for(let m = 0; m < footer_link.length; m++) {
        footer_link[m].onclick = function() {
            footer_link[m].classList.toggle("back_hover");
        }
    }

})();