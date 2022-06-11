import { useState, useReducer } from "react";

import styled from "styled-components";

import LibraryHeader from "../header/libraryHeader";
import AllBooks from "./allBooks";
import ReadingList from "./readingList";
import AdminSuggestion from "./suggestions/admin";
import FanSuggestion from "./suggestions/fan";

const initialState = <AllBooks />;

const reducer = (state, action) => {
  switch (action.type) {
    case "LIBRARY":
      return <AllBooks />;
    case "READING":
      return <ReadingList />;
    case "SUGGESTION":
      return (
        <>
          <FanSuggestion />
          <AdminSuggestion />
        </>
      );
    default:
      return initialState;
  }
};

const Library = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const render = (option) => {
    dispatch({ type: option });
  };
  return (
    <>
      <LibraryHeader render={render} />
      {state}
    </>
  );
};

export default Library;
