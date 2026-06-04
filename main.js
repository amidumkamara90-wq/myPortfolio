
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');
const error_name = document.getElementById('error_name');
const error_email = document.getElementById('error_email');


navbarToggle.addEventListener('click', () => {

    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  
});


form.addEventListener('submit', (e)=>{
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(name.value==='' || name.value == null){
        e.preventDefault();
        error_name.innerHTML= "Name is required";
}
else{
    error_name.innerHTML= "";

}
    if(!email.value.match(email_check)){
        e.preventDefault();
        error_email.innerHTML= "Please enter a valid email address";
    }
     if(email.value==='' || email.value == null){
        e.preventDefault();
        error_email.innerHTML= "Email is required";
    }

    else{
        error_email.innerHTML= "";
    }

})

