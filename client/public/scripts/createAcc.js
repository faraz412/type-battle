import '../style/signup.css'
let createacc=document.getElementById("create-acc-sec");

createacc.innerHTML=`
    <div id="create-acc">
      <div id="create-acc-img">
        <img src="/images/cars-sherrif.png" alt="sherriff">
      </div>
      <div id="create-acc-text">
        <h2>Record your races with a Type Battle Account!</h2>
        <p>Save your race history and scores. It's free, why not?</p>
      </div>
      <button id="create-acc-btn">Create Your Account</button>
    </div>
`
let caBtn=document.getElementById("create-acc-btn");
caBtn.addEventListener("click",(e)=>{
  window.location.href="./pages/signup.html";
})