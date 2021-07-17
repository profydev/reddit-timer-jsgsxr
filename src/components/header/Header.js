import React from 'react';
import styled from 'styled-components';
import HeaderIcon from './HeaderIcon';
import NavBar from './NavBar';

const HeaderDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  z-index: 1;
`;

export default function Header() {
  return (
    <HeaderDiv>
      <HeaderIcon />
      <NavBar />
    </HeaderDiv>
  );
}
