import React from 'react'


const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video absolute pt-[20%] px-20 text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <h1 className='py-6 text-xl w-1/4'>{overview}</h1>
            <div className='flex gap-x-4'>
                <button className='bg-white text-black p-4 px-16 text-lg rounded-lg flex items-center space-x-2 hover:bg-opacity-80'>
                    <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span>Play</span>
                </button>
                <button className='bg-gray-500 text-white p-4 px-16 text-lg rounded-lg flex items-center bg-opacity-80 space-x-2'> 

                    <span>More Info</span></button>
            </div>
        </div>
    )
}

export default VideoTitle
