
import baseURL from "./baseURL.js"
let form = document.querySelector("form");
form.addEventListener("submit",(event)=>{       
    event.preventDefault();
    let obj={
        email: form.email.value,
        password: form.password.value
    }
    console.log(obj)
    adminLogInFromDb(obj);
})
async function adminLogInFromDb(obj){
    try {
        let url = baseURL+"/admin/login"
        let res = await fetch(url,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(obj)
        });
        let data = await res.json();
        if(data.msg){
            alert(data.msg);
            window.location.href="/client/public/pages/admin.html";
        }else{
            alert(data.err);
        }

        let adminToken= data.adminToken;
        localStorage.setItem("adminToken",adminToken);
        
    } catch (error) {
        alert(error.message);
    }
};