function validateForm() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");


    if (name.value == "") {
      alert("name must be filled out");
      name.style.border = "solid 3px red";
      return false;}

    else{
        document.getElementById("name").style.border="";
     } 



  if (email.value == "") {
      alert("email must be filled out");
      email.style.border = "3px solid red";
      return false;
  }
    
  else{  document.getElementById("email").style.border="";

  }
   

   if (phone.value == "") {
      alert("phone number must be filled out");
      phone.style.border = "3px solid red";
      return false;
  } 

    else{
        document.getElementById("phone").style.border="";
    }

    if(name.value != "" && email.value != "" && phone.value != ""){
      alert("Thank you for filling the form correctly");
    }

}
