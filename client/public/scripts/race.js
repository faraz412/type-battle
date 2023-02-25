import '../style/signup.css'
let app=document.getElementById("app");
// import outputmessage from '../../main';
// import connection from '../../main';

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
  `
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

//--------------SOCKET WORKING------------------------//
//   let socket=connection();
//   socket.on("content",(msg)=>{
//       console.log(msg,msg.length);
//       let givenText=document.getElementById("ptag");
//   givenText.innerText=msg
//   //   outputmessage(msg);
//   //   console.log(msg);
//   })
  
//   document.getElementById("ibox").addEventListener("input",(e)=>{
//     console.log(ibox.value);
//   })



  let backBtn=document.getElementById("back-btn");
  backBtn.addEventListener("click",(e)=>{
    racebody.innerHTML="";
    window.location.href="/index.html";
  })
})



//------------------RACE Friends------------------------//
let racefriendsBtn=document.getElementById("race-friends-btn");
racefriendsBtn.addEventListener("click",(e)=>{
    window.location.href="../pages/friends.html";
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
