import React, { useEffect, useState } from "react";
import List from "./../components/ItemList/List";
import styled from "styled-components";
import Header from "./../components/Common/Header";
import { getLikedPosts } from "../api/likes";
import TokenRefreshModal from "../components/Common/TokenRefreshModal";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
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
        <Header />
      </button>
      <List
        posts={posts}
        setRefresh={setRefresh}
        liked={true}
        setIsModalVisible={setIsModalVisible}
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
