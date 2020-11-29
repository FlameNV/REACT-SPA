import React from "react";
import styled from "styled-components";
import {fontSize} from "../../../constants/constants";

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    height: 44px;
    background-color: #333333;
    
    > div:nth-child(1) {
        font-size: ${fontSize.fs24};
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #d6d6d6;
    }
    > div:nth-child(2) {
        flex: 4;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    > div > ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0;
        width:80%;
        height:100%;
        
        list-style-type: none;
    }
    > div > ul > li {
        display: flex;
        align-items: center;
        justify-content: center;
        
        height: 80%;
        width: 20%;
        
    }
    >div > ul > li > a{
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        height: 100%;
        width: 100%;
        
        font-size: ${fontSize.fs20};
        text-decoration: none;
        color: #d6d6d6;
`;

export default HeaderWrapper;