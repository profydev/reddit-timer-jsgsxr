import React from 'react';
import styled from 'styled-components';
import reddit from '../../assets/icons/reddit.png';

const FooterDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FooterText = styled.p`
  margin: 2% 15%;
  font-size: 14px;
  line-height: 17px;
  color: #636363;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <FooterText>profy.dev</FooterText>
      <img src={reddit} alt="reddit" />
      <FooterText>Terms & Privacy</FooterText>
    </FooterDiv>
  );
}
