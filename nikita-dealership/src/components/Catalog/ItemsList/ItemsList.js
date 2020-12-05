import React from "react";
import {ListWrapper} from "./ItemsList.styled";
import Item from "./Item/Item";
import MyContext from "../../../context";

const ItemsList = () => {
    return (
        <MyContext.Consumer>
            {({dataArr}) => (
                <ListWrapper>
                    {dataArr.map(({name, description, horsePower,priceInUSD, id, imageSrc}) => (
                        <Item name={name} description={description} horsePower={horsePower} priceInUSD={priceInUSD} id={id} imageSrc={imageSrc}/>
                    ))}
                </ListWrapper>
            )}
        </MyContext.Consumer>
    )
};

export default ItemsList;