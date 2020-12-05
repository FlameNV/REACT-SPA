import React, {useContext, useState} from "react";
import {HomeWrapper, CarsWrapper, InfoTitle, StyledCard, StyledCardComponents} from "./Home.styled";
import {Button, Card} from "antd";
import 'antd/dist/antd.css'
import MyContext from "../../context";
import {NavLink} from "react-router-dom";

const Home = () => {
    const {data} = useContext(MyContext);
    const {Meta} = Card;
    const [countOfElements, setCountOfElements] = useState(3);
    return (
        <HomeWrapper>
            <InfoTitle>
                <h1>Choose your dream</h1>
                <p>Our dealership cooperates with brands such as:<br/> Audi, Tesla, BMW, Mercedes, Ford, Toyota, VW</p>
            </InfoTitle>
            <CarsWrapper>
                {Object.values(data).slice(0, countOfElements).map(({
                                                                        imageSrc,
                                                                        name,
                                                                        description,
                                                                        horsePower,
                                                                        priceInUSD,
                                                                        id
                                                                    }) => (
                        <StyledCard hoverable cover={<img alt="example" src={imageSrc}/>} key={id}>
                            <StyledCardComponents>
                                <Meta id={id}/>
                                {name}<br/>
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
            <Button style={{marginBottom: '20px'}} onClick={() => setCountOfElements(countOfElements + 20)}>View More</Button>
        </HomeWrapper>
    );
};

export default Home;