import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getDetail } from "../../api/posts";
import { getMyProfile } from "../../api/member";
import { getLikes } from "../../api/likes";
import TokenRefreshModal from "../Common/TokenRefreshModal";

import CommentList from "../Comment/CommentList";
import ItemContent from "./ItemContent";
import Footer from "./Footer";

const ItemInfo = ({ postId }) => {
  const [post, setPost] = useState("");
  const [myId, setMyId] = useState("");
  const [likes, setLikes] = useState("");
  const [count, setCount] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchPostData();
    userData();
    heartData();
  }, []);

  const fetchPostData = async () => {
    try {
      const getData = await getDetail(postId);
      setPost(getData);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        setIsModalVisible(true);
      }
    }
  };

  const userData = async () => {
    try {
      const getData = await getMyProfile();
      setMyId(getData);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        setIsModalVisible(true);
      }
    }
  };

  const heartData = async () => {
    try {
      const heartData = await getLikes(postId);
      setLikes(heartData);
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        setIsModalVisible(true);
      }
    }
  };

  const updateLikes = newLikes => {
    try {
      setLikes(newLikes);
      fetchPostData();
    } catch (err) {
      if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
        setIsModalVisible(true);
      }
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Div>
      {isModalVisible && <TokenRefreshModal />}
      <ItemContent
        sellerNickname={post.sellerNickname}
        school={post.school}
        postTitle={post.postTitle}
        postContent={post.postContent}
        imageResponseDtos={post.imageResponseDtos}
        modifeddate={post.modifiedAt}
      />
      {/* <CommentList postId={postId} postWriter={post.sellerNickname} /> */}
      <Footer
        isLiked={likes.isLiked}
        setIsLiked={updateLikes}
        heartCount={post.heartCount}
        setCount={count.setCount}
        postId={post.postId}
        sellerNickname={post.sellerNickname}
        price={post.price}
        isSold={post.isSold}
        myNickname={myId.nickname}
        setIsModalVisible={setIsModalVisible}
      />
    </Div>
  );
};
export default ItemInfo;

const Div = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 97px;
`;
