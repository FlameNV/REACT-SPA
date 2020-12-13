import React, {useContext} from "react";
import {ListWrapper} from "./ItemsList.styled";
import Item from "./Item/Item";
import MyContext from "../../../context";
import car from "../../../images/car.png"
import {SpinBlock} from "../../App/App.styled";
import {Spin} from "antd";

export const ItemsList = () => {
    const {data} = useContext(MyContext);

    const load = () => {
        return (
            <SpinBlock>
                <Spin size="large"/>
            </SpinBlock>
        )
    };

    return (
                <ListWrapper>
                    {data.length === 0 ? load() : data.map(({name, description, horsePower, priceInUSD, id,}) => (
                        <Item name={name} description={description} horsePower={horsePower} priceInUSD={priceInUSD}
                              id={id} imageSrc={car} key={id}/>
                    ))}
                </ListWrapper>
    )
};

export default ItemsList;