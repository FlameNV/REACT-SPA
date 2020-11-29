import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {AppWrapper} from "./App.styled";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";

const App = () => {
    return (
        <Router>
            <AppWrapper>
                <Header/>
                <Switch>
                    <Route path="/catalog">
                        <Catalog/>
                    </Route>
                    <Route path="/cart">
                        <h3>Items</h3>
                    </Route>
                    <Route path="/item">
                        <h3>Item</h3>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
                <Footer/>
            </AppWrapper>
        </Router>
    )
};

export default App;
