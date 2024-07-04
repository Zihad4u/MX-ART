// import React from 'react';
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaHourglass, FaCircleDollarToSlot, FaArrowRotateRight, FaPenRuler } from "react-icons/fa6";
import Aos from "aos";
import 'aos/dist/aos.css'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { set } from "react-hook-form";
import { AutoContext } from "../Components/AuthContext";
const LastCard = ({ cardPass }) => {
    const { theme } = useContext(AutoContext);
    const { image, item_name, rating, customization, short_description, price, _id, processing_time, stockStatus } = cardPass;
    useEffect(() => {
        Aos.init();
    }, [])
    const cardClasses = theme === 'dark' ? 'sm:w-full w-[100vw] overflow-hidden  h-full bg-dark shadow-lg' : 'sm:w-full w-[100vw] h-full bg-white shadow-lg overflow-hidden';
    return (
        <div className="hover:transform hover:scale-105 transition-transform duration-300  hover:shadow-xl shadow-lg" >
            <Card data-aos="fade-up" className={cardClasses} >
                <CardHeader floated={false} color="blue-gray">
                    <img
                        src={image}
                        alt="ui/ux review check"
                        className="h-[200px] w-full  object-cover"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    <IconButton
                        size="sm"
                        color="red"
                        variant="text"
                        className="!absolute top-4 right-4 rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6"
                        >
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </IconButton>
                </CardHeader>
                <CardBody>
                    <div className="mb-3 flex justify-between ">
                        <Typography variant="h5" color="blue-gray" className="font-medium">
                            {item_name}
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="flex items-center gap-1.5 font-normal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="-mt-0.5 h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {rating}
                        </Typography>
                    </div>
                    <Typography color="gray">
                        {short_description}
                    </Typography>
                    <div className="group mt-8 flex justify-between items-center gap-3">
                        <Tooltip content={processing_time}>
                            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                <FaHourglass />
                            </span>
                        </Tooltip>
                        <Tooltip content={price}>
                            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                <FaCircleDollarToSlot />
                            </span>
                        </Tooltip>
                        <Tooltip content={stockStatus}>
                            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                <FaArrowRotateRight />
                            </span>
                        </Tooltip>
                        <Tooltip content={customization}>
                            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                <FaPenRuler />
                            </span>
                        </Tooltip>
                    </div>
                </CardBody>
                <NavLink to={`/allArtCraftDetails/${_id}`} className="pt-3 w-full    self-start mt-auto">
                    <Button className="btn bg-black   " size="lg" fullWidth={true}>
                        Details
                    </Button>
                </NavLink>
            </Card>
        </div>
    );
};

export default LastCard;