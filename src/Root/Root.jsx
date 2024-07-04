// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="lg:px-12 p-0 md:p-2 sm:px-2 " >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;