"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import 'swiper/swiper-bundle.css';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-left ">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-7xl font-bold text-lime-500">Livestock</h1>
                            <h2 className="mb-5 text-4xl font-semibold text-lime-500">Naturally</h2>
                            <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="relative overflow-hidden bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
                        <span class="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
                        GET NOW
                    </button>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565647952915-9644fcd446a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-left ">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-7xl font-bold text-lime-500">Livestock</h1>
                            <h2 className="mb-5 text-4xl font-semibold text-lime-500">Naturally</h2>
                            <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="relative overflow-hidden bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
                        <span class="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
                        GET NOW
                    </button>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-left ">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-7xl font-bold text-lime-500">Livestock</h1>
                            <h2 className="mb-5 text-4xl font-semibold text-lime-500">Naturally</h2>
                            <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="relative overflow-hidden bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
                        <span class="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
                        GET NOW
                    </button>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533062618053-d51e617307ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-left ">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-7xl font-bold text-lime-500">Livestock</h1>
                            <h2 className="mb-5 text-4xl font-semibold text-lime-500">Naturally</h2>
                            <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="relative overflow-hidden bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
                        <span class="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
                        GET NOW
                    </button>
                        </div>
                    </div>
                </div></SwiperSlide>
                <div className="autoplay-progress" slot="container-end" ref={progressCircle}>

                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};



export default Hero;