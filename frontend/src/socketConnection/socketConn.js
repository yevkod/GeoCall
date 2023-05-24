import io from "socket.io-client";
import { chatMessageHandler } from "../store/actions/messengerActions";
import {onlineUsersHandler, userDisconnectedHandler} from "../store/actions/usersActions";
import { videoRoomsListHandler } from "../store/actions/videoRoomActions";
import { call, disconnect } from "../realtimeCommunication/webRTCHandler";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io("http://localhost:3003");

  socket.on("connect", () => {
    console.log("connected to socket server");
  });

  socket.on("online-users", (usersData) => {
    onlineUsersHandler(socket.id, usersData);
  });

  socket.on("chat-message", (messageData) => {
    chatMessageHandler(messageData);
  });

  socket.on("video-rooms", (videoRooms) => {
    videoRoomsListHandler(videoRooms);
  });

  socket.on("video-room-init", (data) => {
    call(data);
  });

  socket.on("video-call-disconnect", () => {
    disconnect();
  });

  socket.on("user-disconnected", (disconnectedUserSocketId) => {
    userDisconnectedHandler(disconnectedUserSocketId);
  });
};

export const login = (data) => {
  socket.emit("user-login", data);
};

export const sendChatMessage = (data) => {
  socket.emit("chat-message", data);
};

export const createVideoRoom = (data) => {
  console.log("emitting");
  socket.emit("video-room-create", data);
};

export const joinVideoRoom = (data) => {
  console.log("emitting event to join a room");
  console.log(data);
  socket.emit("video-room-join", data);
};

export const leaveVideoRoom = (data) => {
  socket.emit("video-room-leave", data);
};
