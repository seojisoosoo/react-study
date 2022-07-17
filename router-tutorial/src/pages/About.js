import React from "react";
import { useSearchParams } from "react-router-dom";
const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mdoe = searchParams.get("mode");

  const onToggleDetail = () => {};

  return (
    <>
      <h1>소개</h1>
      <p>쿼리스트링:{location.search}</p>
    </>
  );
};

export default About;
