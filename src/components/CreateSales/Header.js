import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = ({ onRegisterButtonClick }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Delete
        onClick={() => {
          navigate(-1);
        }}
      >
        X
      </Delete>
      <Done onClick={onRegisterButtonClick}>완료</Done>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  height: 117px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
`;

const Delete = styled.div`
  display: flex;
  width: 36px;
  height: 23px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-left: 11px;
  padding-top: 76px;
  padding-bottom: 18px;
`;

const Done = styled.button`
  border: 0;
  outline: 0;
  background: none;
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-right: 15px;
  margin-top: 76px;
  margin-bottom: 19px;
`;
