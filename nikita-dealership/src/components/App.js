import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {AppWrapper} from "./App.styled";

const App = () => {
    return (
        <AppWrapper>
            <Header/>
            <Footer/>
        </AppWrapper>
    )
};

export default App;
