import React, {useContext, useState} from "react";
import MyContext from "../../../context";
import {Input, Select, Slider} from "antd";
import {FilterWrapper, StyledButton} from "./Filters.styled";

const { Search } = Input;
const { Option } = Select;

const options = [
    {key: 1, text: "Choice 1", value: 1},
    {key: 2, text: "Choice 2", value: 2},
];

const Filters = ({textValue = 0}) => {
    const {data} = useContext(MyContext);

    const setSearchValueFunction = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    const getMax = () => {
        return Object.values(data).reduce(function (max, current) {
            return Math.max(max, current.priceInUSD);
        }, 0);
    };

    const getComparator = (optionValue) => {
        let comparator;
        if (optionValue == "name") {
            comparator = (a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            };
        } else if (optionValue == "horse_power") {
            comparator = (a, b) => {
                return b.horsePower - a.horsePower;
            };
        }
        return comparator;
    };

    const [optionValue, setOptionValue] = useState();
    const [searchValue, setSearchValue] = useState("");
    const [priceRangeValue, setPriceRangeValue] = useState([0, getMax()]);
    return (
        <MyContext.Consumer>
            {({ dataArr, updataArr, sortArr }) => (
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
                            <Option value="horse_power">horse power</Option>
                        </Select>
                        <div>
                            Price range:
                            <Slider
                                range
                                defaultValue={[0, getMax()]}
                                max={getMax()}
                                style={{width: 200}}
                                onChange={(value) => setPriceRangeValue(value)}
                            />
                        </div>
                    </div>
                    <StyledButton
                    type="primary"
                    onClick={() => {
                        let arr = Object.values(data).filter(
                            (item) =>
                                item.name.toLowerCase().includes(searchValue) &&
                                item.priceInUSD >= priceRangeValue[0] &&
                                item.priceInUSD <= priceRangeValue[1]
                        );
                        updataArr(arr);
                        let comparator;
                        if (optionValue != undefined) {
                            let comparator = getComparator(optionValue);
                            sortArr(arr, comparator);
                        }
                    }}
                    >
                        Apply
                    </StyledButton>
                </FilterWrapper>
            )}
        </MyContext.Consumer>
    )
}

export default Filters;