import styled from "styled-components";
import searchBtn from "../../assets/searchBtn.png";
import place from "../../assets/place.png";

const SalesContent = () => {
  return (
    <Wrapper>
      <Line />
      <Images>
        <AddBtn />
        <VirtualImage />
        <VirtualImage />
      </Images>
      <SubLine />
      <Univ>
        <UnivInput>
          <img src={place} alt="검색" />
          학교명을 입력하세요
        </UnivInput>
        <Search>
          <img src={searchBtn} alt="검색" />
        </Search>
      </Univ>
      <SubLine />
      <TitleWrapper>
        <Title>제목</Title>
        <TitleInput>어떤 물품을 양도 중이신가요?</TitleInput>
      </TitleWrapper>
      <SubLine />
      <TitleWrapper>
        <Title>가격</Title>
        <TitleInput>어느 정도의 가격에 판매하실 예정인가요?</TitleInput>
      </TitleWrapper>
      <SubLine />
      <TitleWrapper>
        <Title>제목</Title>
      </TitleWrapper>
      <TitleInput>
        구매에 도움이 될 만한 물품의 세부 사항(특징)을 알려주세요. ex) 구매
        일시, 사용 기간, 생활 오염 정도 등
      </TitleInput>
    </Wrapper>
  );
};
export default SalesContent;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
`;

const Line = styled.div`
  width: 100%;
  height: 0.5px;
  background: #808080;
`;

const SubLine = styled.div`
  width: 100%;
  height: 0.5px;
  background: #d3d3d3;
`;

const AddBtn = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border: 6px solid #ffc700;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    #cecece;
  margin-left: 34px;
  margin-top: 24px;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 123px;
  background: #ffffff;

  margin-bottom: 19px;
`;

const VirtualImage = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background: #efefef;
  margin-left: 17px;
  margin-top: 30px;
`;

const Univ = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 18px;
  margin-bottom: 19px;
`;

const UnivInput = styled.div`
  width: 273px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #efefef;
  color: #656565;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  img {
    padding-left: 11px;
    padding-right: 8px;
    padding-top: 7px;
    width: 18px;
    height: 18px;
  }
`;

const Search = styled.div`
  margin-left: 8.74px;
  img {
    width: 62px;
    height: 31px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 18px;
  margin-bottom: 19px;
`;

const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-left: 29px;
  padding-right: 17px;
`;

const TitleInput = styled.div`
  display: flex;
  width: 211px;
  height: 15px;
  flex-direction: column;
  flex-shrink: 0;
  color: #b8b8b8;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 18px;
  margin-bottom: 19px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 18px;
  margin-bottom: 19px;
`;
