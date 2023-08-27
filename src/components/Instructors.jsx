import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const Instructors = () => {
    return (
        <div>
            <p className='text-gray-500 text-center mt-20 font-semibold'>They work Relentlessly</p>
            <h1 className='text-6xl font-bold text-center mt-5'>
            <span className='text-lime-500'>Our</span> Farming Specialists
            </h1>
            <div class="bg-gray-100 flex items-center justify-center gap-5 mt-16">
                <div class="relative w-72 rounded-lg shadow-md p-4 transform transition-transform hover:scale-105 border-2 border-white hover:border-lime-500 transition-border duration-700">
                    <img class="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-white hover:border-lime-500 transition-border duration-500" src="https://orga.wpengine.com/wp-content/uploads/2018/03/team5.jpg" alt="Profile Image" />
                    <h2 class="text-gray-800 text-xl font-semibold mb-2 text-center">Daisy Wilkerson</h2>
                    <p class="text-gray-500 text-center font-semibold">Environmentalist</p>
                    <hr className='text-lime-600 mt-4' />
                    <p class="text-gray-500 text-sm text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ipsa odio quia maxime deserunt ea!</p>
                    <div className='mt-6 flex justify-evenly bg-lime-500 p-2'>
                        <FaFacebookF></FaFacebookF>
                        <FaTwitter></FaTwitter>
                        <FaLinkedin></FaLinkedin>
                    </div>
                </div>
                <div class="relative w-72 rounded-lg shadow-md p-4 transform transition-transform hover:scale-105 border-2 border-white hover:border-lime-500 transition-border duration-700">
                    <img class="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-white hover:border-lime-500 transition-border duration-500" src="https://orga.wpengine.com/wp-content/uploads/2018/03/team6.jpg" alt="Profile Image" />
                    <h2 class="text-gray-800 text-xl font-semibold mb-2 text-center">Lara Harry</h2>
                    <p class="text-gray-500 text-center font-semibold">Soil Specialist</p>
                    <hr className='text-lime-600 mt-4' />
                    <p class="text-gray-500 text-sm text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ipsa odio quia maxime deserunt ea!</p>
                    <div className='mt-6 flex justify-evenly bg-lime-500 p-2'>
                        <FaFacebookF></FaFacebookF>
                        <FaTwitter></FaTwitter>
                        <FaLinkedin></FaLinkedin>
                    </div>
                </div>
                <div class="relative w-72 rounded-lg shadow-md p-4 transform transition-transform hover:scale-105 border-2 border-white hover:border-lime-500 transition-border duration-700">
                    <img class="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-white hover:border-lime-500 transition-border duration-500" src="https://orga.wpengine.com/wp-content/uploads/2018/03/team7.jpg" alt="Profile Image" />
                    <h2 class="text-gray-800 text-xl font-semibold mb-2 text-center">Larry Page</h2>
                    <p class="text-gray-500 text-center font-semibold">Livestock Farmer</p>
                    <hr className='text-lime-600 mt-4' />
                    <p class="text-gray-500 text-sm text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ipsa odio quia maxime deserunt ea!</p>
                    <div className='mt-6 flex justify-evenly bg-lime-500 p-2'>
                        <FaFacebookF></FaFacebookF>
                        <FaTwitter></FaTwitter>
                        <FaLinkedin></FaLinkedin>
                    </div>
                </div>
                <div class="relative w-72 rounded-lg shadow-md p-4 transform transition-transform hover:scale-105 border-2 border-white hover:border-lime-500 transition-border duration-700">
                    <img class="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-white hover:border-lime-500 transition-border duration-500" src="https://orga.wpengine.com/wp-content/uploads/2018/03/team8.jpg" alt="Profile Image" />
                    <h2 class="text-gray-800 text-xl font-semibold mb-2 text-center">Andrea Hopkins</h2>
                    <p class="text-gray-500 text-center font-semibold">Botanist</p>
                    <hr className='text-lime-600 mt-4' />
                    <p class="text-gray-500 text-sm text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ipsa odio quia maxime deserunt ea!</p>
                    <div className='mt-6 flex justify-evenly bg-lime-500 p-2'>
                        <FaFacebookF></FaFacebookF>
                        <FaTwitter></FaTwitter>
                        <FaLinkedin></FaLinkedin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;