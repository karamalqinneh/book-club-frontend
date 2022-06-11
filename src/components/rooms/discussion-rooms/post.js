import { useEffect, useState, useContext } from "react";

import { LoginContext } from "../../../context/auth/login";

function Post({ socket, community_id }) {
  const login = useContext(LoginContext);

  const [username, setUsername] = useState(login.user.full_name);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(posts);

    socket.on("connect", () => {
      socket.emit("joinRoom", { username, community_id });
    });
    socket.on("pass-message", (message) => {
      displayMessage(message);
    });
  }, [socket]);
  function displayMessage(message) {
    setPosts([...posts, message]);
  }
  const render = posts.map((ele) => <h3>{`${ele.text} ${ele.time}`}</h3>);

  return <div>{render}</div>;
}

export default Post;
