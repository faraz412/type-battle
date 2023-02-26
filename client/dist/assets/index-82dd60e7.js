(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector("#navbar").innerHTML=`
<nav>
  <div class="nav-logo">
    <img src="/images/logo.png" alt="logo">
  </div>
  <div id="nav-menu">
      <li><a href="">Pit Stop</a></li>
      <li><a href="">Updates</a></li>
      <li><a href="">Discord</a></li>
      <li><a href="/pages/about.html">About</a></li>
      <li><a href="">Merch</a></li>
  </div>
  <div id="nav-user">
    <div id="nav-user-avatar">
      <img src="/images/helmet.png" alt="user-avatar">
    </div>
    <div id="nav-user-details">
      <h4 style="color:white; margin-bottom: 3px;" >Guest</h4>
      <div id="nav-user-auth">
        <button id="nav-acc-btn">CREATE ACCOUNT</button>
        <button id="nav-login-btn">SIGN IN</button>
        <div id="nav-wpm"><span>0</span>&nbsp;WPM</div>
        <div id="nav-races"><span>0</span>&nbsp;Races</div>
      </div>
    </div>
  </div>
</nav>
`;document.querySelector("#latest");document.querySelector("#my-scores");document.querySelector("#hof");io("https://type-battle.onrender.com",{transports:["websocket"]});let m=document.getElementById("nav-acc-btn");m.addEventListener("click",a=>{a.preventDefault(),window.location.href="/pages/signup.html"});let b=document.getElementById("nav-login-btn");b.addEventListener("click",a=>{a.preventDefault(),window.location.href="/pages/login.html"});let h=document.querySelector(".nav-logo");h.addEventListener("click",a=>{a.preventDefault(),window.location.href="./index.html"});function g(){return io("https://type-battle.onrender.com",{transports:["websocket"]})}let f=document.getElementById("app"),o=g();function y(){return`
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
  `}function k(a,d,s,i){return`
    <tr class="race-row">
        <td class="progressBarCont">
            <div class="progressBar">
                <div id="avatar${i}" class="avatar avatar-self">
                    <div class="nameContainer">
                        <div class="client-name">${a}</div>
                        <span class="client-label">${d}</span>
                    </div>
                    <div class="avatarContainer">
                        <img width="100%" src=${s} alt="avatar">
                    </div>
                </div>                            
            </div>
        </td>
        <td class="rankPanelCont">
            <div class="rankPanel">
                <div id="rank${i}">&nbsp;</div>
                <div id=${i} class="rankWpm rankWpm-self">0 wpm</div>
            </div>
        </td>
    </tr>
    `}f.innerHTML=`
<div id="race">
${y()}
</div>
`;let l=document.getElementById("race"),w=document.getElementById("race-global-btn");w.addEventListener("click",a=>{l.innerHTML="",l.innerHTML=`
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
                <p id="ptag">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates labore explicabo nobis pariatur, esse molestiae recusandae debitis distinctio nisi illum nostrum doloribus. Et nesciunt quis, quod error maiores quisquam deleniti!</p>
            </div>
            <div class="input-text">
                <input id="ibox"  />
            </div>
        </div>
        <button id="back-btn">Back to Main Menu</button>
    </div>
  `;let d,s=Math.floor(Math.random()*90);o.emit("user",{username:`Guest ${s}`,room:"guest"}),o.on("number of users",e=>{document.querySelector("#tbody").innerHTML="";for(let t=0;t<e.length;t++)document.querySelector("#tbody").innerHTML+=k(e[t].username,"you","../images/avatars/basic-brown.svg",t)}),o.on("content",e=>{console.log(e),d=e;let t=document.getElementById("ptag");t.innerText=e}),document.getElementById("ibox").addEventListener("input",e=>{let t=ibox.value;ibox.style.background="white",o.emit("type message",t),o.on("status",([n,c])=>{c==!1&&(ibox.style.background="red");let r=0,p=1;for(let u in n){document.getElementById(`${r}`).innerText=n[u].wpm+" wpm";let v=900/d.length*n[u].wpm;console.log(v),v<900?document.getElementById(`avatar${r}`).style.paddingLeft=v+"px":v>=900&&(document.getElementById(`avatar${r}`).style.paddingLeft="900px",document.getElementById(`rank${r}`).innerText=p++),r++}})}),document.getElementById("back-btn").addEventListener("click",e=>{l.innerHTML="",window.location.href="/index.html"})});let T=document.getElementById("race-practice-btn");T.addEventListener("click",a=>{l.innerHTML="",l.innerHTML=`
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
  `;let d;o.emit("user enter in room",{username:"Guest"}),o.on("content",i=>{console.log(i),d=i;let e=document.getElementById("ptag");e.innerText=i}),document.getElementById("ibox").addEventListener("input",i=>{let e=ibox.value,t=e.length,n=0,c=!0;ibox.style.background="white";for(let r=0;r<t;r++)e[r]!=d[r]?(ibox.style.background="red",c=!1):c==!0&&n++;document.querySelector(".rankWpm-self").innerText=n+" wpm"}),document.getElementById("back-btn").addEventListener("click",i=>{l.innerHTML="",window.location.href="/index.html"})});let E=document.getElementById("race-friends-btn");E.addEventListener("click",a=>{window.location.href="../pages/friends.html"});let x=document.getElementById("create-acc-sec");x.innerHTML=`
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
`;let B=document.getElementById("leaderboard-sec");B.innerHTML+=`
<div id="leaderboard">
      <h1>LEADERBOARD</h1>
      <div id="leaderboard-menu">
        <div>
          <h4><i class="fa-solid fa-tv"></i>&nbsp;&nbsp;Latest High Scores</h4>
        </div>
        <div>
          <h4><i class="fa-solid fa-user"></i>&nbsp;&nbsp;My Scores</h4>
        </div>
        <div>
          <h4><i class="fa-solid fa-thumbs-up"></i>&nbsp;&nbsp;Hall of Fame</h4>
        </div>
        <div>
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
                <td>Sample Name</td>
                <td>Sample Speed</td>
                <td>Sample Time</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sample Name</td>
                <td>Sample Speed</td>
                <td>Sample Time</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sample Name</td>
                <td>Sample Speed</td>
                <td>Sample Time</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Sample Name</td>
                <td>Sample Speed</td>
                <td>Sample Time</td>
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
`;let S=document.getElementById("footer-sec");S.innerHTML+=`
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
