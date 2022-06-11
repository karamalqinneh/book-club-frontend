import styled from "styled-components";

import CustomCard from "../../UI/card/card";

const Section = styled.section`
  width: 98vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5vh 0;
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

const AdminSuggestion = (props) => {
  let cards = allData.map((ele) => {
    return <CustomCard data={ele} suggestion={true} />;
  });
  return <Section>{cards}</Section>;
};

export default AdminSuggestion;
