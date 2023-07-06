import styled from "styled-components";

import picture from "../../assets/picture.png";

const ItemInfo = () => {
  return (
    <Div>
      <ItemImages src={picture} />
      <Seller>
        <SellerProfile src={picture} />
        <SellerInfo />
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

  margin: 0;
  padding: 0;

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
  border-bottom: 0.5px solid #808080;
`;
const SellerProfile = styled.img`
  width: 50px;
  height: 50px;
`;
const SellerInfo = styled.div``;

const Comment = styled.div``;

const ItemDetail = styled.div``;
