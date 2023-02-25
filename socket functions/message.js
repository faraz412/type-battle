const fetch = require('node-fetch');

let content="content";
connect=fetch('https://github.com/')
    .then(res => res.text())
    .then(body => body);
let i=0;
const moment=require("moment");
const { connect } = require('mongoose');
function formatemessage(username,text){
    return{
        username,
        text,
        time: moment().format("h:mm a")
    }
}
function content_msg(){
    return content;
}
function content_check(char){
if(content[i]==char){
    i++;
    return true;
}else {
    return false;
}
}




module.exports={
    content_msg,
    content_check,
    formatemessage
}