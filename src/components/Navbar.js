import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,

} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Skills'
        },
        {
            id: 4,
            link: 'Portfolio'
        },
        {
            id: 5,
            link: 'Contact'
        },



    ]
    return (
        <div className='flex justify-between items-center fixed px-4 h-20 w-full bg-black text-white'>
            <div>
                <h1 className='text-5xl font-signature ml-2 text-pink-600'>Saswati</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='cursor-pointer px-4 font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link activeClass="active" to={link.toLowerCase()} smooth={true} offset={50} duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            {/*   mobile navbar */}
            <div className='cursor-pointer pr-4 text-gray-500 z-10 md:hidden' onClick={() => setNav(!nav)}>
                {nav ? <MdOutlineClose size={20}></MdOutlineClose> : <GiHamburgerMenu size={20}></GiHamburgerMenu>}
            </div>
            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'flex flex-col justify-start items-center absolute left-0 top-20 w-full h-screen bg-gradient-to-b from-black to-gray-800'}>
                {links.map(({ id, link }) => (
                    <li key={id} className='cursor-pointer px-4 py-6 text-gray-500 text-3xl'>
                        <Link onClick={() => setNav(!nav)} activeClass="active" to={link.toLowerCase()} smooth={true} offset={50} duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}

            </ul>
            {/* social icons */}
            <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
                <ul>
                    {/*   <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-200 flex justify-between items-center  bg-blue-600'>
                        <a className='w-full flex justify-between items-center text-gray-300' href="/">LinkedIn<FaLinkedin size={30}></FaLinkedin></a></li>
 */}
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 p-4'>
                        {/* eslint-disable-next-line */}
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/saswati-das/' target='_blank'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] p-4'>
                        {/* eslint-disable-next-line */}
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/Saswati0510' target='_blank'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] p-4'>
                        {/* eslint-disable-next-line */}
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/' target='_blank'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] p-4'>
                        {/* eslint-disable-next-line */}
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/saswati-das/' target='_blank'
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 p-4'>
                        {/* eslint-disable-next-line */}
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/' target='_blank'
                        >
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar