import { useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

import CustomCard from "../UI/card/card";

const Section = styled.section`
  width: 98vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5vh 0;
`;

const AllBooks = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(
        `${process.env.REACT_APP_SERVER}/get-books`
      );
      let library = response.data.filter((ele) => ele.suggestion === false);
      setData(library);
    };
    fetchData();
  });
  let cards = data.map((ele) => {
    return <CustomCard data={ele} basicCard={true} />;
  });
  return <Section>{cards}</Section>;
};

export default AllBooks;
