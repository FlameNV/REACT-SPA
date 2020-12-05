import React from "react";

const MyContext = React.createContext({
    data: {},
    dataArr: [],
    updata: (arr) => {},
    sortArr: (arr, compareFunc) => {},
});

export default MyContext;