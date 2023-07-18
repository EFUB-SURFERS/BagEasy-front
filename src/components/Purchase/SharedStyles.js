import styled from 'styled-components';

export const ListItemContainer = styled.div`
  display: flex;
  margin: 20px;
`;

export const ListImage = styled.img`
  width: 143px;
  height: 120px;
  margin-right: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 0;
  align-items: center;
  width: 200px;
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const TrashImage = styled.img`
  width: 30px;
  height: 38px;
`;

export const Words = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Subtitle = styled.div`
  color: #8f8a8a;
  margin-bottom: 10px;
`;

export const Price = styled.div`
  font-size: 16px;
`;

export const Check = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckButton = styled.button`
  background-color: ${({ completed }) => (completed ? '#262424' : '#cbcbcb')};
  border: none;
  border-radius: 8px;
  width: 66px;
  height: 30px;
  font-size: 8px;
  color: #eeeeee;
  margin-right: 10px;
`;

export const Divider = styled.div`
  width: 350px;
  height: 0.5px;
  margin: 0 auto;
  background-color: #d9d9d9;
`;