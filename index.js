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
const { content_msg } = require('./socket functions/message');
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
      // socket.on("type message",(char)=>{
      //     if(content_check(char)){
      //       socket.emit("content",true);
      //     }else {
      //       socket.emit("content",false);
      //     }
      // })
    })
    socket.on("user",({username,room})=>{
      console.log(username,room);
      const user=userjoin(socket.id,username,room);
      console.log(user);
      socket.join(user.room);
      socket.emit("message",formatemessage(user.username,"welcome to type battle"));
      //brodcast to other user
          socket.broadcast.to(user.room).emit("message",formatemessage(user.username,`${user.username} has join the race`))
          socket.emit("content",content_msg());
      socket.on("msg",(msg)=>{
          console.log(msg);
      io.to(user.room).emit("chat message",formatemessage(username,msg));
      })
      io.to(user.room).emit("roomUsers",{room:user.room,user:getRoomuser(user.room)});
      socket.on('disconnect', () => {
        socket.broadcast.to(user.room).emit("message",formatemessage(user.username,`${user.username} has left the race`))
        console.log('user disconnected');
      });
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

