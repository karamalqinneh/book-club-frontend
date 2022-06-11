import { useEffect, useRef } from "react";

import styled from "styled-components";

const Navbar = styled.nav`
  color: #09c8c3;
  padding: 1rem;
  background-color: #fefefe;
  width: 35vw;
  height 7.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  background: #fdfdfd;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 3vh;
  `;

const Nav = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #212529;
  height: 7vh;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  font-size: 1.1rem;
  background-color: #fefefe;
  &:hover {
    border-bottom: 5px solid rgb(189, 111, 42);
    color: rgb(189, 111, 42);
    font-weight: 600;
  }
  &.active {
    border-bottom: 5px solid rgb(189, 111, 42);
    color: rgb(189, 111, 42);
    font-weight: 600;
  }
`;

function LibraryHeader(props) {
  const navBarRef = useRef();
  useEffect(() => {
    const children = [].slice.call(navBarRef.current.children);
    children.forEach((ele) => {
      ele.classList.remove("active");
      if (ele.innerHTML.toLowerCase() == window.location.href.split("/")[3]) {
        ele.classList.add("active");
      }
    });
  }, []);

  return (
    <Navbar className={props.className} ref={navBarRef}>
      <Nav onClick={() => props.render("LIBRARY")}>Library</Nav>
      <Nav onClick={() => props.render("READING")}>My Reading List</Nav>
      <Nav onClick={() => props.render("SUGGESTION")}>Suggestion</Nav>
    </Navbar>
  );
}

export default LibraryHeader;
