// import '../style/signup.css'
let friendsRace=document.getElementById("friends-sec");
import connection from "../../main";
let socket=connection();


const urlParams= new URLSearchParams(window.location.search);
const room=urlParams.get("room");

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
  socket.emit("user",{username:"Guest "+`${random}`,"room": room });
  socket.on("number of users",(users)=>{
    document.querySelector("#tbody").innerHTML="";
    for(let j=0; j<users.length; j++){
        if(username==users[j].username){
            document.querySelector("#tbody").innerHTML+=userRaceBar(users[j].username, "you", "../images/avatars/basic-brown.svg",j);
        }else{
            document.querySelector("#tbody").innerHTML+=userRaceBar(users[j].username, "other", "../images/avatars/basic-brown.svg",j);
        }
       
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
        console.log(raceObj);
        let i=0, k=1;
        for(let x in raceObj){
            document.getElementById(`${i}`).innerText=raceObj[x]["wpm"]+" wpm";
            let padding=((900)/checkmsg.length)*(raceObj[x]["wpm"]);
            console.log(padding);
            if(padding<900) {
                document.getElementById(`avatar${i}`).style.paddingLeft=padding+"px";
            }else if(padding>=900){
                // document.getElementById(`avatar${i}`).style.paddingLeft="900px";
                document.getElementById(`rank${i}`).innerText="rank "+k;
                alert("you got "+k+" position");
                k++;
                window.location="../index.html";
                break;
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

//   -------------------CHAT------------------------------//

const chatMessage=document.querySelector(".chat-messages");
const roomName=document.getElementById("room-name");
const userList=document.getElementById("users");
const chatForm=document.getElementById("chat-form");


// socket.emit("user",{username,room});

socket.on("message",(msg)=>{
    //console.log(msg);
    outputMessage(msg);
})

socket.on("number of users",(users)=>{
    console.log(users);
    outputRoomName(users);
    outputRoomUsers(users);
})

chatForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    let msg=e.target.elements.msg.value;
    msg=msg.trim();

    //console.log(msg);
    if(!msg){
        return false;
    }

    socket.emit("msg",msg);

    e.target.elements.msg.value="";
    e.target.elements.msg.focus();
})


function outputMessage(message){
    const div=document.createElement("div");
    div.classList.add("message");

    const p=document.createElement("p");
   p.classList.add("meta");
    p.innerText=message.username+" ";
    p.innerHTML+=`<span>${message.time}</span>`;

    const para=document.createElement("p");
    para.classList.add("text");
    para.innerText=message.text;

    div.append(p,para);
    chatMessage.append(div);
}

function outputRoomName(users){
    roomName.innerText=users[0].room;
}

function outputRoomUsers(users){
    userList.innerHTML="";
    users.forEach((user)=>{
        const li=document.createElement("li");
        li.innerText=user.username;

        userList.append(li);
    })
}

// document.getElementById("leave-btn").addEventListener('click',(e)=>{
//     const leaveRoom=confirm("Are you sure?");

//     if(leaveRoom){
//         window.location.href="./index.html";
//     }
// })

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