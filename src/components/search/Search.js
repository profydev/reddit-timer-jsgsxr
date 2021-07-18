import React from 'react';
import styled from 'styled-components';
import SearchButton from './SearchButton';

const SearchDiv = styled.div`
  width: 60%;
  height: 232px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleDiv = styled.div`
  font-size: 38px;
  line-height: 46px;
  padding-bottom: 20px;
`;

const SubDiv = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #93918F;
  padding-bottom: 45px;
`;

export default function Search() {
  return (
    <SearchDiv>
      <TitleDiv>No reactions to your reddit posts?</TitleDiv>
      <SubDiv>Great timing, great results! Find the best time to post on your subreddit</SubDiv>
      <SearchButton />
      <SubDiv>r/javascrips</SubDiv>
    </SearchDiv>
  );
}
