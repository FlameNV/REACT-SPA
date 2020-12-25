import React from "react";
import {
    StyledSuccess,
    StyledSuccessText,
    StyledSuccessButton,
    StyledSuccessNavLink
} from "./Success.styled";

const Success = () => {
    return (
        <StyledSuccess>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Checkmark.svg/1200px-Checkmark.svg.png"/>
            <StyledSuccessText>Thank you for purchase!</StyledSuccessText>
            <StyledSuccessNavLink exact to="/catalog">
                <StyledSuccessButton>Back to catalog</StyledSuccessButton>
            </StyledSuccessNavLink>
        </StyledSuccess>
    );
};

export default Success;