import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/ItemList/Header";
import Buttons from "../components/ItemList/Buttons";
import SearchBar from "../components/ItemList/SearchBar";
import List from "../components/ItemList/List";
import WriteBtn from "../components/ItemList/WriteBtn";
import TokenRefreshModal from "../components/Common/TokenRefreshModal";
import MyPageModal from "../components/ItemList/MyPageModal";
import { getLikes } from "../api/likes";
import {
  getAllPosts,
  getPostBySchool,
  getPostonSales,
  getpostsBySchoolOnSales,
} from "../api/posts";

const ItemListPage = () => {
  const [onSales, setOnSales] = useState(
    JSON.parse(localStorage.getItem("toggle")),
  );
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [uniSearch, setUniSearch] = useState(
    localStorage.getItem("university"),
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMypageModalVisible, setIsMypageModalVisible] = useState(false);

  const onToggle = () => {
    setOnSales(prev => {
      localStorage.setItem("toggle", JSON.stringify(!prev));
      window.location.reload();
      return !prev;
    });
  };

  //토글 기본 설정
  useEffect(() => {
    if (onSales === null) {
      setOnSales(false);
      localStorage.setItem("toggle", false);
    }
  }, []);

  //양도글 리스트 조회
  useEffect(() => {
    async function fetchData() {
      try {
        let data = null;
        if (onSales) {
          data = uniSearch
            ? await getpostsBySchoolOnSales(uniSearch)
            : await getPostonSales();
        } else {
          data = uniSearch
            ? await getPostBySchool(uniSearch)
            : await getAllPosts();
        }
        setPosts(data);
        setLoading(false);
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
    }
    fetchData();
  }, [refresh, onSales]);

  //찜여부 리스트 조회
  useEffect(() => {
    async function fetchData() {
      try {
        posts.forEach(async (post, index) => {
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
  }, [refresh, onSales, posts]);

  return (
    <Wrapper>
      {isModalVisible && <TokenRefreshModal />}
      {isMypageModalVisible && (
        <MyPageModal
          setIsMypageModalVisible={setIsMypageModalVisible}
          isMypageModalVisible={isMypageModalVisible}
        />
      )}
      <Header
        uniSearch={uniSearch}
        setUniSearch={setUniSearch}
        onToggle={onToggle}
        onSales={onSales}
        setRefresh={setRefresh}
        setIsModalVisible={setIsModalVisible}
        setIsMypageModalVisible={setIsMypageModalVisible}
      />
      {loading ? (
        <Loader>loading...</Loader>
      ) : (
        <List
          posts={posts}
          setRefresh={setRefresh}
          offset="90px"
          setIsModalVisible={setIsModalVisible}
          likes={likes}
        />
      )}
      <WriteBtn />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans KR";
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default ItemListPage;
