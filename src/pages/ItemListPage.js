import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/ItemList/Header";
import Buttons from "../components/ItemList/Buttons";
import SearchBar from "../components/ItemList/SearchBar";
import List from "../components/ItemList/List";
import WriteBtn from "../components/ItemList/WriteBtn";
import TokenRefreshModal from "../components/Common/TokenRefreshModal";
import {
  getAllPosts,
  getPostBySchool,
  getPostonSales,
  getpostsBySchoolOnSales,
} from "../api/posts";

const ItemListPage = () => {
  const [onSales, setOnSales] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [uniDisplay, setUniDisplay] = useState("");
  const [isExpired, setIsExpired] = useState(localStorage.getItem("isExpired"));

  const navigate = useNavigate();
  const onToggle = () => {
    setOnSales(prev => !prev);
  };

  //양도글 리스트 조회
  useEffect(() => {
    let data = null;
    async function fetchData() {
      if (onSales) {
        data = uniDisplay
          ? await getpostsBySchoolOnSales(uniDisplay)
          : await getPostonSales();
      } else {
        data = uniDisplay
          ? await getPostBySchool(uniDisplay)
          : await getAllPosts();
      }

      //토큰 만료시
      if (data.response && data.response.data.code === "EXPIRED_TOKEN") {
        localStorage.setItem("isExpired", true);
        setIsExpired(localStorage.getItem("isExpired"));
      } else {
        setPosts(data);
        setLoading(false);
      }
    }

    fetchData();
  }, [refresh, onSales]);

  return (
    <Wrapper>
      {isExpired === "true" && <TokenRefreshModal />}
      <Header />
      <Buttons navigate={navigate} />
      <SearchBar
        onToggle={onToggle}
        onSales={onSales}
        uniDisplay={uniDisplay}
        setUniDisplay={setUniDisplay}
        setRefresh={setRefresh}
      />
      {loading ? (
        <Loader>loading...</Loader>
      ) : (
        <List
          posts={posts}
          setRefresh={setRefresh}
          offset="138px"
          setIsExpired={setIsExpired}
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
