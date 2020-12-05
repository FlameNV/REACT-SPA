import React from "react";
import ItemsList from "./ItemsList/ItemsList";
import Filters from "./Filters/Filters";

const Catalog = () => {
    return (
        <div>
            <Filters/>
            <ItemsList/>
        </div>
    )
};

export default Catalog;