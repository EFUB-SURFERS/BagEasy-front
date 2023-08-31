import React from "react";
import { styled } from "styled-components";
import Notification from "../components/notification/Notification";

const NotificationPage = () => {
  return (
    <Root>
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
  margin-top: 46px;
`;

export default NotificationPage;
