import '../style/signup.css'
let lb=document.getElementById("leaderboard-sec");

lb.innerHTML+=`
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
`

document.getElementById("latest-scores").addEventListener("click",(e)=>{
  document.getElementById("latest").innerHTML="";
  document.getElementById("latest").innerHTML=`
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
  `
})


document.getElementById("hof-scores").addEventListener("click",(e)=>{
  document.getElementById("latest").innerHTML="";
  document.getElementById("latest").innerHTML=`
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
  `
})


document.getElementById("latest-scores").addEventListener("click",(e)=>{
  document.getElementById("latest").innerHTML="";
  document.getElementById("latest").innerHTML=`
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
  `
})

document.getElementById("latest-scores").addEventListener("click",(e)=>{
  document.getElementById("latest").innerHTML="";
  document.getElementById("latest").innerHTML=`
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
  `
})