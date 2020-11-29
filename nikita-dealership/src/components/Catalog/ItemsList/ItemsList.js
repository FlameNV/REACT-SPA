import React from "react";
import {ListWrapper} from "./ItemsList.styled";
import Item from "./Item/Item";

const data = [
    {
        id: 1,
        name: "Audi RS6 Avant",
        description: "Ultra fast car with 600 horse power",
        priceInUSD: 80000,
        imageSrc: "https://autoua.net/media/uploads/audi/audi-rs-6-avant-2019.jpg"
    },
    {
        id: 2,
        name: "Tesla Model S",
        description: "Ultra fast car with 750 horse power",
        priceInUSD: 45000,
        imageSrc: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    {
        id: 3,
        name: "BMW M3",
        description: "Ultra fast car with 430 horse power",
        priceInUSD: 40000,
        imageSrc: "https://cdn.motor1.com/images/mgl/6M8Gr/s1/bmw-m3-rendering.jpg"
    },
    {
        id: 4,
        name: "LADA 2101",
        description: "Ultra fast car with 80 horse power",
        priceInUSD: 1000,
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e5/1980_-_VAZ_2101.JPG"
    },
    {
        id: 5,
        name: "VW Passat B7",
        description: "Ultra fast car with 150 horse power",
        priceInUSD: 12000,
        imageSrc: "https://img1.automoto.ua/overview/Volkswagen-Passat-B7-2015-6e3-huge-659.jpg"
    },
    {
        id: 6,
        name: "VW Golf VI",
        description: "Ultra fast car with 120 horse power",
        priceInUSD: 9000,
        imageSrc: "https://autopoisk24.net/wp-content/uploads/2014/01/vw-golf-vi.jpg"
    }
];

const ItemsList = () => {
    return (
        <ListWrapper>
            {data.map(({name, description, priceInUSD, id, imageSrc}) => (
                <Item name={name} description={description} priceInUSD={priceInUSD} id={id} imageSrc={imageSrc}/>
            ))}
        </ListWrapper>
    )
};

export default ItemsList;