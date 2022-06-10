import { useContext, useState, useEffect } from "react";

import styled from "styled-components";
import { When } from "react-if";

import { LoginContext } from "../../context/auth/login";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import FormModal from "../../components/auth/login";

const StyledHeader = styled.header`
  display: flex;
  height: 10vh;
  width: 100vw;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  background-color: rgba(189, 111, 42, 0.5);
`;

const Data = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 10vh;
`;

const Image = styled.img`
  width: 8rem;
  height: 4rem;
  background: transparent;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  background: transparent;
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 10vh;
  margin-left: 1vw;
`;

const Item = styled.div`
  font-size: 1.1rem;
  height: 10vh;
  border-left: 1px solid rgb(189, 111, 42);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(189, 111, 42);
  padding: 0 1.5rem;
`;

const LoginInfo = styled.div`
  display: felx;
  justify-content: space-around;
  align-items: center;
  width: 20vw;
  height: 10vh;
  margin-left: auto;
`;
const UserInfo = styled.div`
  height: 10vh;
  margin-left: 1vw;
`;

const UserName = styled.h5`
  font-size: 1rem;
  margin-top: 2vh;
  text-align: center;
`;

const Postion = styled.p`
  font-size: 0.75rem;
  text-align: center;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 7.5px 0 7.5px;
  border-color: rgb(9, 175, 175) transparent transparent transparent;
  margin-left: 20px;
  cursor: pointer;
`;

const OptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fefefe;
  width: 17.5vw;
  position: fixed;
  z-index: 10;
  top: 10vh;
  right: 2.5%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Option = styled.div`
  width: 17.4vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 10vh;
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const Button = styled.button`
  width: 9vw;
  height: 6vh;
  background-color: #fefefe;
  border-radius: 15px;
  border: none;
  color: rgb(189, 111, 42);
`;

const Header = () => {
  const login = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setUsername(login.user.name);
    setJobTitle(login.user.jobTitle);
  }, [login.user]);
  return (
    <>
      <StyledHeader>
        <Data>
          <Image src={logo} alt="logo" />
        </Data>
        <StyledNav>
          <Item>Reading List</Item>
          <Item style={{ borderRight: "1px solid rgb(189, 111, 42)" }}>
            Rooms
          </Item>
        </StyledNav>
        <LoginInfo>
          <When condition={login.loggedIn}>
            <Avatar src={avatar} alt="logo" />
            <UserInfo>
              <UserName>{username}</UserName>
              <Postion>{jobTitle}</Postion>
            </UserInfo>
            <Triangle onClick={() => setShow(!show)} />
          </When>
          <When condition={!login.loggedIn}>
            <Button onClick={() => setModalShow(true)}>Login</Button>
          </When>
        </LoginInfo>
      </StyledHeader>
      {show && (
        <OptionsDiv>
          <Option>Profile Settings</Option>
          <Option
            onClick={() => {
              login.logout();
              setShow(!show);
            }}
          >
            Log out
          </Option>
        </OptionsDiv>
      )}
      <FormModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Header;
