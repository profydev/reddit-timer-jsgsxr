import React from 'react';
import styled from 'styled-components';
import HeaderIcon from './HeaderIcon';
import NavBar from './NavBar';

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  z-index: 1;
  background: white;
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderIcon />
      <NavBar />
    </StyledHeader>
  );
}
