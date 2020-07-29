import React from "react";
import Button from "./button/Button";
import Navbar from "./Nav";


function HomePage (){
    return(
        <>
        <Navbar/>
        <Button buttonName="Where to buy" />
        <Button buttonName={"Load more"} />
        <Button buttonName={"subscribe"}/>
        <Button buttonName={"United States"}/>
        </>
    );

}
export default HomePage;

