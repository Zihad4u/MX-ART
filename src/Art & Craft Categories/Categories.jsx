import { useEffect, useState } from "react";
import CardCat from "./CardCat";
import { Typewriter } from "react-simple-typewriter";



const Categories = () => {
    const [user, setUser] = useState([]); // Initialize user state with an empty array
    useEffect(() => {
        // Fetch data when the component mounts
        fetch('https://assignment-10-server-blond-one.vercel.app/allCategories')
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div>
            <div className="flex items-center pt-7 pb-7 flex-col gap-1 " >
                <h3 className="sm:text-[44px] text-[20px] font-bold "><Typewriter
                    words={['Art & Craft Categories', 'Art & Craft Categories']}
                    loop={6}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></h3>
                <p className="text-center text-[18px] font-medium" >Here is our painting six categories</p>
            </div>
            <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3' >
                {user.map(item => <CardCat key={item.id} item={item}></CardCat>)} {/* Add key prop */}
            </div>
        </div>
    );
};

export default Categories;