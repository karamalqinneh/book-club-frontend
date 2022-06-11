import { useEffect, useState, useContext } from "react";

import styled from "styled-components";
import { Card, Button, Form } from "react-bootstrap";

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

const data = {
  genre: "poetry",
  introduction:
    "As the French and Indian war rages, the two daughters of a British officer prepare to return home.",
  name: "Love & Misadventure",
  img_url: "https://m.media-amazon.com/images/I/31Qy+oNDafL.jpg",
  book_url: "../pdf/poetry-../pdf/book-3.pdf",
  publish_date: "2013/09/12",
};
const allData = [data, data, data, data, data, data, data, data];

const CreateRoom = (props) => {
  const [options, setOptions] = useState();
  const [bookName, setBookName] = useState("");
  useEffect(() => {
    setOptions(
      allData.map((ele) => {
        return <option value={ele.name}>{ele.name}</option>;
      })
    );
  }, []);

  return (
    <StyledCard>
      <Container>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Room Name" />
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
