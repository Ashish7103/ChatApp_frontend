/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import "../App.css";


// url of bakend 

const baseUrl="https://chatapp-backend-tpjv.onrender.com";
// import app from "../../../whatsapp-bakend/app";
import { Mic } from "@mui/icons-material";
const decorateIcon = {
  fontSize: "20px",
};
const style = {
  padding: "1px",
  color: "grey",
};


const Chat = ({messages}) => {
 const [input,setInput]=useState("")

  const sendMessage=async (e)=>{
e.preventDefault()
const response= await fetch(`${baseUrl}/messages/new`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: input,
    name: "Demon ",
    timeStamp: new Date().toUTCString(),
    // received: true
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Handle successful response
    console.log('Message sent successfully');
  })
  .catch(error => {
    // Handle error
    console.error('There was a problem sending the message:', error);
  });
  setInput("");


  }
  // const =props;
  return (
    <div className="ChatBox  w-full sm:flex-row flex-col  md:shrink-[0.65] md:grow-[0.65] md:basis-0 box-border">
      <div className="chatHeader flex w-full justify-between sm:justify-between items-center h-[7%] p-[5px] my-2 border-solid border-b-[1px] border-white sm:space-x-3  sm:flex-row">
        <div className="chat_header_left flex  sm:flex  p-1 items-center space-x-1 cursor-pointer">
          <Avatar className="icon ml-1" />
          <div className="chat_Info px-3">
            <h1 className="text-sm font-bold capitalize text-zinc-700 :text-lg ">
              Room Name
            </h1>
            <p
              className="para 
            sm:block sm:text-sm font-semibold text-zinc-500 hidden "
            >
              Last Seen...
            </p>
          </div>
        </div>
        <div className="chatHeader_Right flex items-center  ">
          <IconButton>
            <SearchIcon
              className="outline:none"
              sx={{ display: { xs: "none", sm: "inline-block" } }}
            />
          </IconButton>
          <IconButton>
            <AttachFileIcon
              className="outline:none"
              sx={{ display: { xs: "none", sm: "inline-block" } }}
            />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div
  
        className="chat_body h-[80%] w-[98%]   rounded-md  p-[30px] "
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp4410721.jpg')",
        }}
      >
   {messages.map((message) => (
    <>
  <p className={message.recieved ? "chat_message chat_sender" : "chat_message"}>
  {/* <p className={`chat_message ${message.recieved && "chat_sender"}`}> */}
    <span className="chat_name">{message.name}</span>
    {message.message}
    <span className="chat_timestamp">{message.timeStamp}</span>
  </p>
  </>
))}
       
      </div>
      <div className="chat_footer flex justify-between items-center h-[62px] border-t-[1px] border-solid border-gray-200">
        <IconButton>
          <EmojiEmotionsIcon style={style} />
        </IconButton>
        <form  className="flex flex-1 mx-3">
          <input value={input} onChange={(e)=>setInput(e.target.value)} 
            className="flex-1 rounded-[30px] p-[10px] border-none outline-none"
            type="text"
            placeholder="Type your message..."
          ></input>
          <button className="text-black text-bold" onClick={sendMessage}  type="submit" >
         &larr;
          </button>
        </form>
        <IconButton>
          <MicIcon style={style} />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
