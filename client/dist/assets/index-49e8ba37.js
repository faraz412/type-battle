(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();document.querySelector("#navbar").innerHTML=`
<nav>
        <label class="logo"><img src="/images/logo.png" alt="logo"></label>
        <ul>
          <li><a href="">Pit Stop</a></li>
          <li><a href="">Updates</a></li>
          <li><a href="">Discord</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Merch</a></li>
          <li><a href="">CREATE ACCOUNT</a></li>
          <li><a href="">SIGN IN</a></li>
        </ul>
        <div id="user-wpm-nav">0 WPM</div>
        <div id="user-race-nav">0 RACES</div>
      </nav>
`;document.querySelector("#latest");document.querySelector("#my-scores");document.querySelector("#hof");let l=document.getElementById("app");l.innerHTML=`
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
`;
