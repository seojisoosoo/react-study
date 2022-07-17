import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
`;
const Home = () => {
  return (
    <>
      <h1>홈</h1>
      <Link to="/about">
        <Button>소개</Button>
      </Link>
      <Link to="/profiles/gildong">velopert</Link>
    </>
  );
};

export default Home;
