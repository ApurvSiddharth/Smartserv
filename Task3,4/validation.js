
function validateForm() {
    var email= /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    var password= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,32}$/
    let user = document.forms["Form1"]["email"].value;
    let pass = document.forms["Form1"]["password"].value;
    if (user == "") {
      alert("Username must be filled out");
      return false;
    }
    else if(!email.test(user)){
        alert("Email format incorrect");
        return false;
    }
    else if (pass == "") {
        alert("Password must be filled out");
        return false;
      }
    else if(!password.test(pass)){
        alert("Password must contain:\nAt least one digit\nAt least one uppercase character\nAt least one lowercase character\nAtleast 8 characters long\nOnly '@' as special character allowed");
        return false;
    }
    else if(pass!="SmartServTest@123"){
        alert("Password Incorrect");
        return false;
    }

    else{
        return true;
    }
  }