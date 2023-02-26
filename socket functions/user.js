let users=[];

function userjoin(id,username,room){
    let user={id,username,room}
   
    if(user.length==4){
        return "";
    }
    users.push(user);
    return user;
}
function getRoomuser(room){
    return users;
}
function deleteuser(user){
    let index=users.findIndex((ele)=>ele.username==user);
    users.splice(index,1);
}
module.exports={userjoin,getRoomuser,deleteuser}