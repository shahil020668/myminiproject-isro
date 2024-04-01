let form = document.querySelector(".lo2");
let username = document.querySelector(".userid");
let password = document.querySelector(".pass");


const validate = () =>{
    console.log("shahil");
    for(let i = 0 ; i < username.value.length ; i++){
        if(username.value[i] == '#' || username.value[i] == '$' || username.value[i] == '%' || username.value[i] == '&' ){
            alert("special character not allowed");
            return false;
        }
       }

       for(let k = 0 ; k < password.value.length ; k++){
        if(password.value[k] == '#' || password.value[k] == '$' || password.value[k] == '%' || password.value[k] == '&' ){
            alert("special character not allowed");
            return false;
        }
       }
    if(username.value.length < 5 || password.value.length > 5){
       if(username.value.length < 5){
        alert("invalid userid");
       }
       if(password.value.length > 9){
        alert("invalid password");
       }
       return false;
    }
    else{
        return true;
    }
}
// form.addEventListener('submit',validate);

function check () {
    console.log(username.value.length);
}

// username.addEventListener('keyup',check);
// let useridlen = username.value.length;
// let passwordlen = password.value.length;