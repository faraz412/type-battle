(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();let b="https://type-battle.onrender.com";document.querySelector("#navbar").innerHTML=`
<nav>
  <div class="nav-logo">
    <img src="/images/logo.png" alt="logo">
  </div>
  <div id="nav-menu">
      <li><a href="">Pit Stop</a></li>
      <li><a href="">Updates</a></li>
      <li><a href="">Discord</a></li>
      <li><a href="/public/about.html">About</a></li>
      <li><a href="">Merch</a></li>
  </div>
  <div id="nav-user">
    <div id="nav-user-avatar">
      <img src="/images/helmet.png" alt="user-avatar">
    </div>
    <div id="nav-user-details">
      <h4 id="loggedname" style="color:white; margin-bottom: 3px;" >Guest</h4>
      <div id="nav-user-auth">
        <button id="nav-acc-btn">CREATE ACCOUNT</button>
        <button id="nav-login-btn">SIGN IN</button>
        <div id="nav-wpm"><span>0</span>&nbsp;WPM</div>
        <div id="nav-races"><span>0</span>&nbsp;Races</div>
      </div>
    </div>
  </div>
</nav>
`;let h=localStorage.getItem("loggedname"),p=JSON.parse(localStorage.getItem("loggedUser"));console.log(p);h&&(document.querySelector("#nav-wpm span").innerHTML=p.wpm,document.querySelector("#nav-races span").innerHTML=p.races);h?(document.getElementById("loggedname").innerText=h,document.getElementById("nav-acc-btn").classList.add("div-hide"),document.getElementById("nav-login-btn").innerText="LOG OUT"):(document.getElementById("loggedname").innerText="Guest",document.getElementById("nav-acc-btn").classList.remove("div-hide"),document.getElementById("nav-login-btn").innerText="SIGN IN");document.querySelector("#latest");document.querySelector("#my-scores");document.querySelector("#hof");let S=document.getElementById("nav-acc-btn");S.addEventListener("click",d=>{d.preventDefault(),window.location.href="/pages/signup.html"});let y=document.getElementById("nav-login-btn");y.addEventListener("click",d=>{if(d.preventDefault(),y.innerText=="SIGN IN")window.location.href="/pages/login.html";else{let a=localStorage.getItem("token");fetch(b+"/api/user/logout",{headers:{Authorization:`${a}`,"Content-type":"application/json"}}),localStorage.removeItem("loggedname"),localStorage.removeItem("token"),localStorage.removeItem("loggedUser"),alert("Log out Succesfull"),window.location.href="index.html"}});let I=document.querySelector(".nav-logo");I.addEventListener("click",d=>{d.preventDefault(),window.location.href="../index.html"});function E(){return io("https://type-battle.onrender.com",{transports:["websocket"]})}let k=document.getElementById("app"),s=E(),f=localStorage.getItem("loggedname");function B(){return`
  <div id="race-global">
        <div id="race-global-body">
          <div id="race-logo">
            <img alt="logo" src="/images/flash - Edited (1).png" />
          </div>
          <div id="race-global-text">
            <h2>Type Battle - The Global Typing Competition</h2>
            <p>Increase your typing speed while racing against others!</p>
          </div>
        </div>
        <button id="race-global-btn">Enter a Typing Race</button>
      </div>

      <div id="race-pvt">
        <div id="race-practice">
          <div id="race-practice-text">
              <h3>Typing Test</h3>
              <p>Improve your typing skills on your own</p>
          </div>
          <button id="race-practice-btn">Practice Yourself</button>
        </div>

        <div id="race-friends">
          <div id="race-friends-text">
            <h3>Race your friends</h3>
            <p>Create your own racetrack and play with friends</p>
        </div>
        <button id="race-friends-btn">Create Racetrack</button>
        </div>

      </div>
  `}function T(d,a,r,n){return`
    <tr class="race-row">
        <td class="progressBarCont">
            <div class="progressBar">
                <div id="avatar${n}" class="avatar avatar-self">
                    <div class="nameContainer">
                        <div class="client-name">${d}</div>
                        <span class="client-label">${a}</span>
                    </div>
                    <div class="avatarContainer">
                        <img width="100%" src=${r} alt="avatar">
                    </div>
                </div>                            
            </div>
        </td>
        <td class="rankPanelCont">
            <div class="rankPanel">
                <div id="rank${n}" class="ranks">&nbsp;</div>
                <div id=${n} class="rankWpm rankWpm-self">0 wpm</div>
            </div>
        </td>
    </tr>
    `}k.innerHTML=`
<div id="race">
${B()}
</div>
`;let c=document.getElementById("race"),g=JSON.parse(localStorage.getItem("loggedUser"))||null,L=document.getElementById("race-global-btn");L.addEventListener("click",d=>{g&&A(g._id),c.innerHTML="",c.innerHTML=`
  <div class="race-cont">
        <div class="race-status">The race is on. Type the text below:</div>
        <div class="race-body">
            <table>
                <tbody id="tbody">
                </tbody>
            </table>
        </div>
        <div class="race-text-cont">
            <div class="given-text">
                <p id="ptag"></p>
            </div>
            <div class="input-text">
                <input id="ibox"  />
            </div>
        </div>
        <button id="back-btn">Back to Main Menu</button>
    </div>
  `;let a,r=Math.floor(Math.random()*90);s.emit("user",{username:`Guest ${r}`,room:"guest"}),s.on("number of users",t=>{document.querySelector("#tbody").innerHTML="",console.log(t);for(let e=0;e<t.length;e++)document.querySelector("#tbody").innerHTML+=T(t[e].username,"you","../images/avatars/basic-brown.svg",e)}),s.on("content",t=>{console.log(t),a=t;let e=document.getElementById("ptag");e.innerText=t}),document.getElementById("ibox").addEventListener("input",t=>{let e=ibox.value;ibox.style.background="white",s.emit("type message",e),s.on("status",([i,m])=>{m==!1&&(ibox.style.background="red");let o=0,l=1;for(let w in i){let v=i[w].wpm;document.getElementById(`${o}`).innerText=v+" wpm";let u=900/a.length*v;if(u<900)document.getElementById(`avatar${o}`).style.paddingLeft=u+"px";else if(u>=900){document.getElementById(`rank${o}`).innerText="rank "+l,document.querySelector("#nav-wpm span").innerHTML=10,g&&H(g._id,v),swal({text:"you got "+l+" position",icon:"success",button:"ok",timer:1e3}).then(function(){window.location.href="../index.html"});break}o++}})}),document.getElementById("back-btn").addEventListener("click",t=>{c.innerHTML="",window.location.href="/index.html"})});let M=document.getElementById("race-practice-btn");M.addEventListener("click",d=>{c.innerHTML="",c.innerHTML=`
  <div class="race-cont">
  <div class="race-status">The race is on. Type the text below:</div>
  <div class="race-body">
      <table>
          <tbody>
              <tr class="race-row">
                  <td class="progressBarCont">
                      <div class="progressBar">
                          <div class="avatar avatar-self">
                              <div class="nameContainer">
                                  <div class="client-name">${f||"Guest"}</div>
                                  <span class="client-label">(you)</span>
                              </div>
                              <div class="avatarContainer">
                                  <img width="100%" src="../images/avatars/basic-blue.svg" alt="avatar">
                              </div>
                          </div>                            
                      </div>
                  </td>
                  <td class="rankPanelCont">
                      <div class="rankPanel">
                          <div class="rank">&nbsp;</div>
                          <div class="rankWpm rankWpm-self">0 wpm</div>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
  <div class="race-text-cont">
      <div class="given-text">
          <p id="ptag"></p>
      </div>
      <div class="input-text">
          <input id="ibox"  />
      </div>
  </div>
  <button id="back-btn">Back to Main Menu</button>
</div>
  `;let a;s.emit("user enter in room",{username:"Practice"}),s.on("content",n=>{console.log(n),a=n;let t=document.getElementById("ptag");t.innerText=n}),document.getElementById("ibox").addEventListener("input",n=>{let t=ibox.value,e=t.length,i=0,m=!0;ibox.style.background="white";for(let l=0;l<e;l++)t[l]!=a[l]?(ibox.style.background="red",m=!1):m==!0&&i++;document.querySelector(".rankWpm-self").innerText=i+" wpm";let o=900/a.length*i;o<900?document.querySelector(".avatar").style.paddingLeft=o+"px":o>=900&&(document.querySelector("#nav-wpm span").innerHTML=10)}),document.getElementById("back-btn").addEventListener("click",n=>{c.innerHTML="",window.location.href="/index.html"})});let x=document.getElementById("race-friends-btn");x.addEventListener("click",d=>{window.location.href="../pages/roomNo.html"});async function A(d){try{let a=b+"/api/user/updateRaceCount/"+d,r=await fetch(a),n=await r.json();if(r.status==200){let t=n.user,e=n.user.name;localStorage.setItem("loggedname",e),localStorage.setItem("loggedUser",JSON.stringify(t))}else alert(n.msg)}catch(a){alert(a.message)}}async function H(d,a){try{let r=b+"/api/user/updateWPM?user_id="+d+"&wpm="+a,n=await fetch(r),t=await n.json();if(n.status==200){let e=t.user,i=t.user.name;localStorage.setItem("loggedname",i),localStorage.setItem("loggedUser",JSON.stringify(e))}else alert(t.msg)}catch(r){alert(r.message)}}let C=document.getElementById("create-acc-sec");C.innerHTML=`
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
`;let N=document.getElementById("create-acc-btn");N.addEventListener("click",d=>{window.location.href="./pages/signup.html"});let P=document.getElementById("leaderboard-sec");P.innerHTML+=`
<div id="leaderboard">
      <h1>LEADERBOARD</h1>
      <div id="leaderboard-menu">
        <div id="latest-scores">
          <h4><i class="fa-solid fa-tv"></i>&nbsp;&nbsp;Latest High Scores</h4>
        </div>
        <div id="my-scores" class="div-hide">
          <h4><i class="fa-solid fa-user"></i>&nbsp;&nbsp;My Scores</h4>
        </div>
        <div id="hof-scores">
          <h4><i class="fa-solid fa-thumbs-up"></i>&nbsp;&nbsp;Hall of Fame</h4>
        </div>
        <div id="comp-scores" class="div-hide">
          <h4><i class="fa-solid fa-users-line"></i>&nbsp;&nbsp;Competitions</h4>
        </div>
      </div>
      <div id="leaderboard-body">
        <div id="latest">
        <table>
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Speed</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Shanuka</td>
            <td>120 wpm</td>
            <td>1 Month ago</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Abhay</td>
            <td>114 wpm</td>
            <td>1 Month ago</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sarvesh</td>
            <td>109 wpm</td>
            <td>1 Month ago</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Abhinav</td>
            <td>106 wpm</td>
            <td>1 Month ago</td>
          </tr>
          <tr>
          <td>5</td>
          <td>Faraz</td>
          <td>103 wpm</td>
          <td>1 Month ago</td>
          </tr>
        <!-- Append -->
        </tbody>
      </table>        
        </div>
        <div id="my-scores" class="div-hide">
          <table>
            <thead>
              <tr>
                <th>Sl.no.</th>
                <th>Speed</th>
                <th>Accuracy</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
            <!-- Append -->
            </tbody>
          </table>
        </div>
        <div id="hof" class="div-hide">
          <table>
            <thead>
              <tr>
                <th>Sl.no.</th>
                <th>Name</th>
                <th>Avg.Speed</th>
                <th>Races</th>
              </tr>
            </thead>
            <tbody>
            <!-- Append -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
`;document.getElementById("latest-scores").addEventListener("click",d=>{document.getElementById("latest").innerHTML="",document.getElementById("latest").innerHTML=`
  <table>
            <thead>
              <tr>
                <th>Sl.no.</th>
                <th>Name</th>
                <th>Speed</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Shanuka</td>
                <td>120 wpm</td>
                <td>1 Month ago</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Abhay</td>
                <td>114 wpm</td>
                <td>1 Month ago</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sarvesh</td>
                <td>109 wpm</td>
                <td>1 Month ago</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Abhinav</td>
                <td>106 wpm</td>
                <td>1 Month ago</td>
              </tr>
              <tr>
              <td>5</td>
              <td>Faraz</td>
              <td>103 wpm</td>
              <td>1 Month ago</td>
              </tr>
            <!-- Append -->
            </tbody>
          </table>
  `});document.getElementById("hof-scores").addEventListener("click",d=>{document.getElementById("latest").innerHTML="",document.getElementById("latest").innerHTML=`
  <table>
            <thead>
              <tr>
                <th>Sl.no.</th>
                <th>Name</th>
                <th>Speed</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sarvesh</td>
                <td>145 wpm</td>
                <td>26-02-22</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Abhay</td>
                <td>130 wpm</td>
                <td>25-02-22</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Shanuka</td>
                <td>125 wpm</td>
                <td>26-02-22</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Abhinav</td>
                <td>121 wpm</td>
                <td>25-02-22</td>
              </tr>
              <tr>
              <td>5</td>
              <td>Faraz</td>
              <td>119 wpm</td>
              <td>26-02-22</td>
              </tr>
            <!-- Append -->
            </tbody>
          </table>
  `});document.getElementById("latest-scores").addEventListener("click",d=>{document.getElementById("latest").innerHTML="",document.getElementById("latest").innerHTML=`
  <table>
            <thead>
              <tr>
                <th>Sl.no.</th>
                <th>Name</th>
                <th>Speed</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Shanuka</td>
                <td>120 wpm</td>
                <td>1 day ago</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Abhay</td>
                <td>114 wpm</td>
                <td>1 day ago</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sarvesh</td>
                <td>109 wpm</td>
                <td>1 day ago</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Abhinav</td>
                <td>106 wpm</td>
                <td>1 day ago</td>
              </tr>
              <tr>
              <td>5</td>
              <td>Faraz</td>
              <td>103 wpm</td>
              <td>1 day ago</td>
              </tr>
            <!-- Append -->
            </tbody>
          </table>
  `});document.getElementById("latest-scores").addEventListener("click",d=>{document.getElementById("latest").innerHTML="",document.getElementById("latest").innerHTML=`
  <table>
            <thead>
              <tr>
                <th>Sl.no.</th>
                <th>Name</th>
                <th>Speed</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Shanuka</td>
                <td>120 wpm</td>
                <td>1 day ago</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Abhay</td>
                <td>114 wpm</td>
                <td>1 day ago</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sarvesh</td>
                <td>109 wpm</td>
                <td>1 day ago</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Abhinav</td>
                <td>106 wpm</td>
                <td>1 day ago</td>
              </tr>
              <tr>
              <td>5</td>
              <td>Faraz</td>
              <td>103 wpm</td>
              <td>1 day ago</td>
              </tr>
            <!-- Append -->
            </tbody>
          </table>
  `});let U=document.getElementById("footer-sec");U.innerHTML+=`
<div id="footer">
    <div id="footer-body">
        <div id="footer-right">
            <a href="">Home</a>|
            <a href="">Terms of Service</a>|
            <a href="">Privacy Policy</a>|
            <a href="">Contact</a>|
            <a href="">Contribute</a>|
            <a href="">FAQ</a>
        </div>
        <div id="footer-left">
            <img src="../images/cars-footer.png" Dark Mode/>
        </div>
    </div>
</div>
`;
