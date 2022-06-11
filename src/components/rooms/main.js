import { useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

import RoomCard from "../UI/card/roomCard";
import CreateRoom from "./createRoom";

import Auth from "../../context/auth/auth";

const Section = styled.section`
  width: 98vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5vh 0;
  min-height: 70vh;
`;

const MainRooms = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(
        `${process.env.REACT_APP_SERVER}/get-rooms`
      );
      setData(response.data);
    };
    fetchData();
  });

  const rooms = data.map((ele) => <RoomCard data={ele} />);
  return (
    <Auth capabilties="discussion">
      <Section>
        <Auth capabilties="edit-discussion">
          <CreateRoom />
        </Auth>
        {rooms}
      </Section>
    </Auth>
  );
};

export default MainRooms;
