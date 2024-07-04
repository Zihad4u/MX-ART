// import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { useEffect, useState } from "react";
import ChildCard from "./ChildCard";

const ParentCard = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('https://assignment-10-server-blond-one.vercel.app/6Card')
            .then(res => res.json())
            .then(data => {
                setCard(data);
                // console.log(data);
            });
    }, []);
    // console.log(card)
    return (
        <div className="mt-10" >
            <div className="flex items-center flex-col gap-1 " >
                <h3 className="sm:text-[44px] text-[20px] font-bold "><Typewriter
                    words={['Craft Items', 'Our Product']}
                    loop={6}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></h3>
                <p className="text-center text-[18px] font-medium" >Here is our six best paintings for you.You can check it and order now</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" >
                {
                    card.map(cardPass => <ChildCard
                        key={cardPass._id}
                        cardPass={cardPass}
                    ></ChildCard>)
                }
            </div>
        </div>
    );
};

export default ParentCard;