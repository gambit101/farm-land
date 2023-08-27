import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Resources = () => {
    return (
        <div className='flex justify-center gap-8 mt-16'>
            <div>
                <img src="https://orga.wpengine.com/wp-content/uploads/2018/03/img05.png" alt="" />
            </div>
            <div>
                <p className='text-gray-500 mt-20 font-semibold'>Let us resolve to go green</p>
                <h1 className='text-4xl font-bold  mt-3'>
                    <span className='text-lime-500'>Resources </span> for Farming
                </h1>
                <p className=' mt-7 font-semibold'>Go green, go natural....we love to help you!</p>
                <p class="text-gray-500 text-sm mt-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas <br /> ipsa odio quia maxime deserunt ea! Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. Fugit, libero.</p>
                <hr className='text-lime-500 border-lime-500 mt-5' />
                <div className='flex gap-2'> 
                    <FaHeart className='mt-4'></FaHeart>
                    <p className='mt-3'>Let us protect the environment</p>
                </div>
                <div className='flex gap-2'> 
                    <FaHeart className='mt-4'></FaHeart>
                    <p className='mt-3'>Preserve it the way it was</p>
                </div>
                <div className='flex gap-2'> 
                    <FaHeart className='mt-4'></FaHeart>
                    <p className='mt-3'>We owe it to the world</p>
                </div>
                <div className='flex gap-2'> 
                    <FaHeart className='mt-4'></FaHeart>
                    <p className='mt-3'>No chemicals, No fumes!</p>
                </div>
                
            </div>
        </div>
    );
};

export default Resources;