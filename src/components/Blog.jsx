
const Blog = () => {
    return (
        <div className="mt-20">
            <h3 className="text-center">All News Around Us</h3>
            <h1 className="text-6xl font-bold text-center mt-5 mb-20"><span className="text-lime-500">Our</span> Blog</h1>
            <div className="grid grid-cols-3 gap-10 mx-20 mb-20">
                <div class="max-w-md overflow-hidden shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-lime-200 relative">
                    <img class="w-full" src="https://orga.wpengine.com/wp-content/uploads/2015/06/blog3-540x360.jpg" alt="Card Image" />
                    <div class="border-4 border-transparent absolute inset-0 transition duration-300 ease-in-out hover:border-lime-500"></div>
                    <div class="px-6 py-4 relative">
                        <p className="text-xs text-gray-500">Posted on June 18, 2015 /  2 /  ram</p>
                        <h2 class="text-xl font-semibold mb-2 mt-2">Card Title</h2>
                        <p class="text-gray-500 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div class="absolute inset-0 bg-lime-500 opacity-0 hover:opacity-25 transition duration-300 ease-in-out"></div>
                        <button class="relative overflow-hidden bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
                            <span class="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
                            Read More
                        </button>
                    </div>
                </div>
                <div class="max-w-md overflow-hidden shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-lime-200 relative">
                    <img class="w-full" src="https://orga.wpengine.com/wp-content/uploads/2015/06/blog2-540x360.jpg" alt="Card Image" />
                    <div class="border-4 border-transparent absolute inset-0 transition duration-300 ease-in-out hover:border-lime-500"></div>
                    <div class="px-6 py-4 relative">
                        <p className="text-xs text-gray-500">Posted on June 18, 2015 /  2 /  ram</p>
                        <h2 class="text-xl font-semibold mb-2 mt-2">Card Title</h2>
                        <p class="text-gray-500 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div class="absolute inset-0 bg-lime-500 opacity-0 hover:opacity-25 transition duration-300 ease-in-out"></div>
                        <button class="relative overflow-hidden bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
                            <span class="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
                            Read More
                        </button>
                    </div>
                </div>
                <div class="max-w-md overflow-hidden shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-lime-200 relative">
                    <img class="w-full" src="https://orga.wpengine.com/wp-content/uploads/2015/06/blog3-540x360.jpg" alt="Card Image" />
                    <div class="border-4 border-transparent absolute inset-0 transition duration-300 ease-in-out hover:border-lime-500"></div>
                    <div class="px-6 py-4 relative">
                        <p className="text-xs text-gray-500">Posted on June 18, 2015 /  2 /  ram</p>
                        <h2 class="text-xl font-semibold mb-2 mt-2">Card Title</h2>
                        <p class="text-gray-500 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div class="absolute inset-0 bg-lime-500 opacity-0 hover:opacity-25 transition duration-300 ease-in-out"></div>
                        <button class="relative overflow-hidden bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
                            <span class="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-10">
                <img className="h-96" src="https://orga.wpengine.com/wp-content/uploads/2018/03/img04.jpg" alt="" />
                <div>
                    <h1 className="text-3xl font-extrabold text-lime-500">Looking to do Organic Farming?</h1>
                    <p className="mt-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nam ad explicabo officia<br /> consequatur eos? Deleniti tempore  ullam quod reprehenderit fugit.</p>
                   
                </div>
                <button class="relative overflow-hidden bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
                        <span class="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
                        Submit Your Resume
                    </button>
            </div>
        </div>
    );
};

export default Blog;