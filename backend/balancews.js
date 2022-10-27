const { io } = require("socket.io-client");

const socket = io("ws://localhost:9614/");
// console.log(socket)
// client-side
socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});