import React from "react";
import video from './media/videoplayback.mp4'
import {VideoStyle} from "./VideoCSS";
import Card from "../Card/Card";
import Image from "../Image/Image";
import {CardStyle} from "../Card/CardCSS";
import Button from "../button/Button";
import {ButtonStyle} from "../button/ButtonCSS";
import Navbar from "../Nav";

function Video() {
    return (
        <>
            <Image/>
            <ButtonStyle>
                <Button/>
            </ButtonStyle>

            <VideoStyle autoPlay loop mute>
                <source src={video} type="video/mp4"></source>
            </VideoStyle>
            <CardStyle>
                <Card/>
            </CardStyle>
            <Navbar/>
        </>


    );
}

export default Video;




