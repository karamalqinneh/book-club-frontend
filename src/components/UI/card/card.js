import { useEffect, useState, useContext } from "react";

import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

import Auth from "../../../context/auth/auth";
import { LoginContext } from "../../../context/auth/login";

const StyledCard = styled(Card)`
  margin: 0 0 3vh 3vw;
  width: 20vw;
`;

const Image = styled(Card.Img)`
  width: 20vw;
  height: 35vh;
`;

const Introduction = styled(Card.Text)`
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

const CustomCard = (props) => {
  const login = useContext(LoginContext);
  const [showRemove, setShowRemove] = useState(false);
  const [suggestion, setSuggestion] = useState(false);
  const [adminDelete, setAdminDelete] = useState(false);
  useEffect(() => {
    props.removeCard ? setShowRemove(true) : setShowRemove(false);
    props.suggestion ? setSuggestion(true) : setSuggestion(false);
    props.basicCard ? setAdminDelete(true) : setAdminDelete(false);
  }, []);

  const handleDeleteFromLibrary = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER}/remove-book/${id}`);
  };

  const handleRemoveFromReadingList = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER}/remove-reading-list/${id}`
    );
  };

  const handleAddtoReadingList = async (id) => {
    let body = {
      user_id: login.user.id,
    };
    await axios.post(
      `${process.env.REACT_APP_SERVER}/remove-reading-list/${id}`,
      body
    );
  };
  const handleAcceptSuggestion = async (id) => {
    await axios.put(`${process.env.REACT_APP_SERVER}/accept-suggestion/${id}`);
  };
  const handleDeclineSuggestion = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER}/decline-suggestion/${id}`
    );
  };

  const button =
    showRemove && !suggestion ? (
      <StyledButton
        variant="primary"
        onClick={() => {
          handleRemoveFromReadingList(props.data.id);
        }}
      >
        Remove From Reading List
      </StyledButton>
    ) : (
      <StyledButton
        variant="primary"
        onClick={() => {
          handleAddtoReadingList(props.data.id);
        }}
      >
        Add to Reading List
      </StyledButton>
    );
  const suggestionButtons = suggestion && (
    <div>
      <StyledButton
        variant="primary"
        onClick={() => {
          handleAcceptSuggestion(props.data.id);
        }}
      >
        Accept
      </StyledButton>
      <StyledButton
        variant="primary"
        onClick={() => {
          handleDeclineSuggestion(props.data.id);
        }}
      >
        Decline
      </StyledButton>
    </div>
  );
  return (
    <StyledCard>
      <Image variant="top" src={props.data.img_url} />
      <Container>
        <Card.Title>
          <h3>{props.data.name}</h3>
          {adminDelete && (
            <Auth capabiltiy="edit-library">
              <h3
                onClick={() => {
                  handleDeleteFromLibrary(props.data.id);
                }}
              >
                X
              </h3>
            </Auth>
          )}
        </Card.Title>
        <Introduction>{props.data.introduction}</Introduction>
        {!suggestion && button}
        {suggestionButtons}
      </Container>
    </StyledCard>
  );
};

export default CustomCard;
