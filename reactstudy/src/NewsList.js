import React from 'react';
import styled from 'styled-components';
const NewsListBlock = styled.NewsListBlcok`
  box-sizing: border-box;
  padding-bottom: 3rem;
  widht: 768px;
  margin: 0 auto;
  margin-top: 2rem;
`;
const sampleArticle = {
  title: '제목',
  description: '내용',
};
const NewsList = () => {
  return (
    <>
      <NewsListBlock article={sampleArticle} />
      <NewsListBlock article={sampleArticle} />
      <NewsListBlock article={sampleArticle} />
    </>
  );
};

export default NewsList;
