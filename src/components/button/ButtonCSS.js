import styled from 'styled-components'

export const ButtonStyle = styled.div`
 font-family: 'Montserrat', sans-serif;
        font-size: 1.3333333333rem;
        font-weight: 700;
        letter-spacing: 0.67px;
        line-height: 1;
        margin: 0 0 10px 0;
        text-transform: uppercase;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: #fff;
        border: solid 3px transparent;
        color: #000;
        padding: 10px;
        text-decoration: none;
        -webkit-transition: background-color .2s linear, border-color .2s linear;
        transition: background-color .2s linear, border-color .2s linear;
        width: 60%;
        min-width: 150px;
        max-width: 320px;
        margin-left: auto;
        margin-right: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-radius: 30px;
        background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(white)),-webkit-gradient(linear, left top, left bottom, from(#08a1e7), color-stop(50%, #fff), to(#e41162));
        background-image: linear-gradient(white, white),linear-gradient(#08a1e7 0%, #fff 50%, #e41162 100%);
        background-origin: border-box;
        background-clip: padding-box, border-box;
        -webkit-box-shadow: 0px 4px 0px rgba(0,0,0,0.3);
        box-shadow: 0px 4px 0px rgba(0,0,0,0.3);
        transition: background .5s ease, -webkit-background .5s ease;
        `