import styled from "styled-components";

import picture from "../../assets/picture.png";

const ItemInfo = () => {
  return (
    <Div>
      <ItemImages src={picture} />
      <SellerInfo />
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

const SellerInfo = styled.div``;

const Comment = styled.div``;

const ItemDetail = styled.div``;
