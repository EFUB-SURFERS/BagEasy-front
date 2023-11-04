import React from "react";
import styled from "styled-components";
import Contents from "../MyPage/Contents";
import TokenRefreshModal from "../Common/TokenRefreshModal";
import { useState } from "react";

const MyPageModal = ({ setIsMypageModalVisible, isMypageModalVisible }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      {isModalVisible && <TokenRefreshModal />}
      <MyPageContainer>
        <Contents
          setIsModalVisible={setIsModalVisible}
          setIsMypageModalVisible={setIsMypageModalVisible}
          isMypageModalVisible={isMypageModalVisible}
        />
      </MyPageContainer>
      <BG></BG>
    </>
  );
};

const BG = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: black;
  z-index: 1;
  opacity: 0.7;
`;

const MyPageContainer = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 85vw;
  margin-left: auto;
  border-radius: 50px 10px 0px 50px;
`;

export default MyPageModal;
