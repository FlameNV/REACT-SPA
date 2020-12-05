import styled from "styled-components";
import {fontSize} from "../../constants/constants";
import {Card} from "antd";

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    align-items: center;
`;

export const InfoTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-size: 100%;
    width: 100%;
    height: 600px;
    background-image: url(https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/bhp/hero/desktop/Dodge-Charger-q1-bhp-hero-srt-1.jpg.image.1440.jpg);
    
    >h1 {
    margin-top: 200px;
    margin-left: 150px;
    color: white;
    font-size: ${fontSize.fs40};
    }
    
    >p {
    color: white;
    margin-left: 150px;
    font-size: ${fontSize.fs24}
    }
`;

export const CarsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 60px;
    width: 90%;
`;

export const StyledCardComponents = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: ${fontSize.fs20};   
`;

export const StyledCard = styled(Card)`
    width: 340px;
    height: 420px;
    border-radius: 20px;
    background-color: #ececec;
  margin: 0 auto 20px 0;
`;