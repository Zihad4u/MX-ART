import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import ChildCard from '../6Card/ChildCard';
import AllCraftCard from './AllCraftCard';
const AllCraftItem = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('https://assignment-10-server-blond-one.vercel.app/allData')
            .then(res => res.json())
            .then(data => {
                setCard(data);
                // console.log(data);
            });
    }, []);
    return (
        <div>
            <div className='flex justify-center mt-4 font-bold text-[15px] sm:text-[35px]' >
                <h3 className="sm:text-[44px] text-[20px] font-bold "><Typewriter
                    words={['All Art & craft Items', 'All Art & craft Items']}
                    loop={6}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></h3>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4" >
                {
                    card.map(cardPass => <AllCraftCard
                        key={cardPass._id}
                        cardPass={cardPass}
                    ></AllCraftCard>)
                }
            </div>
        </div>
    );
};

export default AllCraftItem;