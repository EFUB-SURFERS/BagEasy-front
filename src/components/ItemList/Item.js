import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addLikes, cancelLikes, getLikes } from "../../api/likes";
import heartImg from "../../assets/itemListPage/heartImg.png";
import emptyheart from "../../assets/itemListPage/emptyheart.png";
import itemImg from "../../assets/itemListPage/itemImg.png";

const Item = ({ post, setRefresh, liked = false }) => {
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
        {liked && <School>{post.school}</School>}
        <Footer>
          <Tag isSold={post.isSold}>{post.isSold ? `판매완료` : `판매중`}</Tag>
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
  margin: 0 30px;
  padding: 30px 0;
  height: 180px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 120px;
  padding-bottom: 120px;
  outline: 1px solid #ededed;
  border-radius: 5px;
  overflow: hidden;
  flex: none;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  height: 120px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
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

const School = styled.div`
  flex: none;
  font-size: 13px;
  color: grey;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-top: auto;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 75px;
  height: 28px;
  box-sizing: border-box;
  background: ${props => (props.isSold ? `#cbcbcb` : `#FFC700`)};
  border-radius: 15px;
  color: white;
  font-weight: 700;
  font-size: 12px;
`;

const Favorites = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const HeartImg = styled.img`
  width: 18px;
  transform: translateY(1px);
`;

const FavoritesNum = styled.div`
  margin-left: 5px;
  font-size: 13px;
  font-weight: 400;
`;

export default Item;
