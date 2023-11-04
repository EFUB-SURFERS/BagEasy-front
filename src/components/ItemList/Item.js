import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addLikes, cancelLikes, getLikes } from "../../api/likes";
import heart from "../../assets/itemListPage/heart.png";
import emptyheart from "../../assets/itemListPage/emptyheart.png";

// 게시글 작성 시간 계산
export const elapsedTime = date => {
  const timeValue = new Date(date);
  const today = new Date();

  const diff = Math.floor(
    (today.getTime() -
      timeValue.getTime() +
      timeValue.getTimezoneOffset() * 60 * 1000) /
      1000,
  );

  const times = [
    { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
    { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
    { name: "일", milliSeconds: 60 * 60 * 24 },
    { name: "시간", milliSeconds: 60 * 60 },
    { name: "분", milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime}${value.name} 전`;
    }
  }
  return "방금 전";
};

const Item = ({
  post,
  setRefresh,
  showUni = false,
  setIsModalVisible,
  isLiked,
}) => {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/detail/${post.postId}`);
  };

  useEffect(() => {
    setRefresh(prev => prev + 1);
  }, []);

  //찜하기,찜취소
  const like = async e => {
    e.stopPropagation();
    try {
      isLiked ? await cancelLikes(post.postId) : await addLikes(post.postId);
      setRefresh(prev => prev + 1);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        setIsModalVisible(true);
      }
    }
  };

  return (
    <Wrapper onClick={goToDetailPage}>
      <ImageWrapper>
        <Image src={post.imageResponseDtos[0].imageUrl} />
      </ImageWrapper>

      <TextWrapper>
        <Title>{post.postTitle}</Title>
        <Detail>
          <University>{post.school}</University>
          <Day> | {elapsedTime(post.createdAt)}</Day>
        </Detail>
        <Price>{`${post.price}원`}</Price>
        {/* {showUni && <School>{post.school}</School>} */}
      </TextWrapper>

      <IconWrapper>
        <Favorites>
          <Heart src={isLiked ? heart : emptyheart} onClick={like} />
          <FavoritesNum>{post.heartCount}</FavoritesNum>
        </Favorites>
        <Tag $isSold={post.isSold}>{post.isSold ? `판매완료` : `판매중`}</Tag>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 0 14px;
  padding: 14px 0;
  height: 123px;
  box-sizing: border-box;
  align-items: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  line-height: 17px;
  &:hover {
    cursor: default;
  }
`;

const ImageWrapper = styled.div`
  flex: none;
  outline: 1px solid #ededed;
  position: relative;
  width: 96px;
  padding-bottom: 96px;
  border-radius: 13px;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  padding-top: 10px;
  padding-bottom: 12px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  margin-bottom: 4px;
`;

const Detail = styled.div`
  font-size: 12px;
  font-weight: 500;
  display: flex;
  /* border: 1px solid lightgrey; */
`;

const University = styled.div`
  /* border: 1px solid lightgrey; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const Day = styled.div`
  white-space: nowrap;
  margin-left: 5px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #b476e5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  margin-top: auto;
`;

const IconWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 12px;
  box-sizing: border-box;
  flex: none;
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
`;

const Favorites = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 10px;
  height: 23px;
  box-sizing: border-box;
  background: ${props => (props.$isSold ? `#C2C2C2` : `#B476E5`)};
  border-radius: 15px;
  color: white;
  font-weight: 700;
  font-size: 12px;
`;

const Heart = styled.img`
  width: 16px;
  height: 15px;
  transform: translateY(1px);
  &:hover {
    cursor: pointer;
  }
`;

const FavoritesNum = styled.div`
  margin-left: 5px;
  font-size: 13px;
  font-weight: 400;
`;

export default Item;
