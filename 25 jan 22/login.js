var form = document.querySelector(".form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", submitForm);

function submitForm(geek){
    geek.preventDefault();
    // validate(username);
    // validate(email);
    // validate(password);
    // validate(confirmPassword);
    checkUserName(username);
}

function validate(element){
    var nameofuser = element.Value;
    if(nameofuser!=="Anil-Pal"){
      var formControl = element.parentElement;
      formControl.className = "form-control failer i";
      // document.querySelector(`.${element.id}`).innerText="Invalid Field"
      formControl.querySelector("small").innerText="Username is Invalide"
    }
}

function checkUserName(element){
  var nameofuser = element.Value;
  if(nameofuser!==""){
    var formControl = element.parentElement;
    formControl.className = "form-control failer i";
    // document.querySelector(`.${element.id}`).innerText="Invalid Field"
    formControl.querySelector("small").innerText="Username cannot be Empty"
  }
}

username.addEventListener("change", (e)=> console.log(e.target.value));
