const fetch = require('node-fetch');
let content=fetch('https://api.quotable.io/random')
    .then(res => res.text())
    .then(body => body);
let i=0;
const moment=require("moment");

function formatemessage(username,text){
    return{
        username,
        text,
        time: moment().format("h:mm a")
    }
}
function content_msg(){
    console.log(content);
    return content.content;
}

// // function content_check(char){
// // if(content[i]==char){
// //     i++;
// //     return true;
// // }else {
// //     return false;
// // }
// }






module.exports={
    content_msg,
    formatemessage
}

