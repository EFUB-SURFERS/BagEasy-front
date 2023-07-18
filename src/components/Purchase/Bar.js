import React from "react";
import styled from "styled-components";

const Bar = ({ activeTab, onTabClick }) => {
  return (
    <BarContainer>
      <TabItem
        active={activeTab === "구매내역"}
        onClick={() => onTabClick("구매내역")}
      >
        구매내역
      </TabItem>
      <TabItem
        active={activeTab === "판매내역"}
        onClick={() => onTabClick("판매내역")}
      >
        판매내역
      </TabItem>
    </BarContainer>
  );
};

const BarContainer = styled.div`
  width: 400px;
  display: flex;
  color: white;
  height: 36px;
  cursor: pointer;
  margin-top: 97px;
  padding: 0;
  width: 100%;
`;

const TabItem = styled.div`
  width: 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ active }) => (active ? "#ffc700" : "#cbcbcb")};
`;

export default Bar;
