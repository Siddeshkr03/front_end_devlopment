import React from "react";
import { BrowserRouter, Route, Routes }  from "react-router-dom"
import SecondCode from "../apr-27/SecondCode";
import FirstCode from "../apr-27/FirstCode";
import MobileView from "../may-1/MobileView";
import { mobiles } from "./mobile";
import Login from "../may-8/Login";

function Routing() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<MobileView mobileList={mobiles} />}></Route>
                    <Route path="/second" element={<SecondCode />}></Route>
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Routing;