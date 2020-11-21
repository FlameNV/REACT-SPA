import React from "react";
import HeaderWrapper from "./Header.styled";
import {NavLink, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";

const Header = () => {
    return (
        <Router>
            <HeaderWrapper>
                <div>Dealership</div>
                <div>
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/catalog">Catalog</NavLink></li>
                    </ul>
                </div>
            </HeaderWrapper>
            <Switch>
                <Route path="/catalog"><h3>Catalog</h3></Route>
                <Route path="/"><Home/></Route>
            </Switch>
        </Router>
    )
};

export default Header;