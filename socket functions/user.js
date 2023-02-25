let users=[];

function userjoin(id,username,room){
    let user={id,username,room}
    users.push(user);
    return user;
}
function getRoomuser(room){
    return users.filter(user=>user.room==room);
}
module.exports={userjoin,getRoomuser}