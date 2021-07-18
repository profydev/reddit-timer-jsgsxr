import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';

const IconDiv = styled.div`
  width: 150px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.16rem;
`;

export default function HeaderIcon() {
  return (
    <Link to="/">
      <IconDiv>
        <img src={logo} alt="Reddit" />
      </IconDiv>
    </Link>
  );
}
