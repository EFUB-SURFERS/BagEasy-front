import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addLikes, cancelLikes, getLikes } from "../../api/likes";
import heartImg from "../../assets/itemListPage/heartImg.png";
import emptyheart from "../../assets/itemListPage/emptyheart.png";
import itemImg from "../../assets/itemListPage/itemImg.png";

const Item = ({ post, setRefresh }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/detail/${post.postId}`);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getLikes(post.postId);

      setIsLiked(data.isLiked);
    }
    fetchData();
  }, []);

  const like = async e => {
    e.stopPropagation();

    if (isLiked) {
      await cancelLikes(post.postId);
      setIsLiked(false);
    } else {
      await addLikes(post.postId);
      setIsLiked(true);
    }

    setRefresh(prev => prev + 1);
  };

  console.log(post);

  return (
    <Wrapper onClick={goToDetailPage}>
      <ImageWrapper>
        <Image src={post.imageResponseDtos[0].imageUrl} />
      </ImageWrapper>

      <Info>
        <Name>{post.postTitle}</Name>
        <Price>{`${post.price}원`}</Price>
        <Footer>
          {post.isSold ? <SoldTag>판매완료</SoldTag> : <Tag>판매중</Tag>}
          <Favorites>
            <HeartImg src={isLiked ? heartImg : emptyheart} onClick={like} />
            <FavoritesNum>{post.heartCount}</FavoritesNum>
          </Favorites>
        </Footer>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 27px;
  padding: 27px 0;
  height: 167px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  //background: beige;
`;

const ImageWrapper = styled.div`
  width: 7rem;
  height: 0;
  padding-bottom: 7rem;
  //margin-right: 0.7rem;
  /* outline: 1px solid grey; */
  box-sizing: border-box;
  flex: none;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  //height: 100%;
`;

const Info = styled.div`
  height: 7rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  //height: 10rem;
  /* background: beige; */
  box-sizing: border-box;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  flex: none;
`;

const Price = styled.div`
  flex: none;
  font-size: 16px;
  color: grey;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-top: auto;
`;

const SoldTag = styled.div`
  background: #cbcbcb;
  border-radius: 2rem;
  color: white;
  font-weight: bold;
  font-size: 12px;
  padding: 0.3rem 1rem;
  flex: none;
`;

const Tag = styled.div`
  background: #ffc700;
  border-radius: 2rem;
  color: white;
  font-weight: bold;
  font-size: 12px;
  padding: 0.3rem 1rem;
  flex: none;
`;

const Favorites = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  /* border: 1px solid black; */
`;

const HeartImg = styled.img`
  width: 18px;
  transform: translateY(1px);
  /* border: 1px solid blue; */
`;

const FavoritesNum = styled.div`
  margin-left: 5px;
  /* font-weight: bold; */
  font-size: 20px;
  /* border: 1px solid red; */
`;

export default Item;
