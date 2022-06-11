import { useEffect, useState } from "react";

function Post({ socket, community_id }) {
  const username = "testUser";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(posts);

    socket.on("connect", () => {
      socket.emit("joinRoom", { username, community_id });
    });
    socket.on("pass-message", (message) => {
      displayMessage(message);
    });
    // socket.on("message", messageListener);
    // socket.on("deleteMessage", deleteMessageListener);
    // socket.emit("getMessages");

    return () => {
      //   socket.off("message", messageListener);
      //   socket.off("deleteMessage", deleteMessageListener);
    };
  }, [socket]);
  function displayMessage(message) {
    setPosts([...posts, message]);
  }
  const render = posts.map((ele) => <h3>{`${ele.text} ${ele.time}`}</h3>);

  return <div>{render}</div>;
}

export default Post;
