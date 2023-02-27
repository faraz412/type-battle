
// import baseURL from "../../pages/scripts/baseURL.js"
import baseURL from "../../scripts/baseURL.js"
// console.log(baseURL);

let login_btn = document.querySelector(".center form");
login_btn.addEventListener("submit", (event) => {
	event.preventDefault();
	let email = document.querySelector("#user").value;
	let password = document.querySelector("#pass").value;
	let obj={
		email,
		password
	}
	// console.log(obj);
	auth(obj)
});


	async function auth(obj){

		console.log(obj);
	try {
		// let res=await fetch("https://pear-z5ta.onrender.com/api/admin/login",{
		let res=await fetch(baseURL+"/api/admin/login",{
			method: "POST",
			headers:{
				"content-type": "application/json"
			},
			body: JSON.stringify(obj)
		})
		if(res.ok){
			swal("", "Welcome Admin!", "success");
			window.location.href = "./dashboard.html";
		}else{
			swal("","Wrong Credentials!","warning");
		}
	} catch (error) {
		swal("",error,"warning");
	}	
}