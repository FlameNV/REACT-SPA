import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import MyContext from "../../context";
import {
    BuyInfo,
    CarImage,
    InfoContainer,
    InfoText,
    ItemPageWrapper,
    MainInfo,
    StyledBuyButton
} from "./ItemPage.styled";

export const ItemPage = (props) => {
    const {id} = useParams();
    const {data} = useContext(MyContext);
    const item_element = data[id];
    return (
        <ItemPageWrapper>
            <MainInfo>
                <CarImage src={item_element.imageSrc}/>
                <InfoContainer>
                    <h1>{item_element.name}</h1>
                    <InfoText>
                        <div>{item_element.description}</div>
                    </InfoText>
                    <div>
                        Horse power: {item_element.horsePower}
                    </div>
                </InfoContainer>
            </MainInfo>
            <BuyInfo>
                <div>Price: {item_element.priceInUSD}$</div>
                <div>
                    <StyledBuyButton type="primary">Add to cart</StyledBuyButton>
                </div>
            </BuyInfo>
        </ItemPageWrapper>
    )
}

export default ItemPage;