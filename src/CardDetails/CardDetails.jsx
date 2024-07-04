// import React from 'react';


import { useLoaderData } from "react-router-dom";

const CardDetails = () => {

    const Data = useLoaderData();
    const { image, item_name, subcategory_Name, short_description, item_description_long, stockStatus,
        customization, processing_time, rating, price } = Data;
    // console.log(Data)
    return (
        <div className="px-4" >
            <div className="w-full h-[680px] mt-4 md:flex  pb-14" >
                {/* left side div */}
                <div className="md:w-[50%] w-[100%]  h-full  flex justify-center items-center" >
                    <img className="w-full rounded-xl object-cover h-full" src={image} alt="" />
                </div>
                {/* right side */}
                <div className="md:w-[50%] mt-3 sm:mt-0 w-[100%] h-full sm:pl-5 bg-[#FFF]" >
                    <h3 className="m-0 sm:text-[40px] text-[20px] font-bold text-[#131313]" >{item_name}</h3>
                    <p className="text-[20px] font-medium text-[#424242]" >Subcategory Name : <span>{subcategory_Name}</span></p>
                    <hr />
                    <p className="text-[20px] font-medium text-[#424242]" ></p>
                    <hr className="text-white" />
                    <p className="font-normal text-[#5a5a5a]  text-[16px] " ><span className="text-[#131313] font-bold" >Description :</span>{item_description_long}{short_description}</p>
                    <div className="lg:flex sm:gap-5 mt-3 " >
                        <p className="font-medium btn rounded-full  text-[#23BE0A]" >Status:<>{stockStatus}</></p>
                        <p className="font-medium btn rounded-full text-[#23BE0A]" >customization:<>{customization}</></p>
                        <p className="font-medium mt-3 lg:mt-0 btn rounded-full text-[#23BE0A]" >processing time:<>{processing_time}</></p>
                    </div>
                    <hr />
                    <div className="mt-4" >
                        <div className="flex gap-[98px] mt-4 " >
                            <p className="text-[#5a5a5a] font-medium" >Rating:{rating}</p>
                            <p className="text-[#131313] sm:text-[16px] text-[10px]  font-semibold" ></p>
                        </div>
                        <div className="flex gap-10 mt-4 " >
                            <p className="text-[#5a5a5a] font-medium" >Price:{price}</p>
                        </div>
                        <div className="flex gap-6 mt-3 " >
                            <button onClick='' className="btn border-dashed" >Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;