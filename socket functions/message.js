const raceObj={};

const fetch = require('node-fetch');
let content;
let res=fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(body => {
        content=body.content;
        return body.content;
});
let i=0;
const moment=require("moment");

function formatemessage(username,text){
    return{
        username,
        text,
        time: moment().format("h:mm a")
    }
}
function content_msg(username){
    raceObj[username]={"wpm":0};
    //console.log(typeof(content))
    return content;
}

function content_check(value,user){
    // console.log(user);
    let wpm=0;
    let flag=true;
    for(let i=0; i<value.length; i++){
        if(value[i]!=content[i]){
            // ibox.style.background="red";
            flag=false;
        }else{
            if(flag==true){
            wpm++;
            }
        }
    }
    raceObj[user]["wpm"]=wpm;
// console.log(raceObj)
    ;    return [raceObj,flag];
}

function resetuser(user){
    delete raceObj[user];
    // raceObj[user]={"wpm":0};
}




module.exports={
    content_msg,
    formatemessage,
    content_check,
    resetuser
}
