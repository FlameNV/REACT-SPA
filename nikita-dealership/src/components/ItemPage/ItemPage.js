import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {
    BuyInfo,
    CarImage,
    InfoContainer,
    InfoText,
    ItemPageWrapper,
    MainInfo,
    StyledBuyButton
} from "./ItemPage.styled";
import car from "../../images/car.png";
import API from "../../APImanager/apimanager";
import {Spin} from "antd";
import {SpinBlock} from "../App/App.styled";

const ItemPage = () => {
    const {id} = useParams();
    const [datta, setDatta] = useState(undefined);

    const load = () => {
        async function getData() {
            let userData = await API.get("/car/" + id);
            setDatta(userData.data);
            return userData.data;
        }
        setTimeout(() => {
            getData();
        }, 1000);
    };

    useEffect(load, []);

    const spiner = () => {
        return (
            <SpinBlock>
                <Spin size="large"/>
            </SpinBlock>
        )
    }

    return (
        <ItemPageWrapper>
            {datta === undefined ? (spiner()) : (
                <React.Fragment>
                    <MainInfo>
                        <CarImage src={car}/>
                        <InfoContainer>
                            <h1>{datta.name}</h1>
                            <InfoText>
                                <div>{datta.description}</div>
                            </InfoText>
                            <div>
                                Horse power: {datta.horsePower}
                            </div>
                        </InfoContainer>
                    </MainInfo>
                    <BuyInfo>
                        <div>Price: {datta.priceInUSD}$</div>
                        <div>
                            <StyledBuyButton type="primary">Add to cart</StyledBuyButton>
                        </div>
                    </BuyInfo>
                </React.Fragment>
            )}
        </ItemPageWrapper>
    )
}

export default ItemPage;