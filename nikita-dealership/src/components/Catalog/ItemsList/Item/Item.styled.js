import styled from "styled-components";
import {fontSize} from "../../../../constants/constants"
import {Card} from "antd";

export const ItemWrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    margin: 20px auto 20px auto;
    border-radius: 10px;
    background-color: #ececec;
    `;

export const ItemImage = styled.img`
    display: flex;
    width: 500px;
    height: 300px;
    border-radius: 10px 10px 0 0;
    `;

export const ItemName = styled.div`
    display: flex;
    justify-content: center;
    font-size: ${fontSize.fs28};
    font-weight: 500;
    `;

export const ItemContent = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
    height: 100px;
    font-size: ${fontSize.fs20};
    `;

export const ButtonWrapper = styled.div`
    padding-bottom: 10px;
    width: 200px;
    margin: auto;
    `;