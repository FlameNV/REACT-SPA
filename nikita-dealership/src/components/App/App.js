import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {AppWrapper} from "./App.styled";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import MyContext from "../../context";
import ItemPage from "../ItemPage/ItemPage";

const data = {
    1: {
        id: 1,
        name: "Audi RS6 Avant",
        description: "Ultra fast car with 600 horse power",
        horsePower: 600,
        priceInUSD: 80000,
        imageSrc: "https://autoua.net/media/uploads/audi/audi-rs-6-avant-2019.jpg"
    },
    2: {
        id: 2,
        name: "Tesla Model S",
        description: "Ultra fast car with 750 horse power",
        horsePower: 750,
        priceInUSD: 45000,
        imageSrc: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
    },
    3: {
        id: 3,
        name: "BMW M3",
        description: "Ultra fast car with 430 horse power",
        horsePower: 430,
        priceInUSD: 40000,
        imageSrc: "https://cdn.motor1.com/images/mgl/6M8Gr/s1/bmw-m3-rendering.jpg"
    },
    4: {
        id: 4,
        name: "LADA 2101",
        description: "Ultra fast car with 80 horse power",
        horsePower: 80,
        priceInUSD: 1000,
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e5/1980_-_VAZ_2101.JPG"
    },
    5: {
        id: 5,
        name: "VW Passat B7",
        description: "Ultra fast car with 150 horse power",
        horsePower: 150,
        priceInUSD: 12000,
        imageSrc: "https://img1.automoto.ua/overview/Volkswagen-Passat-B7-2015-6e3-huge-659.jpg"
    },
    6: {
        id: 6,
        name: "VW Golf VI",
        description: "Ultra fast car with 120 horse power",
        horsePower: 120,
        priceInUSD: 9000,
        imageSrc: "https://autopoisk24.net/wp-content/uploads/2014/01/vw-golf-vi.jpg"
    },
};

let dataArr = Object.values(data);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.updataArr = (arr) => {
            this.setState(() => ({
                dataArr: arr,
            }));
        };

        this.sortArr = (arr, compareFunc) => {
            this.setState(() => ({
                dataArr: arr.sort(compareFunc),
            }));
        };

        this.state = {
            data: data,
            dataArr: dataArr,
            updataArr: this.updataArr,
            sortArr: this.sortArr,
        };
    }

    render() {
        return (
            <Router>
                <MyContext.Provider value={this.state}>
                    {" "}
                    <AppWrapper>
                        <Header/>
                        <Switch>
                            <Route path="/catalog">
                                <Catalog/>
                            </Route>
                            <Route path="/cart">
                                <h3>Items</h3>
                            </Route>
                            <Route path="/item/:id">
                                <ItemPage/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                        <Footer/>
                    </AppWrapper>
                </MyContext.Provider>
            </Router>
        );
    }
}

export default App;
