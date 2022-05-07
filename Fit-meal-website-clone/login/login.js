document.querySelector("#form").addEventListener("submit", loginfunction);
var regdUsers = JSON.parse(localStorage.getItem("userdatabase")) || []
//  we peekup the dta from localStorage

//  console.log(regdUsers);
function loginfunction(event){
   event.preventDefault();
   var user = document.querySelector("#username").value;
   var pass = document.querySelector("#password").value;
   
   alert("Welcome to Fit-meal");
   window.location.href = "/Fit-meal-website-clone/Home Page/index.html";
   for(var i = 0; i <= regdUsers.length ;i++) {
    // console.log(regdUsers[i].username,regdUsers[i].password);
   if(regdUsers[i].username == user && regdUsers[i].password == pass){
      
   } 
}
}

