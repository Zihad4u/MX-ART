// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AutoContext } from '../Components/AuthContext';
const UpdateData = () => {
    const { user } = useContext(AutoContext);
    const { id } = useParams();
    const navigate = useNavigate();
    // console.log(id)
    const handleAddData = (e) => {
        e.preventDefault();
        const target = e.target;
        const image = target.imageUrl.value;
        const item_name = target.itemName.value;
        const subcategory_Name = target.categories.value;
        const rating = target.Rating.value;
        const processing_time = target.time.value;
        const customization = target.Customization.value;
        const stockStatus = target.stockStatus.value;
        const email = target.email.value;
        const userName = target.userName.value;
        const short_description = target.description.value;
        const price = target.price.value;
        const addData = {
            image, item_name, subcategory_Name, rating, processing_time, customization, stockStatus, email, userName, short_description, price
        }
        // console.log(addData);
        fetch(`https://assignment-10-server-blond-one.vercel.app/reqUpdate/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addData)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged === true) {
                    Swal.fire({
                        title: 'succesfull',
                        text: 'Update successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    }).then(() => {
                        navigate('/myList');
                    });
                }
            })

    }
    return (
        <div>

            <div className='p-8 max-w-[600px] mx-auto' >
                <div className='flex justify-center pb-4 text-[30px] font-bold' >Update Your Data</div>
                <form onSubmit={handleAddData} className="space-y-4">
                    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-4">
                        <input required
                            type="text"
                            placeholder="image URL"
                            className="w-full p-2 border rounded-md"
                            name='imageUrl'
                        />
                        <input required
                            type="text"
                            placeholder="item name"
                            className="w-full p-2 border rounded-md"
                            name='itemName'
                        />
                    </div>
                    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-4">
                        {/* drop down */}
                        <div className="relative w-full lg:max-w-sm">
                            <select name='categories'
                                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                                defaultValue="" required // Set the default value to an empty string
                            >
                                <option value="" disabled hidden>
                                    Choose a category
                                </option>
                                <option >Landscape Painting</option>
                                <option >Portrait Drawingr</option>
                                <option>Watercolour Painting</option>
                                <option >Oil Painting</option>
                                <option >Charcoal Sketching</option>
                                <option>Cartoon Drawing</option>
                            </select>
                        </div>
                        <input required
                            type="text"
                            placeholder="price"
                            className="w-full p-2 border rounded-md"
                            name='price'
                        />
                    </div>
                    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-4">
                        <input
                            type="text"
                            placeholder="Rating"
                            className="w-full p-2 border rounded-md"
                            name='Rating'
                        />
                        <input
                            type="text"
                            placeholder="processing time"
                            className="w-full p-2 border rounded-md"
                            name='time'
                        />
                    </div>
                    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="relative w-full lg:max-w-sm">
                            <select name='Customization'
                                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                                defaultValue="" required // Set the default value to an empty string
                            >
                                <option value="" disabled hidden>
                                    Customization
                                </option>
                                <option >Yes</option>
                                <option >No</option>
                            </select>
                        </div>
                        <div className="relative w-full lg:max-w-sm">
                            <select name='stockStatus'
                                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                                defaultValue="" required // Set the default value to an empty string
                            >
                                <option value="" disabled hidden>
                                    Stock Status
                                </option>
                                <option >In stock</option>
                                <option >Made to Order</option>
                                <option>Out of stock</option>
                            </select>
                        </div>
                    </div>
                    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-4">
                        <input
                            type="email"
                            placeholder="Emai Address"
                            className="w-full p-2 border rounded-md"
                            name='email'
                            value={user.email}
                        />
                        <input
                            type="text"
                            placeholder="User Name"
                            className="w-full p-2 border rounded-md"
                            name='userName'
                            value={user.displayName}
                        />
                    </div>

                    <textarea required
                        placeholder='Description'
                        rows='5'
                        name='description'
                        className='w-full p-2 border rounded-md'
                    ></textarea>

                    <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded-md'>
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
};

export default UpdateData;