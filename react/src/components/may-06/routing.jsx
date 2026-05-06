import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FirstCode from "../FirstCode";
import SecondCode from "../SecondCode";

function Routing(){
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstCode/>}></Route>
                <Route path="/second" element={<SecondCode/>}></Route>
                
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;