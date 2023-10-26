import React, { useEffect, useState } from "react";
import List from "./../components/ItemList/List";
import styled from "styled-components";
import SimpleHeader from "../components/ItemList/SimpleHeader";
import { getLikedPosts, getLikes } from "../api/likes";
import TokenRefreshModal from "../components/Common/TokenRefreshModal";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  //찜한 양도글 리스트 조회
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getLikedPosts();

        setLoading(false);
        setPosts(data);

        //찜여부 리스트 조회
        data.forEach(async (post, index) => {
          let newLikes = likes;
          const likedData = await getLikes(post.postId);
          newLikes[index] = likedData.isLiked;
          setLikes(newLikes);
        });
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
    }

    fetchData();
  }, [refresh]);

  return (
    <Wrapper>
      {isModalVisible && <TokenRefreshModal />}
      <button onClick={() => navigate("/home")}>
        <SimpleHeader />
      </button>
      <List
        posts={posts}
        setRefresh={setRefresh}
        showUni={true}
        setIsModalVisible={setIsModalVisible}
        likes={likes}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans KR";
`;

export default FavoritesPage;
