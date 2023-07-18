import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Common/Header";
import book from "../assets/book.png";
import sofa from "../assets/sofa.png";
import soccer from "../assets/soccer.png";
import clock from "../assets/clock.png";
import Bar from "../components/Purchase/Bar";
import BuyItem from "../components/Purchase/BuyItem"; // Import BuyItem
import SoldItem from "../components/Purchase/SoldItem"; // Import SoldItem

const Purchase = () => {
  const [activeTab, setActiveTab] = useState("구매내역");

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <Header />
      <Content>
        <Bar activeTab={activeTab} onTabClick={handleTabClick} />
        <ListContainer>
          {activeTab === "구매내역" && (
            <>
              <BuyItem
                image={book}
                title="미시경제학 새 책 팔아.."
                subtitle="학교이름"
                price="10000원"
              />
              <Divider />
              <BuyItem
                image={sofa}
                title="소파"
                subtitle="학교이름"
                price="20000원"
              />
              <Divider />
            </>
          )}

          {activeTab === "판매내역" && (
            <>
              <SoldItem
                image={soccer}
                title="축구공 단돈 3000원.."
                subtitle="학교이름"
                price="3000원"
                completed={false}
              />
              <Divider />
              <SoldItem
                image={clock}
                title="자명종 시계"
                subtitle="이화여자대학교"
                price="5000원"
                completed={true}
              />
              <Divider />
            </>
          )}
        </ListContainer>
      </Content>
    </Container>
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
`;

const Divider = styled.div`
  width: 350px;
  height: 0.5px;
  margin: 0 auto;
  background-color: #d9d9d9;
`;

export default Purchase;
