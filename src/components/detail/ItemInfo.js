import styled from "styled-components";

import picture from "../../assets/picture.png";

const ItemInfo = () => {
  return (
    <Div>
      <ItemImages src={picture} />
      <Seller>
        <SellerProfile src={picture} />
        <SellerInfo>
          <SellerNickname>jjm0829</SellerNickname>
          <SellerUniv>University of Northern Colorado</SellerUniv>
        </SellerInfo>
      </Seller>
      <ItemContent />
      <Comment />
      <ItemDetail />
    </Div>
  );
};
export default ItemInfo;

const Div = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ItemImages = styled.img`
  width: 390px;
  height: 390px;
`;

const ItemContent = styled.div``;

const Seller = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 7px;
  border-bottom: 0.5px solid #808080;
`;
const SellerProfile = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 70%;

  margin: auto;
`;
const SellerInfo = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;

  padding-left: 7px;
  width: 310px;
  height: 54px;
`;
const SellerNickname = styled.span`
  font-family: "Arial";
  font-style: bold;
  font-size: 17px;
  font-weight: 600;

  margin-bottom: 5px;
  margin-top: 5px;
`;
const SellerUniv = styled.span`
  font-family: "Arial";
  font-style: regular;
  font-size: 13px;
  color: #848484;
`;

const Comment = styled.div``;

const ItemDetail = styled.div``;
