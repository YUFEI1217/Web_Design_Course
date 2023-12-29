"use strict";
(function(){

    const registerFormEl = document.querySelector('.register-form');
    const usernameEl = document.querySelector('.register-form__input--username');
    const usernameErrorEl = document.querySelector('.register-form__error--username');
    const InputEmail = document.querySelector('.register-form__input--email');
    const InputEmailError = document.querySelector('.register-form__error--email');
    const ConfirmEmail = document.querySelector('.register-form__input--confirm-email');
    const ConfirmEmailError = document.querySelector('.register-form__error--confirm');
    const SelectItem = document.querySelector('.register-form__select');
    const SelectError = document.querySelector('.register-form__error--tier');
    const CheckboxItem = document.querySelector('.register-form__checkbox');
    const CheckboxError = document.querySelector('.register-form__error--checkbox');

    registerFormEl.addEventListener('submit', (e) => {
        let isInvalid = false;
        
        const usernamevalue = usernameEl.value;
        if(!usernamevalue) {
            isInvalid = true;
        }

        if(usernamevalue !== '') {
            usernameErrorEl.innerText = "";
        }

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

        if(emailvalue !== ConfirmEmailvalue) {
            isInvalid = true;
            ConfirmEmailError.innerText = "Your confirm email is not matched";
            // console.log("Not matched");
        } 

        
        if(emailvalue === ConfirmEmailvalue) {
            ConfirmEmailError.innerText = "";
            // console.log("Matched");
        }

        const selectValue = SelectItem.value;
        if(selectValue === '') {
            isInvalid = true;
            SelectError.innerText = "Please select the tier";
        }

        if(selectValue !== '') {
            SelectError.innerText = "";
        }

        if(CheckboxItem.checked === false){
            isInvalid = true;
            CheckboxError.innerText = "*Please check the want spam";
            // console.log("Don't check the checkbox");
        }

        if(CheckboxItem.checked === true){
            CheckboxError.innerText = "";
        }

        if(!emailvalue && !ConfirmEmail && emailvalue === ConfirmEmailvalue && !usernamevalue && !selectValue && CheckboxItem.checked === true){
            isInvalid = false;
        }

        if(isInvalid){
            e.preventDefault();
            console.log("Some value is missing or the E-mail address is not matched");
        }
    });

    usernameEl.addEventListener('input', (e) => {
        const username = e.target.value;
        if(!username){
            usernameErrorEl.innerText = "Username is required";
        }
        else{
            usernameErrorEl.innerText = "";
        }
    });

})();