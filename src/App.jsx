/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import "./App.css";
import Chat from "./components/Chat";
import SideBar from "./components/SideBar";

function App() {
  const [messages, setMessages] = useState([]);
  // const [effectCounter, setEffectCounter] = useState(0); // Initialize counter state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/messages/sync");
        const data = await response.json();
        setMessages(data);
       
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  },[]);
  console.log(messages);
  
  useEffect(() => {
    var pusher = new Pusher('2e8e79fd5b0e0b5a6534', {
      cluster: 'ap2'});

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      setMessages([...messages, newMessage]); // Add the new message to the messages array
    });

    // Increment the effect counter each time the useEffect runs
    // setEffectCounter(prevCounter => prevCounter + 1);

    // Clean up function to unsubscribe from Pusher
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages]
  );
   console.log(messages);

  return (
    <>
      <div className="App">
        <div className="app_body flex bg-[#ededed] h-[90vh] w-[90vw] mt-[-50px]  shadow md:shadow-lg rounded-md">
          <SideBar />
          <Chat messages={messages} />
        </div>
      </div>
    </>
  );
}


export default App;
