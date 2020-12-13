import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {AppWrapper} from "./App.styled";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import MyContext from "../../context";
import ItemPage from "../ItemPage/ItemPage";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.updataArr = (arr) => {
            this.setState(() => ({
                data: arr,
            }));
        };

        this.state = {
            data: [],
            updataArr: this.updataArr
        };
    }

    render() {
        return (
            <Router>
                <MyContext.Provider value={this.state}>
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
