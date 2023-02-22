import './style.css'


document.querySelector('#app').innerHTML = `
  <div>
  <h1>Type Battle</h1>
  </div>
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

setupCounter(document.querySelector('#counter'))
