"use client"
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Count = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='flex justify-evenly gap-10 my-20'>
            <div className='border-2 p-10 border-lime-500 rounded-xl' data-aos='flip-right'>
                    {counterOn && <CountUp className='text-5xl font-bold text-center' start={0} end={130} duration={2} delay={0}></CountUp>} <span className='text-3xl text-center font-bold'>+</span> <br /><span className='text-lg font-bold mt-3'>ORGANIC ORCHARDS</span>
                </div>
                <div className='border-2 p-10 border-lime-500 rounded-xl' data-aos='flip-right'>
                    {counterOn && <CountUp className='text-5xl font-bold text-center' start={0} end={15} duration={2} delay={0}></CountUp>} <span className='text-3xl font-bold'>+</span> <br /><span className='text-lg font-bold mt-3'>PLANT NURSERIES</span>
                </div>
                <div className='border-2 p-10 border-lime-500 rounded-xl' data-aos='flip-right'>
                    {counterOn && <CountUp className='text-5xl font-bold text-center' start={0} end={13} duration={2} delay={0}></CountUp>} <span className='text-3xl font-bold'>+</span> <br /><span className='text-lg font-bold mt-3'>YEARS OF FARMING</span>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default Count;