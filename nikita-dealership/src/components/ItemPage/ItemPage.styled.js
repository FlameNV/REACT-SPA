import styled from "styled-components";
import { Button } from "antd";

export const ItemPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 400px;
  align-items: center;
`;

export const BuyInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  
  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    font-size: 20px;
    font-weight: 700;
    margin: 40px;
    height: 100%;
  }
`;

export const StyledBuyButton = styled(Button)`
  height: auto;
  border-radius: 10px;
  font-size: 20px;
`;


export const CarImage = styled.img`
  display: flex;
  align-items: center;
  margin-right: 40px;
  height: 300px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-left: 10px;
  height: 300px;
  width: 500px;
  font-size: 18px;
  > div {
    display: flex;
    justify-content: space-around;
    width: 110%;
  }
`;

export const InfoText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  > div {
    font-weight: 700;
  }
`;
