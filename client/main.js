import './style.css'


document.querySelector('#navbar').innerHTML = `
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
`
const latest_tbody=document.querySelector("#latest");
const myscores_tbody=document.querySelector("#my-scores");
const hof_tbody=document.querySelector("#hof");

function displayLatest(arr) {
  latest_tbody.innerHTML="";
  arr.forEach(function(elem,index){
      let row=document.createElement("tr");
      let td1=document.createElement("td");
      let no=1;
      td1.innerText=no++;
      let td2=document.createElement("td");
      td2.innerText=elem.name;
      let td3=document.createElement("td");
      td3.innerText=elem.speed;
      let td4=document.createElement("td");
      td4.innerText=elem.time;
      row.append(td1,td2,td3,td4);
      latest_tbody.append(row);
  });
}

function displayMyscores(arr) {
  myscores_tbody.innerHTML="";
  arr.forEach(function(elem,index){
      let row=document.createElement("tr");
      let td1=document.createElement("td");
      let no=1;
      td1.innerText=no++;
      let td2=document.createElement("td");
      td2.innerText=elem.speed;
      let td3=document.createElement("td");
      td3.innerText=elem.accuracy;
      let td4=document.createElement("td");
      td4.innerText=elem.date;
      row.append(td1,td2,td3,td4);
      myscores_tbody.append(row);
  });
}

function displayhof(arr) {
  hof_tbody.innerHTML="";
  arr.forEach(function(elem,index){
      let row=document.createElement("tr");
      let td1=document.createElement("td");
      let no=1;
      td1.innerText=no++;
      let td2=document.createElement("td");
      td2.innerText=elem.name;
      let td3=document.createElement("td");
      td3.innerText=elem.avgspeed;
      let td4=document.createElement("td");
      td4.innerText=elem.races;
      row.append(td1,td2,td3,td4);
      hof_tbody.append(row);
  });
}


