import styled from "styled-components";

import RoomCard from "../UI/card/roomCard";
import CreateRoom from "./createRoom";

const Section = styled.section`
  width: 98vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5vh 0;
  min-height: 70vh;
`;

const MainRooms = () => {
  return (
    <Section>
      <CreateRoom />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
    </Section>
  );
};

export default MainRooms;
