import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='absolute w-full aspect-video pt-[30%] md:pt-[15%] px-6 md:px-24 text-white bg-gradient-to-r from-black'>
            <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
            <div className='hidden md:inline-block'>
            <p className=' py-6 w-2/5 lg:w-2/4 text-lg line-clamp-4 lg:line-clamp-6'>{overview}</p>
            </div>
            <div className='my-4'>
                <button className='bg-white text-black px-3 md:px-12 py-1 md:py-4 text-xl rounded-lg hover:bg-opacity-80'>▶ Play</button>
                <button className='bg-gray-500 text-white mx-2 px-3 md:px-12 py-1 md:py-4 text-xl rounded-lg bg-opacity-50'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle