import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {ButtonWrapper, ItemContent, ItemImage, ItemName, ItemWrapper} from "./Item.styled";
import {Card, Button} from "antd";
import 'antd/dist/antd.css';
import MyContext from "../../../../context";

const Item = (props) => {
    const {dataArr} = useContext(MyContext);
    const {Meta} = Card;
    return (
        <ItemWrapper hoverable bodyStyle={{padding: 0}}>
            <Meta id={props.id}/>
            <ItemImage src={props.imageSrc}/>
            <ItemName>{props.name}</ItemName>
            <ItemContent>
                Description: {props.description}<br/>
                Horse power: {props.horsePower}<br/>
                Price: {props.priceInUSD}$<br/>
            </ItemContent>

            <ButtonWrapper>
                <NavLink exact to={"/item/" + props.id}>
                    <Button block type="primary" size={'large'}>More</Button>
                </NavLink>
            </ButtonWrapper>
        </ItemWrapper>
    )
};

export default Item;