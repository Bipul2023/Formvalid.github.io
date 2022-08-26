function successValidate(nameBox,nameBoxMsg){
    nameBox.classList.add("form-valid");
    nameBox.classList.remove("form-invalid");
    nameBoxMsg.classList.add("tvalid");
    nameBoxMsg.classList.remove("tinvalid");
    nameBoxMsg.innerText=`Valid ${nameBox.placeholder}`;
};

function wrongValidate(nameBox,nameBoxMsg){
    nameBox.classList.add("form-invalid");
    nameBox.classList.remove("form-valid");
    nameBoxMsg.classList.remove("tvalid");
    nameBoxMsg.classList.add("tinvalid");
    
    nameBoxMsg.innerText=`Invalid ${nameBox.placeholder}`;
};

function checkName(){
    let nameBox=document.querySelector("#name");
    let nameBoxMsg=document.querySelector("#name-help");

    let regularExp=/^[a-zA-Z\-]+$/;

    if(regularExp.test(nameBox.value)){
        successValidate(nameBox,nameBoxMsg);
    }
    else{
        wrongValidate(nameBox,nameBoxMsg);
    }
};

function checkEmail(){
    let nameBox=document.querySelector("#email");
    let nameBoxMsg=document.querySelector("#email-help");

    let regularExp= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regularExp.test(nameBox.value)){
        successValidate(nameBox,nameBoxMsg);
    }
    else{
        wrongValidate(nameBox,nameBoxMsg);
    }
};

function checkPhone(){
    let nameBox=document.querySelector("#number");
    let nameBoxMsg=document.querySelector("#number-help");

    let regularExp= /^[789]\d{9}$/;

    if(regularExp.test(nameBox.value)){
        successValidate(nameBox,nameBoxMsg);
    }
    else{
        wrongValidate(nameBox,nameBoxMsg);
    }
};

function checkPassword(){
    let nameBox=document.querySelector("#password");
    let nameBoxMsg=document.querySelector("#password-help");

    let regularExp= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(regularExp.test(nameBox.value)){
        successValidate(nameBox,nameBoxMsg);
    }
    else{
        wrongValidate(nameBox,nameBoxMsg);
    }
};

function checkConfirmPassword(){
    let nameBox=document.querySelector("#c-password");
    let nameBoxMsg=document.querySelector("#c-password-help");
    let confirmPass=document.querySelector('#password');

    let regularExp= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(regularExp.test(nameBox.value) && nameBox.value==confirmPass.value){
        successValidate(nameBox,nameBoxMsg);
    }
    else{
        wrongValidate(nameBox,nameBoxMsg);
    }
};

let userName=document.querySelector('#name');
userName.addEventListener('keyup',function(){
   checkName();
});

let userEmail=document.querySelector('#email');
userEmail.addEventListener('keyup',function(){
   checkEmail();
});

let userNumber=document.querySelector('#number');
userNumber.addEventListener('keyup',function(){
   checkPhone();
});

let userPassword=document.querySelector('#password');
userPassword.addEventListener('keyup',function(){
   checkPassword();
});

let userConfirmPassword=document.querySelector('#c-password');
userConfirmPassword.addEventListener('keyup',function(){
   checkConfirmPassword();
});