(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.querySelector("#navbar").innerHTML=`
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
`;document.querySelector("#latest");document.querySelector("#my-scores");document.querySelector("#hof");io("https://type-battle.onrender.com",{transports:["websocket"]});let o=document.getElementById("nav-acc-btn");o.addEventListener("click",i=>{i.preventDefault(),window.location.href="/pages/signup.html"});let l=document.getElementById("nav-login-btn");l.addEventListener("click",i=>{i.preventDefault(),window.location.href="/pages/login.html"});let c=document.querySelector(".nav-logo");c.addEventListener("click",i=>{i.preventDefault(),window.location.href="./index.html"});let s=document.getElementById("app");s.innerHTML=`
<div id="race">

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
    </div>

`;document.getElementById("race-global-btn").addEventListener("click",()=>{console.log("hi")});let p=document.getElementById("app");p.innerHTML+=`
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
`;let v=document.getElementById("app");v.innerHTML+=`
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
`;let h=document.getElementById("app");h.innerHTML+=`
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
            <button id="dark-mode-btn">Change Theme - Dark Mode</button>
        </div>
    </div>
</div>
`;
