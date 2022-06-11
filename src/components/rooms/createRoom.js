import { useEffect, useState, useContext } from "react";

import styled from "styled-components";
import { Card, Button, Form } from "react-bootstrap";
import axios from "axios";

const StyledCard = styled(Card)`
  margin: 0 0 3vh 3vw;
  width: 20vw;
  height: 30vh;
`;

const StyledButton = styled(Button)`
  background-color: rgb(189, 111, 42);
  border: none;
`;

const Container = styled(Card.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CreateRoom = (props) => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState();
  const [bookName, setBookName] = useState("");
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(
        `${process.env.REACT_APP_SERVER}/get-books`
      );
      setData(response.data);
    };
    fetchData();
  });

  useEffect(() => {
    setOptions(
      data.map((ele) => {
        return <option value={ele.book_id}>{ele.name}</option>;
      })
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventsdefault();
    let body = {
      book_id: bookName,
      name: roomName,
    };
    await axios.post(`${process.env.REACT_APP_SERVER}/create-room`, body);
  };

  return (
    <StyledCard>
      <Container>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Room Name"
              onChange={(e) => setRoomName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Select
              onChange={(e) => {
                setBookName(e.target.value);
              }}
            >
              <option>Book Name</option>
              {options}
            </Form.Select>
          </Form.Group>
          <StyledButton variant="primary" type="submit">
            Create
          </StyledButton>
        </Form>
      </Container>
    </StyledCard>
  );
};

export default CreateRoom;
