import React from "react";
import {HomeWrapper, CarsWrapper, InfoTitle, StyledCard, StyledCardComponents} from "./Home.styled";
import {Button, Card} from "antd";
import 'antd/dist/antd.css'

const Home = () => {
    let data = [
        {
            name: "Audi RS6 Avant",
            description: "Ultra fast car with 600 horse power",
            priceInUSD: 80000,
            imageSrc: "https://autoua.net/media/uploads/audi/audi-rs-6-avant-2019.jpg"
        },
        {
            name: "Tesla Model S",
            description: "Faster electric car ever",
            priceInUSD: 45000,
            imageSrc: "https://www.ixbt.com/img/n1/news/2020/9/2/Tesla-Model_S_large.jpg"
        },
        {
            name: "BMW M3",
            description: "Car for everyone",
            priceInUSD: 40000,
            imageSrc: "https://cdn.motor1.com/images/mgl/EMNGz/s1/bmw-m3-rndering.jpg"
        }
    ];
    const {Meta} = Card;
    return (
        <HomeWrapper>
            <InfoTitle>
                <h1>Choose your dream</h1>
                <p>Our dealership cooperates with brands such as:<br/> Audi, Tesla, BMW, Mercedes, Ford, Toyota, VW</p>
            </InfoTitle>
            <CarsWrapper>
                {
                    data.map(({imageSrc, name, description, priceInUSD}, idx) => (
                            <StyledCard hoverable cover={<img alt="example" src={imageSrc}/>} id={idx}>
                                <StyledCardComponents>
                                    <Meta idx={idx}/>
                                    {name}<br/>
                                    Description: {description}<br/>
                                    Price: {priceInUSD}$
                                    <Button type="primary">More</Button>
                                </StyledCardComponents>
                            </StyledCard>
                        )
                    )
                }
            </CarsWrapper>
            <Button>View More</Button>
        </HomeWrapper>
    );
};

export default Home;