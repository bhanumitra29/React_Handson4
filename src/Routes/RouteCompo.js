import React from "react";
import { BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Contactus from "./Contactus";
import Students from "./Students";
//import { GoogleFont, TypographyStyle } from 'react-typography';

function RouteCompo (){

    
    return(
        <div>
            <BrowserRouter>
                <div className="navbar">
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "white"})} to='/' className="link">Home</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "white"})} to='/students' className="link">Students</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "white"})} to='/contactus' className="link">Contact Us</NavLink>
                </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/contactus" element={<Contactus />} />
            </Routes>


            </BrowserRouter>
        </div>
    )
}

export default RouteCompo;