import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Common/Header";
import Bar from "../components/Purchase/Bar";
import BuyItem from "../components/Purchase/BuyItem";
import SoldItem from "../components/Purchase/SoldItem";
import TokenRefreshModal from "../components/Common/TokenRefreshModal";

const Purchase = () => {
  const [activeTab, setActiveTab] = useState("구매내역");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      {isModalVisible && <TokenRefreshModal />}
      <Container>
        <Header />
        <Content>
          <Bar activeTab={activeTab} onTabClick={handleTabClick} />
          <ListContainer>
            {activeTab === "구매내역" && (
              <>
                <BuyItem setIsModalVisible={setIsModalVisible} />
                <Divider />
              </>
            )}

            {activeTab === "판매내역" && (
              <>
                <SoldItem setIsModalVisible={setIsModalVisible} />
                <Divider />
              </>
            )}
          </ListContainer>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  padding-right: 5px;
`;

const Divider = styled.div`
  width: 350px;
  height: 0.5px;
  margin: 0 auto;
  background-color: #d9d9d9;
`;

export default Purchase;
