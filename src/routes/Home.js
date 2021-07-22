import React from 'react';
import styled from 'styled-components';
import Search from '../components/search/Search';
import Table from '../components/table/Table';
import Posts from '../components/posts/Posts';

const HomeDiv = styled.div`
  margin-top: 127px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <HomeDiv>
      <Search />
      <Table />
      <Posts />
    </HomeDiv>
  );
}
