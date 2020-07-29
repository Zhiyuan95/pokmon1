import React from "react";
import {CardPicBox, CardWordBox, CardBox, PicStyle, Cword, CardContainer, } from "./CardCSS";
import pic1 from '../Card/materials/6_17_1_2x.jpg'
import pic2 from '../Card/materials/6_2_03_2x.jpg'
import pic3 from '../Card/materials/6_2_02.jpg'
import pic4 from '../Card/materials/6_2_01_2x.jpg'
import pic5 from '../Card/materials/01_09_08_2x.jpg'
import pic6 from '../Card/materials/01_09_01-en_2x.jpg'
import Fade from "react-reveal/src/in-and-out/Fade";
import {Animationstyle} from "./Animation";

const cardname = [
    {PicSrc: pic1,
        text: "The Isle of Armor is yours to explore with a Pokémon Sword Expansion Pass or Pokémon Shield Expansion Pass!",
        alt1: "1"} ,

    {PicSrc: pic2,
    text: "A chance to get Mythical Pokémon Zeraora as a Shiny Pokémon",
    alt2: "2"},

    {PicSrc: pic3,
    text: "Expansion Pass early-purchase bonus!",
    alt3: "3"},

    {PicSrc: pic4,
    text: "A chance to get Mythical Pokémon Zeraora as a Shiny Pokémon",
    alt4: "4"},

    {PicSrc: pic5,
    text: "Expansion Pass early-purchase bonus!",
    alt5: "5"},

    {PicSrc: pic6,
    text: "Explore the Isle of Armor and Crown Tundra with the Pokémon Sword and Pokémon Shield Expansion Pass!",
    alt6: "6"},
]

function CardText(props){
    return (
        <CardWordBox>
            <Cword>{props.paragraph}</Cword>
        </CardWordBox>
    );
}

function CardImage(props){
    return (
        <CardPicBox>
            <PicStyle src={props.url} alt={props.description}/>
        </CardPicBox>
    );
}


function Card(){
    return(
        <>
            <CardContainer>
                {cardname.map((card,index)=>(
                   <Fade top>
                    <CardBox key={index}>
                        <CardImage url={card.PicSrc} description={card.alt}/>
                        <CardText paragraph={card.text}/>
                    </CardBox>
                   </Fade>
                )
                )}
            </CardContainer>
        </>
    );
}

export default Card;

