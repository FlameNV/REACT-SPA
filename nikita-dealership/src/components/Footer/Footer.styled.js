import styled from "styled-components";
import {fontSize} from "../../constants/constants";
import Icon from "@ant-design/icons";

export const FooterWrapper = styled.footer`
    display: flex;
    height: 100px;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f7;
`;

export const IconsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const DividingStrip = styled.div`
    width: 100%;
    height: 1px;
    background-color: black;
`;

export const Rights = styled.div`
    margin: 0 0 0 auto;
    font-size: ${fontSize.fs20};
`;

export const IconBase = styled(Icon)`
    font-size: ${fontSize.fs32};
    margin-left: 10px;
    margin-right: 10px;
`;