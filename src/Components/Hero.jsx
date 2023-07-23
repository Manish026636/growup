import React from 'react'
const Hero = () => {
    return (
        <div>
            <div class="container px-6 py-16 mx-auto">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-full">
                            <h1 class="text-4xl font-extrabold text-gray-800 dark:text-white lg:text-5xl">Building India's Largest <span className='text-purple-500'>Student Community</span></h1>

                            <p class="mt-3 text-gray-600 dark:text-gray-400">Join our revolutionary edtech platform where aspirations converge, and students from every corner of India connect, collaborate, and thrive together.</p>

                            <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white  transition-colors duration-300 transform font-semibold bg-[#db005b] rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Join Us</button>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-2/3 h-1/2 lg:max-w-3xl" src="heroill.png" alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero
