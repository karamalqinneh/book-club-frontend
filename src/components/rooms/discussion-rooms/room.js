import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Post from "./post";
import PostInput from "./postInput";
import { useParams, Link } from "react-router-dom";

function Room() {
  const [socket, setSocket] = useState(null);
  const [roomID, setRoom] = useState(null);
  let { room_id } = useParams();

  useEffect(() => {
    const newSocket = io(`${process.env.REACT_APP_SERVER}`);
    setSocket(newSocket);
    setRoom(room_id);
    return () => newSocket.close();
  }, []);

  return (
    <div>
      <header>React Chat</header>
      <Link to="/discussions">Leave</Link>
      {socket ? (
        <div>
          <Post socket={socket} community_id={roomID} />
          <PostInput socket={socket} community_id={roomID} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default Room;
