/* eslint-disable no-unused-vars */
import React from "react";
import { Avatar, IconButton } from "@mui/material";

const SidebarChatRoomInfo = () => {
  return (
    <>
      <div className="Sidebar_chat flex w-full p-1 items-center  space-x-3 cursor-pointer border-solid border-b-[1px] border-white hover:bg-zinc-300 box-border   ">
        <Avatar className="icon ml-3" />
        <div className="Sidebar_chat_info px-3 ">
          <h2 className="text-lg font-bold capitalize text-zinc-700 ">
            Room Name
          </h2>
          <p className="para text-sm font-semibold text-zinc-500">
            Last Message
          </p>
        </div>
      </div>
    </>
  );
};

export default SidebarChatRoomInfo;
