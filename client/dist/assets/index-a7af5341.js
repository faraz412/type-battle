(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();let p="http://localhost:8080";document.querySelector("#navbar").innerHTML=`
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
`;let h=localStorage.getItem("loggedname"),u=JSON.parse(localStorage.getItem("loggedUser"));console.log(u);h&&(document.querySelector("#nav-wpm span").innerHTML=u.wpm,document.querySelector("#nav-races span").innerHTML=u.races);h?(document.getElementById("loggedname").innerText=h,document.getElementById("nav-acc-btn").classList.add("div-hide"),document.getElementById("nav-login-btn").innerText="LOG OUT"):(document.getElementById("loggedname").innerText="Guest",document.getElementById("nav-acc-btn").classList.remove("div-hide"),document.getElementById("nav-login-btn").innerText="SIGN IN");document.querySelector("#latest");document.querySelector("#my-scores");document.querySelector("#hof");let w=document.getElementById("nav-acc-btn");w.addEventListener("click",d=>{d.preventDefault(),window.location.href="/pages/signup.html"});let y=document.getElementById("nav-login-btn");y.addEventListener("click",d=>{if(d.preventDefault(),y.innerText=="SIGN IN")window.location.href="/pages/login.html";else{let n=localStorage.getItem("token");fetch(p+"/api/user/logout",{headers:{Authorization:`${n}`,"Content-type":"application/json"}}),localStorage.removeItem("loggedname"),localStorage.removeItem("token"),localStorage.removeItem("loggedUser"),alert("Log out Succesfull"),window.location.href="index.html"}});let I=document.querySelector(".nav-logo");I.addEventListener("click",d=>{d.preventDefault(),window.location.href="../index.html"});function E(){return io("http://localhost:8080/",{transports:["websocket"]})}let S=document.getElementById("app"),l=E();function k(){return`
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
  `}function B(d,n,r,a){return`
    <tr class="race-row">
        <td class="progressBarCont">
            <div class="progressBar">
                <div id="avatar${a}" class="avatar avatar-self">
                    <div class="nameContainer">
                        <div class="client-name">${d}</div>
                        <span class="client-label">${n}</span>
                    </div>
                    <div class="avatarContainer">
                        <img width="100%" src=${r} alt="avatar">
                    </div>
                </div>                            
            </div>
        </td>
        <td class="rankPanelCont">
            <div class="rankPanel">
                <div id="rank${a}" class="ranks">&nbsp;</div>
                <div id=${a} class="rankWpm rankWpm-self">0 wpm</div>
            </div>
        </td>
    </tr>
    `}S.innerHTML=`
<div id="race">
${k()}
</div>
`;let s=document.getElementById("race"),m=JSON.parse(localStorage.getItem("loggedUser"))||null,T=document.getElementById("race-global-btn");T.addEventListener("click",d=>{m&&x(m._id),s.innerHTML="",s.innerHTML=`
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
  `;let n,r=Math.floor(Math.random()*90);l.emit("user",{username:`Guest ${r}`,room:"guest"}),l.on("number of users",t=>{document.querySelector("#tbody").innerHTML="",console.log(t);for(let e=0;e<t.length;e++)document.querySelector("#tbody").innerHTML+=B(t[e].username,"you","../images/avatars/basic-brown.svg",e)}),l.on("content",t=>{console.log(t),n=t;let e=document.getElementById("ptag");e.innerText=t}),document.getElementById("ibox").addEventListener("input",t=>{let e=ibox.value;ibox.style.background="white",l.emit("type message",e),l.on("status",([i,c])=>{c==!1&&(ibox.style.background="red");let o=0,b=1;for(let f in i){let v=i[f].wpm;document.getElementById(`${o}`).innerText=v+" wpm";let g=900/n.length*v;if(g<900)document.getElementById(`avatar${o}`).style.paddingLeft=g+"px";else if(g>=900){document.getElementById(`rank${o}`).innerText="rank "+b,document.querySelector("#nav-wpm span").innerHTML=10,m&&A(m._id,v),swal({text:"you got "+b+" position",icon:"success",button:"ok",timer:1e3}).then(function(){window.location.href="../index.html"});break}o++}})}),document.getElementById("back-btn").addEventListener("click",t=>{s.innerHTML="",window.location.href="/index.html"})});let L=document.getElementById("race-practice-btn");L.addEventListener("click",d=>{s.innerHTML="",s.innerHTML=`
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
                                  <div class="client-name">Guest</div>
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
  `;let n;l.emit("user enter in room",{username:"Guest"}),l.on("content",a=>{console.log(a),n=a;let t=document.getElementById("ptag");t.innerText=a}),document.getElementById("ibox").addEventListener("input",a=>{let t=ibox.value,e=t.length,i=0,c=!0;ibox.style.background="white";for(let o=0;o<e;o++)t[o]!=n[o]?(ibox.style.background="red",c=!1):c==!0&&i++;document.querySelector(".rankWpm-self").innerText=i+" wpm"}),document.getElementById("back-btn").addEventListener("click",a=>{s.innerHTML="",window.location.href="/index.html"})});let M=document.getElementById("race-friends-btn");M.addEventListener("click",d=>{window.location.href="../pages/roomNo.html"});async function x(d){try{let n=p+"/api/user/updateRaceCount/"+d,r=await fetch(n),a=await r.json();if(r.status==200){let t=a.user,e=a.user.name;localStorage.setItem("loggedname",e),localStorage.setItem("loggedUser",JSON.stringify(t))}else alert(a.msg)}catch(n){alert(n.message)}}async function A(d,n){try{let r=p+"/api/user/updateWPM?user_id="+d+"&wpm="+n,a=await fetch(r),t=await a.json();if(a.status==200){let e=t.user,i=t.user.name;localStorage.setItem("loggedname",i),localStorage.setItem("loggedUser",JSON.stringify(e))}else alert(t.msg)}catch(r){alert(r.message)}}let H=document.getElementById("create-acc-sec");H.innerHTML=`
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
`;let C=document.getElementById("create-acc-btn");C.addEventListener("click",d=>{window.location.href="./pages/signup.html"});let N=document.getElementById("leaderboard-sec");N.innerHTML+=`
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
