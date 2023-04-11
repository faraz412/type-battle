const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const connection = require("./config/db")
require("dotenv").config()
const cors=require("cors")
const path=require("path");
const { content_msg, formatemessage, content_check } = require('./socket functions/message');
const { userjoin, getRoomuser, deleteuser } = require('./socket functions/user');
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    app.use(express.static(path.join(__dirname,"client","dist")))
    res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
})

app.get("/admin",(req,res)=>{
  app.use(express.static(path.join(__dirname,"client","dist","Admin")))
  res.sendFile(path.resolve(__dirname,"client","dist","Admin", "login.html"))
})

app.get("/api",(req,res)=>{
    res.send({"msg":"welcome"})
})
app.use("/api/user",require("./router/userrouter"));
app.use("/api/admin",require("./router/adminrouter"));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("user enter in room",({username})=>{
      console.log("user enter in room");
      socket.emit("content",content_msg());
    })
    socket.on("user",({username,room})=>{

      //console.log(username,room);
      const user=userjoin(socket.id,username,room);//user store
      //console.log(user);
      //console.log(user);
      if(user==""){
        socket.emit("roomFull","Maximum users have joined the race");
      }else{

        socket.join(user.room);//join the room
        socket.emit("message",formatemessage(user.username,"welcome to type battle"));// individual message
       socket.emit("number of users",getRoomuser());
        socket.emit("content",content_msg(user.username));
        //brodcast to other user
            // socket.broadcast.to(user.room).emit("message",formatemessage(user.username,`${user.username} has join the race`))// message to all except me
            socket.broadcast.to(user.room).emit("number of users",getRoomuser());
            socket.on("type message",(char)=>{
              socket.emit("status",content_check(char,user.username));
          })
        socket.on("msg",(msg)=>{
            console.log(msg);
        io.to(user.room).emit("message",formatemessage(username,msg));//message to all
        })
        // io.to(user.room).emit("roomUsers",{room:user.room,user:getRoomuser(user.room)});
        socket.on('disconnect', () => {
          socket.broadcast.to(user.room).emit("message",formatemessage(user.username,`${user.username} has left the race`))
          deleteuser(user.username);
          console.log('user disconnected');
        });
      }
  })
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  
  server.listen(process.env.PORT,async () => {
    try {
        await connection
        console.log("db connection established");
    } catch (error) {
        console.log(error.message,"not connected");
    }
    console.log('listening on *:'+ process.env.PORT);
  });
