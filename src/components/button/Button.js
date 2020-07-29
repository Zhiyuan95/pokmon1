import React from "react";
import {ButtonStyle} from "./ButtonCSS";


function Button(props){
    return(
        <ButtonStyle>
            {props.buttonName}
        </ButtonStyle>
    );
}
export default Button;

