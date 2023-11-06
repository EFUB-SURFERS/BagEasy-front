import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Common/Header.js";
import styled from "styled-components";
import ItemInfo from "../components/detail/ItemInfo";
import MyPageModal from "../components/ItemList/MyPageModal.js";

const DetailPage = ({}) => {
  const { postId } = useParams();
  const [isMypageModalVisible, setIsMypageModalVisible] = useState(false);

  return (
    <Wrapper>
      {isMypageModalVisible && (
        <MyPageModal
          setIsMypageModalVisible={setIsMypageModalVisible}
          isMypageModalVisible={isMypageModalVisible}
        />
      )}
      <Header isMenu={true} setIsMypageModalVisible={setIsMypageModalVisible} />
      <ItemInfo postId={postId} />
    </Wrapper>
  );
};
export default DetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
