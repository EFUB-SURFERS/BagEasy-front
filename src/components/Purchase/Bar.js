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
  display: flex;
  color: white;
  height: 36px;
  cursor: pointer;
  margin-top: 97px;
`;

const TabItem = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  width: 207px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }) => (active ? "#ffc700" : "#cbcbcb")};
`;

export default Bar;
