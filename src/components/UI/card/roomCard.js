import { useEffect, useState, useContext } from "react";

import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { LoginContext } from "../../../context/auth/login";
import axios from "axios";

const StyledCard = styled(Card)`
  margin: 0 0 3vh 3vw;
  width: 20vw;
  height: 30vh;
`;

const Header = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
`;

const BookName = styled(Card.Text)`
  margin: 2.5vh 0;
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

const RoomCard = (props) => {
  const [admin, setAdmin] = useState(false);
  const login = useContext(LoginContext);
  useEffect(() => {
    login.user.actions.includes("edit-discussion")
      ? setAdmin(true)
      : setAdmin(false);
  }, []);
  const handleDeleteRoom = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER}/delete-room/${id}`);
  };
  return (
    <StyledCard>
      <Header>
        <h3>{props.data.name}</h3>
        {admin && (
          <Button onClick={() => handleDeleteRoom(props.data.id)}>X</Button>
        )}
      </Header>
      <Container>
        <BookName>Test</BookName>
        <StyledButton variant="primary">
          <Link to={`/room/${props.data.id}`}>Join</Link>
        </StyledButton>
      </Container>
    </StyledCard>
  );
};

export default RoomCard;
