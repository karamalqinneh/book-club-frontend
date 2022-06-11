import { useEffect, useState } from "react";

import styled from "styled-components";
import { Card, Button } from "react-bootstrap";

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
  const [showRemove, setShowRemove] = useState(false);
  const [suggestion, setSuggestion] = useState(false);
  useEffect(() => {
    props.removeCard ? setShowRemove(true) : setShowRemove(false);
    props.suggestion ? setSuggestion(true) : setSuggestion(false);
  }, []);

  const button =
    showRemove && !suggestion ? (
      <StyledButton variant="primary">Remove From Reading List</StyledButton>
    ) : (
      <StyledButton variant="primary">Add to Reading List</StyledButton>
    );
  const suggestionButtons = suggestion && (
    <div>
      <StyledButton variant="primary">Accept</StyledButton>
      <StyledButton variant="primary">Decline</StyledButton>
    </div>
  );
  return (
    <StyledCard>
      <Image variant="top" src={props.data.img_url} />
      <Container>
        <Card.Title>{props.data.name}</Card.Title>
        <Introduction>{props.data.introduction}</Introduction>
        {!suggestion && button}
        {suggestionButtons}
      </Container>
    </StyledCard>
  );
};

export default CustomCard;
