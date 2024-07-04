// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AutoContext } from "../Components/AuthContext";
import LastCard from "./LastCard";
const CategoriesCard = () => {
    const { loading } = useContext(AutoContext);
    const [user, setUser] = useState();
    const { id } = useParams();
    const Data = useLoaderData();
    useEffect(() => {
        // Filter the data based on the condition data.subcategory_Name === id
        const filteredData = Data.filter(item => item.subcategory_Name === id);
        setUser(filteredData);
    }, [Data, id]); // Add Data and id to the dependency array to run the effect when they change
    const item_name = user ? user.item_name : null;
    // console.log(user);
    return (
        <div>
            <div className="flex justify-center items-center font-bold sm:text-[30px] text-[20px] mt-12 pb-7" >
                <p>All Data by categories</p>
            </div>
            <div className="grid grid-cols-3" >
                {user && user.map(cardPass => <LastCard cardPass={cardPass} key={cardPass.id}></LastCard>)}
            </div>
        </div>
    );
};

export default CategoriesCard;