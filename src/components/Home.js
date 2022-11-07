import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import myPic from '../assets/my_pic_2.jpg'

const Home = () => {
    return (
        <div name='home' className='w-full md:h-screen bg-[#0a192f] pt-20'>
            {/* container */}
            <div className='max-w-screen-lg mx-auto px-8 flex flex-col  justify-center w-full h-full pt-20 md:pt-5'>
                <div className='grid md:grid-cols-3 w-full justify-center items-center'>
                    <div className='w-full h-full md:col-span-2'>
                        <p className='text-pink-600 text-lg'>My name is</p>
                        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Saswati Das</h1>
                        <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>
                            I'm a Full Stack Developer.
                        </h2>
                        <p className='text-[#8892b0] py-4 max-w-[700px]'>
                            I’m a web developer developer specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I’m focused on
                            building responsive full-stack web applications.
                        </p>
                        <div>
                            <Link activeClass="active" to='about' smooth={true} offset={50} duration={500}>
                                <button className=' group text-white flex items-center border-2 px-4 py-2 my-2 hover:bg-pink-600 hover:border-pink-600'>
                                    Portfolio <HiArrowNarrowRight className='ml-2 group-hover:rotate-90 duration-300'></HiArrowNarrowRight>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full h-full'>
                        <img src={myPic} alt="profile" className='w-[60%] md:w-[90%] rounded-md shadow-lg mt-5 md:mt-0' />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Home