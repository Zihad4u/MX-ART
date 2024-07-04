// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
import { AutoContext } from "../Components/AuthContext";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../Firebase/Firebase";
// object fit cover
const Navbar = () => {
    const { user, loading, handletheme } = useContext(AutoContext)
    // theme control
    const handleToggle = (e) => {
        handletheme(e)
    }

    const headNav = <>
        <li className="font-semibold" ><NavLink to="/" >Home</NavLink></li>
        <li className="font-semibold" ><NavLink to="/addItem" >Add Craft Item</NavLink></li>
        <li className="font-semibold" ><NavLink to="/allArtCraft" >All Art & craft Items</NavLink></li>
        <li className="font-semibold" ><NavLink to="/myList" >My Art&Craft List</NavLink></li>
    </>
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                toast.success('Logout successfully')
            })
            .catch(() => {
                toast.error('Error try again')
            })
    }
    return (
        <div>
            <div className="navbar bg-base-100 sm:p-2 p-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {headNav}
                        </ul>
                    </div>
                    <div className="flex items-center sm:gap-1 w-[48px]" >

                        <img className="w-[12px] rounded-full h-[12px] sm:w-[48px] sm:h-[48px]" src="https://i.ibb.co/wR6bJhs/Colorful-Rounded-Ink-Smoke-Frame-Smoke-Ink-Ink-Smoke-PNG-Transparent-Clipart-Image-and-PSD-File-for.jpg" alt="" />
                        <a className="btn btn-xs sm:btn-ghost sm:font-bold sm:text-xl text-[8px]">MX-ART</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {headNav}
                    </ul>
                </div>

                <div className="navbar-end" >
                    <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle ml-4 theme-controller" />
                    {loading ? <span className="loading loading-infinity loading-lg"></span> : <>
                        {
                            user ? <div className=" relative" >
                                <img id="clickable" className="h-12 w-12 rounded-full" src={user.photoURL} alt="" />
                                <Tooltip anchorSelect="#clickable" clickable style={{ zIndex: 999 }}>
                                    <button className="btn" >{user.displayName}</button>
                                    <div className="" >
                                        <h3 onClick={handleLogout} className="btn w-full mt-2" >Log Out</h3>
                                    </div>
                                </Tooltip>
                            </div> : <div className="navbar-end sm:gap-2 gap-[2px] ">
                                <Link to='/login' ><a className="btn btn-ghost sm:px-[16px] p-2 text-[14px] sm:text-base font-bold">Login</a></Link>
                                <Link to="/register" ><a className="btn btn-ghost p-2 sm:px-[16px] text-[14px] sm:text-base font-bold">Register</a></Link>
                            </div>
                        }
                    </>}
                </div>
            </div>
        </div>
    );
};


export default Navbar;