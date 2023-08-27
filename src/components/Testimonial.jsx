"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div className='w-2/3 mx-auto my-20'>
            <Swiper
                style={{
                    '--swiper-navigation-color': 'lime',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'background-image':
                            'url(https://swiperjs.com/demos/images/nature-1.jpg)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>

                    <div>
                        <div className="text flex px-10 gap-3" data-swiper-parallax="-100">
                            <FaQuoteLeft className='text-9xl pb-20'></FaQuoteLeft>
                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>

                        </div>
                        <hr className='text-lime-500 border-lime-500 mt-5 w-3/4 mx-auto' />
                        <div className='flex gap-5 items-center w-2/3 mx-auto'>
                            <img className='h-28 w-28 rounded-full mt-5 border-4 border-lime-500' src="https://orga.wpengine.com/wp-content/uploads/2015/06/clients7.jpg" alt="" />
                            <p className='text-lg font-bold text-lime-500 '>Garry holmes</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div>
                        <div className="text flex px-10 gap-3" data-swiper-parallax="-100">
                            <FaQuoteLeft className='text-9xl pb-20'></FaQuoteLeft>
                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>

                        </div>
                        <hr className='text-lime-500 border-lime-500 mt-5 w-3/4 mx-auto' />
                        <div className='flex gap-5 items-center w-2/3 mx-auto'>
                            <img className='h-28 w-28 rounded-full mt-5 border-4 border-lime-500' src="https://orga.wpengine.com/wp-content/uploads/2015/06/clients7.jpg" alt="" />
                            <p className='text-lg font-bold text-lime-500 '>Garry holmes</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div>
                        <div className="text flex px-10 gap-3" data-swiper-parallax="-100">
                            <FaQuoteLeft className='text-9xl pb-20'></FaQuoteLeft>
                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>

                        </div>
                        <hr className='text-lime-500 border-lime-500 mt-5 w-3/4 mx-auto' />
                        <div className='flex gap-5 items-center w-2/3 mx-auto'>
                            <img className='h-28 w-28 rounded-full mt-5 border-4 border-lime-500' src="https://orga.wpengine.com/wp-content/uploads/2015/06/clients7.jpg" alt="" />
                            <p className='text-lg font-bold text-lime-500 '>Garry holmes</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;