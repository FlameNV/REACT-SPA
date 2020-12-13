import React, {useState, useEffect} from "react";
import {HomeWrapper, CarsWrapper, InfoTitle, StyledCard, StyledCardComponents} from "./Home.styled";
import {Button, Card, Spin} from "antd";
import 'antd/dist/antd.css'
import {NavLink} from "react-router-dom";
import API from "../../APImanager/apimanager";
import {SpinBlock} from "../App/App.styled";
import car from "../../images/car.png";

const Home = () => {
    const {Meta} = Card;
    const [data, setData] = useState(undefined);
    const load = () => {
        async function getData() {
            let userData = await API.get("/car");
            setData(userData.data);
            console.log(data);
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
        );
    };

    const [countOfElements, setCountOfElements] = useState(3);
    return (
        <HomeWrapper>
            <InfoTitle>
                <h1>Choose your dream</h1>
                <p>Our dealership cooperates with brands such as:<br/> Audi, Tesla, BMW, Mercedes, Ford, Toyota, VW</p>
            </InfoTitle>
            <CarsWrapper>
                {data === undefined ? spiner() : data.slice(0, countOfElements).map(({
                                                                                      name,
                                                                                      description,
                                                                                      horsePower,
                                                                                      priceInUSD,
                                                                                      id
                                                                                  }) => (
                        <StyledCard hoverable cover={<img alt="example" src={car}/>} key={id}>
                            <StyledCardComponents>
                                <Meta title={name}/>
                                Description: {description}<br/>
                                Horse power: {horsePower}<br/>
                                Price: {priceInUSD}$
                                <NavLink to={"/item/" + id}>
                                    <Button block type="primary">More</Button>
                                </NavLink>
                            </StyledCardComponents>
                        </StyledCard>
                    )
                )
                }
            </CarsWrapper>
            <Button style={{marginBottom: '20px'}} onClick={() => setCountOfElements(countOfElements + 20)}>View
                More</Button>
        </HomeWrapper>
    );
};

export default Home;