import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {AppWrapper} from "./App.styled";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import MyContext from "../../context";
import ItemPage from "../ItemPage/ItemPage";
import Cart from "../Cart/Cart";
import {GlobalContextProvider} from "../../Redux/provider";
import CartForm from "../Purchase/CartForm/CartForm";
import Success from "../Purchase/Success/Success";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.updataArr = (arr) => {
            this.setState(() => ({
                data: arr,
            }));
        };

        this.sortArr = (arr, compareFunc) => {
            this.setState(() => ({
                data: arr.sort(compareFunc)
            }));
        };

        this.state = {
            data: [],
            updataArr: this.updataArr,
            sortArr: this.sortArr,
        };
    }

    render() {
        return (
            <Router>
                <GlobalContextProvider>
                <MyContext.Provider value={this.state}>
                    <AppWrapper>
                        <Header/>
                        <Switch>
                            <Route path="/catalog">
                                <Catalog/>
                            </Route>
                            <Route path="/cart">
                                <Cart/>
                            </Route>
                            <Route path="/cart-form">
                                <CartForm/>
                            </Route>
                            <Route path="/success">
                                <Success/>
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
                </GlobalContextProvider>
            </Router>
        );
    }
}

export default App;
