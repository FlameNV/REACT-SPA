import React from "react";
import HeaderWrapper from "./Header.styled";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <HeaderWrapper>
            <div>Dealership</div>
            <div>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/catalog">Catalog</NavLink></li>
                    <li><NavLink exact to="/cart">Cart</NavLink></li>
                </ul>
            </div>
        </HeaderWrapper>
    )
};

export default Header;