import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css'
const CardCat = ({ item }) => {
    const { subcategory_name, image } = item
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <NavLink data-aos="fade-up" to={`/categoriesCard/${subcategory_name}`} className="card bg-base-100  hover:transform hover:scale-105 transition-transform duration-300  hover:shadow-xl shadow-lg ">
            <figure><img src={image}alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{subcategory_name}</h2>
            </div>
        </NavLink>
    );
};

export default CardCat;