import React, {useContext, useState, useEffect} from "react";
import MyContext from "../../../context";
import {Input, Select, Slider} from "antd";
import {FilterWrapper, StyledButton} from "./Filters.styled";
import API from "../../../APImanager/apimanager"

const {Option} = Select;

const Filters = () => {
    const {updataArr} = useContext(MyContext);

    const [optionValue, setOptionValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [priceRangeValue, setPriceRangeValue] = useState([0, 100000]);

    const load = () => {
        async function getData() {
            let userData = await API.get(
                "/car?min=" +
                priceRangeValue[0] +
                "&max=" +
                priceRangeValue[1] +
                "&sortBy=" +
                optionValue
            );
            let arr = userData.data.filter(
                (item) =>
                    item.name.toLowerCase().includes(searchValue));
            updataArr(arr);
            console.log(userData);
        }

        updataArr([]);
        setTimeout(() => {
            getData();
        }, 1000)
    };

    useEffect(load, []);

    return (
        <MyContext.Consumer>
            {() => (
                <FilterWrapper>
                    <div>
                        <Input
                            placeholder="Enter name"
                            style={{width: 200}}
                            onChange={(e) => {
                                setSearchValue(e.target.value.toLowerCase());
                            }}/>
                        <Select
                            placeholder="Sort by"
                            style={{width: 120}}
                            allowClear
                            onChange={(value) => setOptionValue(value)}>
                            <Option value="name">name</Option>
                            <Option value="horsePower">horse power</Option>
                        </Select>
                        <div>
                            Price range:
                            <Slider
                                range
                                defaultValue={[0, 100000]}
                                max={100000}
                                style={{width: 200}}
                                onChange={(value) => setPriceRangeValue(value)}
                            />
                        </div>
                    </div>
                    <StyledButton
                        type="primary"
                        onClick={() => {
                            load();
                        }}
                    >
                        Apply
                    </StyledButton>
                </FilterWrapper>
            )}
        </MyContext.Consumer>
    );
};

export default Filters;