
import Aos from "aos";
import 'animate.css';
import 'aos/dist/aos.css'
import { useContext, useEffect } from "react";
import { AutoContext } from "../Components/AuthContext";
const Ratting = () => {
    useEffect(() => {
        Aos.init();
    }, [])
}
const Review = () => {
    const { theme } = useContext(AutoContext);
    const cardClasses = theme === 'dark' ? 'mt-9 bg-black flex px-10 text-center flex-col justify-center gap-3 items-center h-auto w-full md:w-[40%] rounded-xl' : 'mt-9 bg-[#e4e4e4] flex px-10 text-center flex-col justify-center gap-3 items-center h-auto w-full md:w-[40%] rounded-xl';
    return (
        <div className="px-2" >
            <div data-aos="fade-up" className="flex justify-center mt-20" >
                <p className=" animate__animated animate__fadeInUpBig text-[32px] font-bold" >Our Clients Reviews & Testimonials</p>
            </div>
            <div data-aos="fade-right" className="md:ml-20 mt-14 " >
                <div className={cardClasses} >
                    <img className="btn-circle mt-2 h-[80px] w-[80px] object-cover" src="https://i.ibb.co/ZHHVxqd/pexels-andrea-piacquadio-943084.jpg" alt="" />
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                    </div>
                    <p>I recently purchased a Painting through this website, and I couldn't be happier with my decision. The Painting was exactly as described, and the entire process was smooth and hassle-free. The team was incredibly helpful and responsive to all my inquiries. I highly recommend them to anyone looking to buy a painting</p>
                    <p className="font-semibold pb-4" >Sara Ali</p>
                </div>
            </div>
            <div data-aos="fade-up" className="flex justify-end mt-9 md:mr-20" >
                <div className={cardClasses} >
                    <img className="btn-circle mt-2 h-[80px] w-[80px] object-cover" src="https://i.ibb.co/H4C73Gh/pexels-mohamed-abdelghaffar-771742.jpg" alt="" />
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                    </div>
                    <p>I'm so grateful for the wonderful experience I had buying my new painting. The property exceeded my expectations, and the attention to detail from the team was exceptional. From start to finish, they guided me through the process with professionalism and expertise. I'm now happily settled painting into my  home, thanks to their assistance</p>
                    <p className="font-semibold pb-4" >Samuel Sakh</p>
                </div>
            </div>
            <div className="md:ml-20" >
                <div data-aos="fade-right" className={cardClasses} >
                    <img className="btn-circle mt-2 h-[80px] w-[80px] object-cover" src="https://i.ibb.co/tHbsDxm/pexels-andrea-piacquadio-774909.jpg" alt="" />
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                    </div>
                    <p>I had been searching for the perfect oil painting for months, and I finally found it through this website. The painting was exactly what I was looking for, and the views are absolutely breathtaking. The entire transaction was seamless, and the team went above and beyond to ensure everything went smoothly. I'm thrilled with my purchase and would highly recommend their services.</p>
                    <p className="font-semibold pb-4" >Dua Lipa</p>
                </div>
            </div>
            <div className="md:flex md:justify-end" >
                <div data-aos="fade-up" className={cardClasses} >
                    <img className="btn-circle mt-2 h-[80px] w-[80px] object-cover" src="https://i.ibb.co/C9RgrSq/pexels-pixabay-415829.jpg" alt="" />
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                    </div>
                    <p>My family and I recently purchased a painting through this platform, and we couldn't be happier with our new painting. The property was exactly as described. The team was incredibly helpful throughout the entire process, answering all our questions and addressing any concerns promptly. We're grateful for their assistance in finding our best panting.</p>
                    <p className="font-semibold pb-4" >Testa Rani</p>
                </div>
            </div>
        </div>
    );
};

export default Review;