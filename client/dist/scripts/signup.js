
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
            window.location.assign("/client/public/pages/login.html"); 
        }else{
            alert(data.msg);
        }
    } catch (error) {
        alert("Something went wrong!");
        console.log(error);
    }
};


// let token = localStorage.getItem("token");
// let adminToken = localStorage.getItem("adminToken");

// let dropdown_content= document.getElementById("nav-dropdown-content");
// if(token || adminToken){   
//     dropdown_content.innerHTML= `
//     <button id="nav-mid-dropdown-btn1" onclick="location.href='/frontend/update_user.html'">Account Details</button>
//     <button id="nav-mid-dropdown-btn2" onclick="location.href='/frontend/order_history.html'">Order History</button>
//     <button id="nav-mid-dropdown-btn3">Log out</button>
//     `;
//     let logout_btn = document.getElementById("nav-mid-dropdown-btn3");
    
//     logout_btn.addEventListener("click",()=>{
//         localStorage.clear();
//         dropdown_content.innerHTML= `
//         <button id="nav-mid-dropdown-btn1" onclick="location.href='/frontend/login.html'">Sign In</button>
//         <button id="nav-mid-dropdown-btn2" onclick="location.href='/frontend/signup.html'">Create Account</button>
//         `;
//         window.location.assign("/index.html");
//     })
// }

// getUserName();
// async function getUserName(){
//     try {
//         let url = baseURL+"/username"
//         let res = await fetch(url,{
//             headers: {
//                 "token":token
//             }
//         });
//         let data = await res.json();
//         if(data.user){
//             localStorage.setItem("loggedUser",data.user)
//         }else{
//             localStorage.setItem("loggedUser","Guest")
//         }
        
//     } catch (error) {
//         alert(error.message)
//     }
// }
