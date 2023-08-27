import React from 'react';

const Card = () => {
    return (
        <div className='grid grid-cols-3 mt-10 place-items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://orga.wpengine.com/wp-content/uploads/2018/03/img01.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className='w-28 h-28 -mt-14 bg-white rounded-full mx-auto hover:bg-lime-500'>
                    <img src="https://orga.wpengine.com/wp-content/uploads/2018/03/icon15-1.png" alt="" />
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lime-500 mt-0">ORGANIC APPLES</h2>
                    <p className='mt-3 text-gray-500'>Donec nec justo eget felis facilisis<br /> ferme  ntum. Aliquam porttitor<br /> mauris sit amet orci. Aenean<br /> dignissim pellentesque felis. Morbi <br />in sem quis dui placerat ornare.</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://orga.wpengine.com/wp-content/uploads/2018/03/img02.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className='w-28 h-28 -mt-14 bg-white rounded-full mx-auto hover:bg-lime-500'>
                    <img className='ml-3' src="https://orga.wpengine.com/wp-content/uploads/2018/03/icon13-2.png" alt="" />
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lime-500 mt-0">DUCK FARMING</h2>
                    <p className='mt-3 text-gray-500'>Donec nec justo eget felis facilisis<br /> ferme  ntum. Aliquam porttitor<br /> mauris sit amet orci. Aenean<br /> dignissim pellentesque felis. Morbi <br />in sem quis dui placerat ornare.</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://orga.wpengine.com/wp-content/uploads/2018/03/img03.jpg" />
                </figure>
                <div className='w-28 h-28 -mt-14 bg-white rounded-full mx-auto hover:bg-lime-500'>
                    <img src="https://orga.wpengine.com/wp-content/uploads/2018/03/icon14-2.png" alt="" />
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lime-500 mt-0">FARMFRESH EGGS</h2>
                    <p className='mt-3 text-gray-500'>Donec nec justo eget felis facilisis<br /> ferme  ntum. Aliquam porttitor<br /> mauris sit amet orci. Aenean<br /> dignissim pellentesque felis. Morbi <br />in sem quis dui placerat ornare.</p>

                </div>
            </div>
        </div>
    );
};

export default Card;