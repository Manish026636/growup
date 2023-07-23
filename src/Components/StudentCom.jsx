import React from 'react'

const StudentCom = () => {

    return (
        <div>
            <section class=" bg-white mb-20 ">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">Student community from
                        </h2>
                    </div>

                    <div class="grid items-center max-w-4xl grid-cols-4 mx-auto mt-12 md:mt-20 md:grid-cols-6 gap-x-10 gap-y-16">
                        <div>
                            <img class="object-contain w-full lg:h-20 h-10 mx-auto" src="iitdel.svg" alt="" />
                        </div>

                        <div>
                            <img class="object-contain w-full lg:h-20 h-10 mx-auto" src="iitkha.svg" alt="" />
                        </div>

                        <div>
                            <img class="object-contain w-full lg:h-20 h-10 mx-auto" src="iitroor.svg" alt="" />
                        </div>

                        <div>
                            <img class="object-contain w-full mx-auto lg:h-20 h-10" src="coepPu.svg" alt="" />
                        </div>

                        <div class="hidden md:block">
                            <img class="object-contain w-full lg:h-20 h-10 mx-auto" src="nitkarna.svg" alt="" />
                        </div>

                        <div class="hidden md:block">
                            <img class="object-contain w-full lg:h-20 h-10 mx-auto" src="vit.svg" alt="" />
                        </div>


                    </div>


                </div>
            </section>


        </div>
    )
}

export default StudentCom
