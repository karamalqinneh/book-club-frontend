import { useState } from "react";
import { useParams } from "react-router-dom";

const PostInput = ({ socket }) => {
  const { room_id } = useParams();
  const [value, setValue] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit("send-message", value, room_id);
    setValue("");
  };

  return (
    <form onSubmit={submitForm}>
      <input
        autoFocus
        value={value}
        placeholder="Type your post"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </form>
  );
};

export default PostInput;
