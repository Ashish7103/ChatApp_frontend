/* eslint-disable no-unused-vars */
import React from "react";
import SidebarChatRoomInfo from "./SidebarChatRoomInfo";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import Chat from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// import '../App'
const decorateIcon = {
  fontSize: "20px",
};

const SideBar = () => {
  return (
    <div className="sidebar flex flex-col   md:shrink-[0.35] md:grow-[0.35] md:basis-0 box-border">
      <div className="sidebar_header flex w-full  justify-between items-center h-[7%] p-[5px]   border-r-[1px] border-solid border-zinc-600 my-2 ">
        <Avatar
          src="https://i.pinimg.com/736x/9a/a1/65/9aa1651c381a4b362c3461ea89162757.jpg"
          className="ml-1"
        />
        <div className="sidebar_right_heder flex items-center justify-center space-x-2">
          <IconButton>
            <DonutLargeIcon style={decorateIcon} />
          </IconButton>
          <IconButton>
            <MoreVertIcon style={decorateIcon} />
          </IconButton>
          <IconButton>
            <Chat style={decorateIcon} />
          </IconButton>
        </div>
      </div>
      <div className="Sidebar_search flex items-center bg-[#ededed] h-[39px] p-[10px] ">
        <div className="sidebar_searchContainer flex items-center bg-white w-full h-[35px] rounded-xl  ">
          <SearchIcon className="Icon text-zinc-700 mx-2" />
          <input
            type="text"
            placeholder="Search or start a new chat"
            className="bg-white border-none text-zinc-400 outline-0"
          />
        </div>
      </div>

      <div className="Sidebar_chat">
        <SidebarChatRoomInfo />
        <SidebarChatRoomInfo />
        <SidebarChatRoomInfo />
      </div>
    </div>
  );
};

export default SideBar;
