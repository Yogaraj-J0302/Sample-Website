function foo(){
    let details={};
    let name=document.getElementById("name").value
    let user=document.getElementById("user").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let API="https://6365e522046eddf1baf48ff2.mockapi.io/website"
    details.Name=name;
    details.User=user;
    details.Email=email;
    details.Password=password;

fetch(`${API}`,{method:"POST",body:JSON.stringify(details),
headers:{
    "Content-Type":"application/json"
}})
}

