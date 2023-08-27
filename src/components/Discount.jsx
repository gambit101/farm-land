import React from 'react';

const Discount = () => {
    return (
        <div className='flex mt-10 '>
            <img className='w-1/2 h-[650px]' src="https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
            <div className='bg-lime-500 w-1/2  flex items-center'>
                <div className='text-center mx-auto bg-white p-10'>
                    <h3 className='mx-auto mt-2 text-lg'>Special Offers</h3>
                    <h1 className='text-6xl font-bold mt-6'><span className='text-lime-500'>GET</span> 30% OFF</h1>
                    <h3 className='mt-6'>Description</h3>
                    <h5 className='mt-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Magnam, deleniti <br />culpa fugiat iste vitae aliquid porro <br /> pariatur impedit nemo tenetur.</h5>
                    <button class="relative overflow-hidden bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
                        <span class="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
                        GET NOW
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Discount;