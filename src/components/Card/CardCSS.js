import styled from 'styled-components'
export const CardStyle = styled.div
    `
position:absolute;
top:106%;
left:0%;
z-index:3;
`
export const CardContainer = styled.div
    `
display:flex;
padding:45px,45px;
justify-content:center;
align-items: baseline;
flex-wrap: wrap;


`
export const CardPicBox = styled.div`

    height: 162px;
    position: relative;



`
export const CardWordBox = styled.div
    `
    text-align:center;
 
    box-sizing: border-box;
    display: block;
    padding: 16px 16px 16px 16px;

`
export const PicStyle = styled.img`
    width:100%;
    height: inherit;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    



`
export const CardBox = styled.div`

   
    margin: 20px 10px 10px 10px;
 
    box-shadow:0px 5px 20px #999;
    transform:scale(1, 1);
    transition: 0.5s;
    &:hover {
      transform:scale(1.03, 1.03);
      box-shadow:0px 12px 27px #999;
    }
    transition: transform .3s ease, -webkit-transform .3s ease;
    border-radius: 8px;
    background-color: #fff;
    width: 356px;
    height: fit-content;
    overflow:hidden;

`

export const Cword = styled.div`

  

  letter-spacing: 0.025em;
    line-height: 1.6666666667;
    margin: 0;
      display: block;
    font-size: 17px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    text-align:left;
`
