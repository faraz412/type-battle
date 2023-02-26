// import '../style/signup.css'
let friendsRace=document.getElementById("friends-sec");
import connection from "../../main";
let socket=connection();

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
            <div id="rank${j}">&nbsp;</div>
            <div id=${j} class="rankWpm rankWpm-self">0 wpm</div>
            </div>
        </td>
    </tr>
    `
}



//------------------RACE FRIENDS------------------------//
friendsRace.innerHTML=`
<div id="race">
  <div class="chat-container">
        <header class="chat-header">
            <h1> Chat</h1>
            <!-- <a id="leave-btn">Go out</a> -->
        </header>
        <main class="chat-main">
            <div class="chat-sidebar">
            <h3> Room Name:</h3>
            <h2 id="room-name"></h2>
            <h3> Users</h3>
            <ul id="users"></ul>
            </div>
            <div class="chat-messages"></div>
        </main>
        <div class="chat-form-container">
            <form id="chat-form">
            <input
                id="msg"
                type="text"
                placeholder="Enter Message"
                required
                autocomplete="off"
            />
            <button class="btn"> Send</button>
            </form>
        </div>
    </div>
    
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
</div>
</div>
  `
  let racebody=document.getElementById("race");
  let backBtn=document.getElementById("back-btn");

  // --------------SOCKET WORKING------------------------//
  let checkmsg;
    let random=Math.floor(Math.random() * 90);
    let username="Guest "+`${random}`;
  socket.emit("user",{username:"Guest "+`${random}`,"room":"guest"});
  socket.on("number of users",(users)=>{
    document.querySelector("#tbody").innerHTML="";
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
                document.getElementById(`avatar${i}`).style.paddingLeft="900px";
                document.getElementById(`rank${i}`).innerText=k++;
            }
            i++;
        // console.log(raceObj)
        }
    })
  })


  backBtn.addEventListener("click",(e)=>{
    racebody.innerHTML="";
    window.location.href="/index.html";
  })

//   <tr class="race-row">
//                         <td class="progressBarCont">
//                             <div class="progressBar">
//                                 <div class="avatar avatar-self">
//                                     <div class="nameContainer">
//                                         <div class="client-name">Guest</div>
//                                         <span class="client-label">(you)</span>
//                                     </div>
//                                     <div class="avatarContainer">
//                                         <img width="100%" src="../images/avatars/basic-blue.svg" alt="avatar">
//                                     </div>
//                                 </div>                            
//                             </div>
//                         </td>
//                         <td class="rankPanelCont">
//                             <div class="rankPanel">
//                                 <div class="rank">&nbsp;</div>
//                                 <div class="rankWpm rankWpm-self">0 wpm</div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr class="race-row">
//                         <td class="progressBarCont">
//                             <div class="progressBar">
//                                 <div class="avatar avatar-self">
//                                     <div class="nameContainer">
//                                         <div class="client-name">Guest</div>
//                                         <span class="client-label">(you)</span>
//                                     </div>
//                                     <div class="avatarContainer">
//                                         <img width="100%" src="../images/avatars/basic-blue.svg" alt="avatar">
//                                     </div>
//                                 </div>                            
//                             </div>
//                         </td>
//                         <td class="rankPanelCont">
//                             <div class="rankPanel">
//                                 <div class="rank">&nbsp;</div>
//                                 <div class="rankWpm rankWpm-self">0 wpm</div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr class="race-row">
//                         <td class="progressBarCont">
//                             <div class="progressBar">
//                                 <div class="avatar avatar-self">
//                                     <div class="nameContainer">
//                                         <div class="client-name">Guest</div>
//                                         <span class="client-label">(you)</span>
//                                     </div>
//                                     <div class="avatarContainer">
//                                         <img width="100%" src="../images/avatars/basic-blue.svg" alt="avatar">
//                                     </div>
//                                 </div>                            
//                             </div>
//                         </td>
//                         <td class="rankPanelCont">
//                             <div class="rankPanel">
//                                 <div class="rank">&nbsp;</div>
//                                 <div class="rankWpm rankWpm-self">0 wpm</div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr class="race-row">
//                         <td class="progressBarCont">
//                             <div class="progressBar">
//                                 <div class="avatar avatar-self">
//                                     <div class="nameContainer">
//                                         <div class="client-name">Guest</div>
//                                         <span class="client-label">(you)</span>
//                                     </div>
//                                     <div class="avatarContainer">
//                                         <img width="100%" src="../images/avatars/basic-blue.svg" alt="avatar">
//                                     </div>
//                                 </div>                            
//                             </div>
//                         </td>
//                         <td class="rankPanelCont">
//                             <div class="rankPanel">
//                                 <div class="rank">&nbsp;</div>
//                                 <div class="rankWpm rankWpm-self">0 wpm</div>
//                             </div>
//                         </td>
//                     </tr>