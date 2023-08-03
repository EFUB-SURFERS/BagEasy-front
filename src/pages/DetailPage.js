import { useParams } from "react-router-dom";
//components
import Header from "../components/detail/Header";
import styled from "styled-components";
import ItemInfo from "../components/detail/ItemInfo";

const DetailPage = ({}) => {
  const { postId } = useParams();
  return (
    <Wrapper>
      <Header />
      <ItemInfo postId={postId} />
    </Wrapper>
  );
};
export default DetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
