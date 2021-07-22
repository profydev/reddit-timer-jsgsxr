import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.div`
  height: 36px;
  width: 217px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  color: white;
  font-size: 14px;
  line-height: 9px;
`;

const ButtonDiv = styled.div`
  margin-bottom: 46px;
  cursor: pointer !important;
`;

export default function SearchButton() {
  return (
    <ButtonDiv>
      <Link to="/search">
        <Button>SHOW ME THE BEST TIME</Button>
      </Link>
    </ButtonDiv>
  );
}
