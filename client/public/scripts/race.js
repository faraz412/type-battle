import '../style/signup.css'
let app=document.getElementById("app");
// import outputmessage from '../../main';
import connection from '../../main';
let socket=connection();

function mainContent(){
  return `
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
  `
}

function userRaceBar(name, tag, avatar,j){
    return `
    <tr class="race-row">
        <td class="progressBarCont">
            <div class="progressBar">
                <div id="avatar${j}" class="avatar avatar-self">
                    <div class="nameContainer">
                        <div class="client-name">${name}</div>
                        <span class="client-label">${tag}</span>
                    </div>
                    <div class="avatarContainer">
                        <img width="100%" src=${avatar} alt="avatar">
                    </div>
                </div>                            
            </div>
        </td>
        <td class="rankPanelCont">
            <div class="rankPanel">
                <div id="rank${j}" class="ranks">&nbsp;</div>
                <div id=${j} class="rankWpm rankWpm-self">0 wpm</div>
            </div>
        </td>
    </tr>
    `
}

app.innerHTML=`
<div id="race">
${mainContent()}
</div>
`
let racebody=document.getElementById("race");


//------------------RACE GLOBAL------------------------//
let raceGlobalBtn=document.getElementById("race-global-btn");
raceGlobalBtn.addEventListener("click",(e)=>{
  racebody.innerHTML="";
  racebody.innerHTML=`
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
  `

  // --------------SOCKET WORKING------------------------//
  let checkmsg;
    let random=Math.floor(Math.random() * 90);
    let username="Guest "+`${random}`;
  socket.emit("user",{username:"Guest "+`${random}`,"room":"guest"});
  socket.on("number of users",(users)=>{
    document.querySelector("#tbody").innerHTML="";
    console.log(users);
    for(let j=0; j<users.length; j++){
        document.querySelector("#tbody").innerHTML+=userRaceBar(users[j].username, "you", "../images/avatars/basic-brown.svg",j);
    }
  })
  socket.on("content",(msg)=>{
    console.log(msg);
    checkmsg=msg;
      let givenText=document.getElementById("ptag");
      givenText.innerText=msg;
  //   outputmessage(msg);
  //   console.log(msg);
  })
  
  document.getElementById("ibox").addEventListener("input",(e)=>{
    let value=ibox.value;
    ibox.style.background="white";

    socket.emit("type message",value);
    socket.on("status",([raceObj,flag])=>{
        if(flag==false){
            ibox.style.background="red";
        }
        let i=0, k=1;
        for(let x in raceObj){
            document.getElementById(`${i}`).innerText=raceObj[x]["wpm"]+" wpm";
            let padding=((900)/checkmsg.length)*(raceObj[x]["wpm"]);
            console.log(padding);
            if(padding<900) {
                document.getElementById(`avatar${i}`).style.paddingLeft=padding+"px";
            }else if(padding>=900){
                document.getElementById(`rank${i}`).innerText="rank "+k;
                alert("you got "+k+" position");
                k++;
                window.location="../index.html";
                break;
            }
            i++;
        }
        // console.log(raceObj)
    })
  })


  let backBtn=document.getElementById("back-btn");
  backBtn.addEventListener("click",(e)=>{
    racebody.innerHTML="";
    window.location.href="/index.html";
  })
})


//------------------RACE PRACTICE------------------------//
let racepracticeBtn=document.getElementById("race-practice-btn");
racepracticeBtn.addEventListener("click",(e)=>{
  racebody.innerHTML="";
  racebody.innerHTML=`
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
  `

// --------------SOCKET WORKING------------------------//
  let checkmsg;

  socket.emit("user enter in room",{username:"Guest"});
  socket.on("content",(msg)=>{
    console.log(msg);
    checkmsg=msg;
      let givenText=document.getElementById("ptag");
      givenText.innerText=msg;
  //   outputmessage(msg);`
  //   console.log(msg);
  })
  
  document.getElementById("ibox").addEventListener("input",(e)=>{
    let value=ibox.value;
    let length=value.length;
    let wpm=0;
    let flag=true;
    ibox.style.background="white";

    for(let i=0; i<length; i++){
        if(value[i]!=checkmsg[i]){
            ibox.style.background="red";
            flag=false;
        }else{
            if(flag==true){
            wpm++;
            }
        }
    }

    document.querySelector(".rankWpm-self").innerText=wpm+" wpm";

  })



  let backBtn=document.getElementById("back-btn");
  backBtn.addEventListener("click",(e)=>{
    racebody.innerHTML="";
    window.location.href="/index.html";
  })
})



//------------------RACE Friends------------------------//
let racefriendsBtn=document.getElementById("race-friends-btn");
racefriendsBtn.addEventListener("click",(e)=>{
    window.location.href="../pages/roomNo.html";
})

// let socket = io("http://localhost:8080",{transports:["websocket"]});
//friend join the room
// socket.emit("user",{username,room});

// //chat message
// socket.on("message",(msg)=>{
// console.log(msg);
// })

// //broadcast
// socket.on("content",(msg)=>{
// content=msg;
// });



// console.log(outputmessage())
