import React from "react";
import image1 from '../Image/materias/home-char-sword.png'
import image2 from '../Image/materias/home-char-shield.png'
import {LeftImageStyle, RightImageStyle} from "./ImageCSS";




function Image() {
    return(
     <>

             <LeftImageStyle src={image1}/>

             <RightImageStyle src={image2}/>
     </>

    );
}

export default Image;