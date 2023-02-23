const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const connection = require("./config/db")
require("dotenv").config()
const cors=require("cors")
const path=require("path")
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    app.use(express.static(path.join(__dirname,"client","dist")))
    res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
})

app.get("/api",(req,res)=>{
    res.send({"msg":"welcome"})
})
app.use("/api/user",require("./router/userrouter"));
app.use("/api/admin",require("./router/adminrouter"));

io.on('connection', (socket) => {
    console.log('a user connected');
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

