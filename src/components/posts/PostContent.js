import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostTitle = styled.h1`
  font-size: 24px;
  line-height: 29px;
`;

const PostDetail = styled.p`
  font-size: 16px;
  line-height: 27px;
  color: #93918F;
  margin-bottom: 100px;
`;

export function PostContent1() {
  return (
    <>
      <PostTitle id="HowitWorks">How it works</PostTitle>
      <PostDetail>
        • We find the 500 top posts from the past year for a subreddit.
        <br />
        • The data is visualized in a heatmap grouped by weekday and hour of the day.
        <br />
        • See immediately when to submit your reddit post.
      </PostDetail>
    </>
  );
}

export function PostContent2() {
  return (
    <>
      <PostTitle id="About">About</PostTitle>
      <PostDetail>
        This app was created during a course on
        <Link to="https://profy.dev"> profy.dev </Link>
        with the goal to implement a
        <br />
        pixel-perfect real-world application with professional workflows and tools like Kanban,
        <br />
        Asana, Zeplin, GitHub, pull requests and code reviews.
        <Link to="https://profy.dev/employers"> Click here </Link>
        for more information.
      </PostDetail>
    </>
  );
}
