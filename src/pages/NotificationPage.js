import React from "react";
import { styled } from "styled-components";
import Header from "../components/notification/Header";
import Notification from "../components/notification/Notification";

const NotificationPage = () => {
  return (
    <Root>
      <Header />
      <Wrapper>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </Wrapper>
    </Root>
  );
};

const Root = styled.div``;

const Wrapper = styled.div`
  margin-top: 50px;
`;

export default NotificationPage;
