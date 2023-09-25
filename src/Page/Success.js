/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Success = () => {
    return (
        <div>
            <div className='flex flex-col w-screen text-gray-700 h-screen gap-[4rem] justify-center items-center'>
                <div className='flex flex-col gap-[1rem]'>
                    <img className='w-[16rem] mx-auto' src='/success.jpg' alt='image' />
                    <h1 className='text-2xl font-semibold'>Welcome to AdmitKard</h1>
                    <p className='text-gray-500'>In order to provide you with a custom experience,<br /><span>We need to ask you a few questions.</span></p>
                </div>
                <div className='flex justify-center gap-1 flex-col' >
                    <p className='bg-yellow-400 text-white px-10 py-1 rounded-full cursor-pointer hover:bg-yellow-600'>Get Started</p>
                    <p className='text-sm text-gray-500'>*This will only take 5 mins</p>
                </div>
            </div>
        </div>
    )
}

export default Success