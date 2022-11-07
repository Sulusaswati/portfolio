import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className='max-w-screen-lg mx-auto px-8 h-full flex flex-col justify-center items-center'>
                <div className='w-full grid grid-cols-2 gap-8'>
                    {/* about div */}
                    <div className='sm:text-right pb-8'>
                        <p className=' text-4xl font-bold border-b-4 border-pink-600 inline '>About</p>
                    </div>
                    {/* blank div */}
                    <div></div>

                </div>
                <div className='w-full grid sm:grid-cols-2 gap-8'>
                    {/* greeting! */}
                    <div className='sm:text-right text-4xl font-bold'>Hi! I am Saswati. Nice to meet you. Please take a look around.</div>
                    {/* description */}
                    <div>
                        I am passionate about building excellent web applications that improves
                        the lives of those around me. Resourceful
                        and experienced with varied forms of practical data, including image, text, network
                        data, and web-data. What would you do if you had
                        a software expert available at your fingertips?
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About