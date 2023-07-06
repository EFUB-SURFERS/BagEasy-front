import styled from "styled-components";

import logo from "../../assets/logo.png";
import revert from "../../assets/revert.png";
import trash from "../../assets/trash.png";

const TopNavBar = () => {
  return (
    <Div>
      <Revert src={revert} />
      <Logo src={logo} />
      <Trash src={trash} />
    </Div>
  );
};
export default TopNavBar;

const Div = styled.div`
  position: relative;

  height: 68px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 58px;
  height: 22px;
`;

const Revert = styled.img`
  margin-left: 10px;
  width: 20px;
  height: 35px;
`;

const Trash = styled.img`
  margin-right: 10px;
  width: 30px;
  height: 38.72px;
`;
