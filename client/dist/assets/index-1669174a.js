(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
  <h1>Type Battle</h1>
  </div>
`;document.querySelector("#latest");document.querySelector("#my-scores");document.querySelector("#hof");setupCounter(document.querySelector("#counter"));let s=document.getElementById("app");s.innerHTML=`
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
