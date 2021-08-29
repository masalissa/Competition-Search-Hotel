var btnFunction = document.getElementById("btnFunction");
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");

var singInobj = {
    email:"xteam@five.com",
    password:"xteam5"
}



btnFunction.addEventListener("click", (e) => {
    e.preventDefault();
  if(inputEmail.value === singInobj.email){
if(inputPassword.value === singInobj.password){
   window.location.href = "index.html"
}
  }

  
})