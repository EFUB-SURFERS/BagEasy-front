import React, { useState } from "react";
import Header from "../components/Common/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Item from "../components/ItemList/Item";

const ItemListPage = () => {
  const [allFilter, setAllFilter] = useState(true);
  const navigate = useNavigate();
  const onToggle = () => {
    setAllFilter(prev => !prev);
  };
  return (
    <Root>
      <Header />
      <Container>
        <ButtonWrapper>
          <ChatButton onClick={() => navigate("/chats")}>채팅</ChatButton>
          <MyPageButton onClick={() => navigate("/mypage")}>
            마이페이지
          </MyPageButton>
          <Checkbox type="checkbox" id="toggle" onChange={onToggle} />
          <Label htmlFor="toggle">양도중</Label>
        </ButtonWrapper>
        <List>
          <Item />
          <Item />
          <Item />
          <Item />
        </List>
      </Container>
    </Root>
  );
};

const Root = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ButtonWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex: 0;
`;

const ChatButton = styled.button``;

const MyPageButton = styled.button``;

const Checkbox = styled.input``;

const Label = styled.label``;

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default ItemListPage;
