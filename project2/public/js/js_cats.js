"use strict";
(function(){

    const cardLink = document.querySelectorAll('.card_link');
    const modalEl = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close_button');
    const registerFormEl = document.querySelector('.register-form');
    const InputEmail = document.querySelector('.register-form__input--email');
    const InputEmailError = document.querySelector('.register-form__error--email');
    const ConfirmEmail = document.querySelector('.register-form__input--confirm-email');
    const ConfirmEmailError = document.querySelector('.register-form__error--confirm');


    for(let i = 0; i < cardLink.length; i++){
        cardLink[i].addEventListener('click', () => { 
            modalEl.showModal();
          });
    }

    closeBtn.addEventListener('click', () =>{
        modalEl.close();
        InputEmailError.innerText = "";
        ConfirmEmailError.innerText = "";
        InputEmail.value = "";
        ConfirmEmail.value = "";
    });


    registerFormEl.addEventListener('submit', (e) => {
        let isInvalid = false;
        
        const emailvalue = InputEmail.value;
        const ConfirmEmailvalue = ConfirmEmail.value;
        if(!emailvalue) {
            isInvalid = true;
            InputEmailError.innerText = "Please input the Email";
            // console.log("You don't input the Email");
        }

        if(emailvalue) {
            InputEmailError.innerText = "";
            // console.log("Email is good");
        }

        if(emailvalue.indexOf("@") === -1 && emailvalue) {
            isInvalid = true;
            InputEmailError.innerText = "The email address must include @";
            console.log("Email not include @");
        }

        if(emailvalue.indexOf("@") !== -1) {
            InputEmailError.innerText = "";
        }

        if(emailvalue !== ConfirmEmailvalue && emailvalue && emailvalue.indexOf("@") !== -1) {
            isInvalid = true;
            ConfirmEmailError.innerText = "Your confirm email is not matched";
            // console.log("Not matched");
        } 

        
        if(emailvalue === ConfirmEmailvalue) {
            ConfirmEmailError.innerText = "";
            // console.log("Matched");
        }

        if(emailvalue.indexOf("@") !== -1 && !emailvalue && !ConfirmEmail && emailvalue === ConfirmEmailvalue){
            isInvalid = false;
        }

        if(isInvalid){
            e.preventDefault();
            console.log("Some value is missing or the E-mail address is not matched");
        }
    });

    const windowWidth = document.body.clientWidth;
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

    
    // if( windowWidth>= 704){
    //     const menu = document.querySelector('.nav_head');
    //     menu.style.visibility === "visible";
    // }

    const footer_link = document.querySelectorAll('.nav_footer_item');
    for(let m = 0; m < footer_link.length; m++) {
        footer_link[m].onclick = function() {
            footer_link[m].classList.toggle("back_hover");
        }
    }



})();