import React from "react";
import {FooterWrapper, IconsWrapper, DividingStrip, Rights, IconBase} from "./Footer.styled";
import {FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined} from "@ant-design/icons";

const Footer = () => {
    return (
        <FooterWrapper>
            <IconsWrapper>
                <IconBase component={YoutubeOutlined}/>
                <IconBase component={TwitterOutlined}/>
                <IconBase component={InstagramOutlined}/>
                <IconBase component={FacebookOutlined}/>
            </IconsWrapper>
            <DividingStrip/>
            <Rights>@All rights reserved</Rights>
        </FooterWrapper>
    )
};

export default Footer;