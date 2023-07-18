import React from "react";
import styled from "styled-components";
import Head from "../components/Common/Head";
import Contents from "../components/Mypage/Contents";

const MyPage = () => {
  return (
    <MyPageContainer>
      <Head />
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