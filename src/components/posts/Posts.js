import React from 'react';
import styled from 'styled-components';
import { PostContent1, PostContent2 } from './PostContent';

const PostsDiv = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  margin-top: 133px;
  margin-left: 16%;
`;

export default function Posts() {
  return (
    <PostsDiv>
      <PostContent1 />
      <PostContent2 />
    </PostsDiv>
  );
}
