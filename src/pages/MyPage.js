import React from "react";
import styled from "styled-components";
import Header from "../components/Common/Header";
import Contents from "../components/MyPage/Contents";
import TokenRefreshModal from "../components/Common/TokenRefreshModal";
import { useState } from "react";

const MyPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      {isModalVisible && <TokenRefreshModal />}
      <MyPageContainer>
        <Header />
        <Contents setIsModalVisible={setIsModalVisible} />
      </MyPageContainer>
    </>
  );
};

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MyPage;
