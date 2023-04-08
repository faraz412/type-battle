

import baseURL from "./baseURL.js"


let form = document.querySelector("form");
form.addEventListener("submit",(event)=>{       
    event.preventDefault();
    let obj={
        email: form.email.value,
        password: form.password.value
    }
    console.log(obj)
    loginFromDb(obj);
})

async function loginFromDb(obj){
    try {
        let url = baseURL+"/api/user/login"
        let res = await fetch(url,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(obj)
        });
        let data = await res.json();

        if(res.status==200){
            alert(data.msg);
            console.log(data.token,data.user);
            let token= data.token;
            let loggedUser= data.user;
            let loggedname=data.user.name;
            localStorage.setItem("loggedname",loggedname);
            localStorage.setItem("token",token);
            localStorage.setItem("loggedUser",loggedUser);            
            window.location.assign("https://type-battle.onrender.com/");
            // window.location.assign("http://localhost:5173/");  

        }else if(res.status==409){
            alert(data.msg);
            window.location.assign("../pages/signup.html"); 
        }else{
            alert(data.msg);
        }

    } catch (error) {
        alert(error.message);
    }
};