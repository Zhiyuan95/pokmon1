import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Button from "../components/button/Button";
import HomePage from "../components/HomePage";
import Video from "../components/video/Video";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}><Button /></Route>
                <Route path={"/homepage"}><HomePage /></Route>
                <Route exact path={"/video"}><Video/></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;