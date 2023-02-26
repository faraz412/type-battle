// import '../style/signup.css'
let friendsRace=document.getElementById("friends-sec");

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
</div>
</div>
  `
  let racebody=document.getElementById("race");
  let backBtn=document.getElementById("back-btn");
  backBtn.addEventListener("click",(e)=>{
    racebody.innerHTML="";
    window.location.href="/index.html";
  })