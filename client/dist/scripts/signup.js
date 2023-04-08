
// import navbar from "./navbar.js"
import baseURL from "./baseURL.js"
// document.getElementById("navbar").innerHTML=navbar();

let user_Obj;
let registration_form = document.getElementById("registration");
let otp_form = document.getElementById("otp_form");
let registration_otp = document.getElementById("registration_otp");
let reg_form = document.querySelector("#registration_form");

registration_otp.style.display="none";

reg_form.addEventListener("submit",(event)=>{       
    event.preventDefault();
    let obj={
        name: `${reg_form.fname.value} ${reg_form.lname.value}`,
        email: reg_form.email.value,
        password: reg_form.password.value
    }
    send_Reg_Req(obj);
})

async function send_Reg_Req(obj){
    console.log(obj)
    try {
        let url = baseURL+"/api/user/register_validate"
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
            // window.location.assign("/client/public/pages/login.html"); 
            user_Obj = {
                opt_db : data.otp,
                name:data.name,
                email:data.email,
                password:data.password
            }            
            registration_form.style.display="none";
            registration_otp.style.display="block"; 
            // console.log(user_Obj)
        }else{
            alert(data.msg);
        }
    } catch (error) {
        alert("Something went wrong!");
        console.log(error);
    }
};

otp_form.addEventListener("submit",(event)=>{       
    event.preventDefault();
    let otp_entered = otp_form.otp.value;
    
    if(otp_entered==user_Obj.opt_db){
        alert("Match");
        user_Reg(user_Obj);
    }else{
        alert("Incorrect Otp");
    }
})

async function user_Reg(user_Obj){
    // console.log(user_Obj)
    try {
        let url = baseURL+"/api/user/register"
        let res = await fetch(url,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(user_Obj)
        });        
        let data = await res.json();
        
        if(res.status==200){
            alert(data.msg);
            window.location.assign("../pages/login.html"); 
        }else{
            alert(data.msg);
        }
    } catch (error) {
        alert("Something went wrong!");
        console.log(error);
    }
};
