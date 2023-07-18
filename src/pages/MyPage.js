import React from "react";
import styled from "styled-components";
import Header from "../components/Common/Header";
import Contents from "../components/MyPage/Contents";

const MyPage = () => {
  return (
    <MyPageContainer>
      <Header />
      <Contents />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MyPage;
