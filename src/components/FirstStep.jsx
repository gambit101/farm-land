import { LuFlower2 } from "react-icons/lu";
import { GiCow } from "react-icons/gi";

const FirstStep = () => {
    return (
        <div className="mt-14">
            <h3 className="text-center">Step into the World of Organics!</h3>
            <h1 className="text-center font-bold text-6xl mt-3"><span className="text-lime-500">Let the first step</span> be firmly anchored!</h1>
            <h3 className="text-center mt-7">Organic farming offers an alternative agricultural system.  It initially began in the early in the 20th century.  The advent of pesticides <br /> brought in its benefits and pitfalls simultaneously.  It is more healthy relying on compost <br /> manure, green manure, and bone meal.</h3>

            {/* grid */}

            <div className="grid grid-cols-3 gap-10 mx-20 mt-20">
                <div className="flex gap-3">
                    {/* <LuFlower2 className="text-9xl pb-20 text-lime-500"></LuFlower2> */}
                    <img className="h-16" src="https://orga.wpengine.com/wp-content/uploads/2018/03/icon3.png" alt="" />
                    <div>
                        <h2 className="text-lg font-bold hover:text-lime-500 transition duration-300">Organic Agriculture</h2>
                        <hr className="w-[60px] mt-2" />
                        <h4 className="text-gray-500 mt-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi id minima explicabo </h4>
                    </div>
                </div>
                <div className="flex gap-3">
                <img className="h-16" src="https://orga.wpengine.com/wp-content/uploads/2018/03/icon1.png" alt="" />
                    <div>
                    <h2 className="text-lg font-bold hover:text-lime-500 transition duration-300">Organic Agriculture</h2>
                        <h4 className="text-gray-500 mt-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi id minima explicabo libero quia temporibus laborum velit,</h4>
                    </div>
                </div>
                <div className="flex gap-3">
                <img className="h-16" src="https://orga.wpengine.com/wp-content/uploads/2018/03/icon2.png" alt="" />
                    <div>
                    <h2 className="text-lg font-bold hover:text-lime-500 transition duration-300">Organic Agriculture</h2>
                        <h4 className="text-gray-500 mt-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi id minima explicabo libero quia temporibus laborum </h4>
                    </div>
                </div>
                <div className="flex gap-3">
                <img className="h-16" src="https://orga.wpengine.com/wp-content/uploads/2018/03/icon5.png" alt="" />
                    <div>
                    <h2 className="text-lg font-bold hover:text-lime-500 transition duration-300">Organic Agriculture</h2>
                        <h4 className="text-gray-500 mt-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi id minima explicabo libero quia temporibus laborum </h4>
                    </div>
                </div>
                <div className="flex gap-3">
                <img className="h-16" src="https://orga.wpengine.com/wp-content/uploads/2018/03/icon4.png" alt="" />
                    <div>
                    <h2 className="text-lg font-bold hover:text-lime-500 transition duration-300">Organic Agriculture</h2>
                        <h4 className="text-gray-500 mt-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi id minima explicabo libero quia temporibus </h4>
                    </div>
                </div>
                <div className="flex gap-3">
                <img className="h-16" src="https://orga.wpengine.com/wp-content/uploads/2018/03/icon6.png" alt="" />
                    <div>
                    <h2 className="text-lg font-bold hover:text-lime-500 transition duration-300">Organic Agriculture</h2>
                        <h4 className="text-gray-500 mt-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi id minima explicabo libero quia temporibus </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstStep;