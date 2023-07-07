import styled from "styled-components";

import picture from "../../assets/picture.png";
import profile from "../../assets/profile.png";

const ItemInfo = () => {
  return (
    <Div>
      <ItemImages src={picture} />
      <Seller>
        <SellerProfile src={profile} />
        <SellerInfo>
          <SellerNickname>jjm0829</SellerNickname>
          <SellerUniv>University of Northern Colorado</SellerUniv>
        </SellerInfo>
      </Seller>
      <Item>
        <ItemTitle>이불, 침대시트, 베개 판매합니다.</ItemTitle>
        <ItemContent>
          4개월동안 사용했습니다. <br />
          상태 아주 깨끗하고 좋아요. <br />
          거래 전에 세탁해서 드립니다. <br />
          연락 많이 주세요!
        </ItemContent>
      </Item>
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

const Item = styled.div`
  display: flex;
  flex-direction: column;

  width: 390px;
  height: 200px;

  padding-left: 10px;
  padding-right: 10px;

  border-bottom: 0.5px solid #cecece;
`;
const ItemTitle = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-style: medium;
  font-size: 16px;
  font-weight: 550;

  margin-top: 25px;
  margin-bottom: 20px;
  /* padding-top: 5px; */
`;
const ItemContent = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-style: regular;
  font-size: 15px;
  font-weight: 540;
`;

const Seller = styled.div`
  position: relative;
  display: flex;

  width: 389px;
  padding-top: 15px;
  padding-bottom: 15px;
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
