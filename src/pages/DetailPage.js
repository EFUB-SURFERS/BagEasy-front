import { useParams } from "react-router-dom";
import Header from "../components/Common/Header.js";
import styled from "styled-components";
import ItemInfo from "../components/detail/ItemInfo";

const DetailPage = ({}) => {
  const { postId } = useParams();
  return (
    <Wrapper>
      <Header isMenu={true} />
      <ItemInfo postId={postId} />
    </Wrapper>
  );
};
export default DetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
