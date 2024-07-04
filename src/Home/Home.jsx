// import React from 'react';
import ParentCard from '../6Card/ParentCard';
import Categories from '../Art & Craft Categories/Categories';
// import Footer from '../Footer/Footer';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';
import Contact from '../contract/Contact';

const Home = () => {
    return (
        <div>
            <Slider/>
            <ParentCard/>
            <Categories/>
            <Review></Review>
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;