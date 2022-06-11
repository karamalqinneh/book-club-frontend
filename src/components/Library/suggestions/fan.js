import { useRef } from "react";

import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  padding: 3rem;
  width: 50vw;
  margin: 5vh auto;
`;

const Header = styled.h1`
  background-color: #fefefe;
  color: rgb(189, 111, 42);
  font-size: 1.25rem;
`;

const Label = styled(Form.Label)`
  background-color: #fefefe;
  width: 20vw;
`;

const Input = styled(Form.Control)`
  width: 20vw;
  height: 3rem;
  background-color: #fefefe;
  margin-left: 1rem;
`;

const InputGroup = styled(Form.Group)`
  background-color: #fefefe;
  display: flex;
  width: 30vw;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  background-color: rgba(189, 111, 42, 0.8);
  border-color: rgb(9, 200, 195);
  margin-left: 35%;
  margin-top: 2rem;
  border: none;
  &:hover {
    background-color: rgb(189, 111, 42);
  }
`;
const FanSuggestion = (props) => {
  let bookNameRef = useRef();
  let genreRef = useRef();
  let introductionRef = useRef();
  let imageRef = useRef();
  let dateRef = useRef();
  let body;

  const newCustomerHandler = async (e) => {
    e.preventDefault();
    body = {
      name: bookNameRef.current.value,
      genre: genreRef.current.value,
      introduction: introductionRef.current.value,
      image_url: imageRef.current.value,
      publish_date: dateRef.current.value,
    };
    // let request = await axios.post(
    //   "https://erp-system-2022.herokuapp.com/add-customer",
    //   body
    // );
    // console.log(request);
    bookNameRef.current.value = "";
    genreRef.current.value = "";
    introductionRef.current.value = "";
    imageRef.current.value = "";
    dateRef.current.value = "";
  };
  return (
    <Section>
      <Header>New Suggestion</Header>
      <Form
        onSubmit={newCustomerHandler}
        style={{ backgroundColor: "#fefefe" }}
      >
        <InputGroup>
          <Label>Book Name:</Label>
          <Input ref={bookNameRef} type="text" placeholder="Enter Book Name" />
        </InputGroup>
        <InputGroup>
          <Label>Genre:</Label>
          <Form.Select
            style={{ width: "20vw", height: "3rem" }}
            ref={genreRef}
            placeholder="Class"
          >
            <option>Genre</option>
            <option value="Self-help">Self Help</option>
            <option value="Cookbooks">Cookbooks</option>
            <option value="poetry">Poetry</option>
            <option value="fitness">Fitness</option>
            <option value="novel">novel</option>
            <option value="short stories">Short Stories</option>
            <option value="Science">Science</option>
            <option value="Art">Art</option>
          </Form.Select>
        </InputGroup>
        <InputGroup>
          <Label>Introduction:</Label>
          <Input
            ref={introductionRef}
            increament="1"
            placeholder="Enter an Introduction"
          />
        </InputGroup>
        <InputGroup>
          <Label>Image URL: </Label>
          <Input ref={imageRef} type="text" placeholder="Enter The Image URL" />
        </InputGroup>
        <InputGroup>
          <Label>Publish Date: </Label>
          <Input ref={dateRef} type="date" />
        </InputGroup>
        <StyledButton variant="primary" type="submit">
          Submit
        </StyledButton>
      </Form>
    </Section>
  );
};

export default FanSuggestion;
