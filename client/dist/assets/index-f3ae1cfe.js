(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector("#navbar").innerHTML=`
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
`;document.querySelector("#latest");document.querySelector("#my-scores");document.querySelector("#hof");io("https://type-battle.onrender.com",{transports:["websocket"]});let c=document.getElementById("nav-acc-btn");c.addEventListener("click",a=>{a.preventDefault(),window.location.href="/pages/signup.html"});let l=document.getElementById("nav-login-btn");l.addEventListener("click",a=>{a.preventDefault(),window.location.href="/pages/login.html"});let o=document.querySelector(".nav-logo");o.addEventListener("click",a=>{a.preventDefault(),window.location.href="./index.html"});let v=document.getElementById("app");function p(){return`
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
  `}v.innerHTML=`
<div id="race">
${p()}
</div>
`;let i=document.getElementById("race"),m=document.getElementById("race-global-btn");m.addEventListener("click",a=>{i.innerHTML="",i.innerHTML=`
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
                <p id="ptag">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates labore explicabo nobis pariatur, esse molestiae recusandae debitis distinctio nisi illum nostrum doloribus. Et nesciunt quis, quod error maiores quisquam deleniti!</p>
            </div>
            <div class="input-text">
                <input id="ibox"  />
            </div>
        </div>
        <button id="back-btn">Back to Main Menu</button>
    </div>
  `,document.getElementById("back-btn").addEventListener("click",s=>{i.innerHTML="",window.location.href="/index.html"})});let u=document.getElementById("race-practice-btn");u.addEventListener("click",a=>{i.innerHTML="",i.innerHTML=`
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
  `,document.getElementById("back-btn").addEventListener("click",s=>{i.innerHTML="",window.location.href="/index.html"})});let b=document.getElementById("race-friends-btn");b.addEventListener("click",a=>{window.location.href="../pages/friends.html"});let h=document.getElementById("create-acc-sec");h.innerHTML=`
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
`;let g=document.getElementById("leaderboard-sec");g.innerHTML+=`
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
`;let f=document.getElementById("footer-sec");f.innerHTML+=`
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
