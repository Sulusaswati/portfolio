import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action='https://getform.io/f/442d54d1-92a5-42a6-878d-359db736daaa' className='flex flex-col max-w-[600px] w-full pt-20'>
                <div className='pb-8'>
                    <p className='text-4xl border-b-2 border-pink-600 text-gray-300 inline '>Contact</p>
                    <p className='py-6 text-gray-300'>Submit the form below or shoot me an email - saswati.das05@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2 text-black' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2 text-black' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact