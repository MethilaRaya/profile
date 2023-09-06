import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#fff]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            {/* <p className='text-text-indigo mt-8 sm:mt-0'>Hi, my name is</p> */}
            <h1 className='text-4xl sm:text-7xl font-bold text-text-large-indigo-950'>Methila Biswas Raya</h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-text-medium-gray'>Machine Learning Engineer</h2>
            <p className='text-text-small-gray py-4 max-w-[700px]'>Welcome to my digital domain! I'm a dedicated Machine Learning Engineer on a perpetual quest for the latest advancements in Computer Vision. My work ethic is unwavering, driven by an unquenchable thirst for knowledge and a commitment to lifelong learning. When I'm not immersed in the world of algorithms and data, you can find me indulging in my favorite hobby – losing myself in the soothing melodies of music. Join me on this journey where technology meets tenacity, and passion harmonizes with progress.</p>
            {/* <div>
                <button className='text-[#fff] group bg-theme-fuchsia-900 px-6 py-3 my-2 flex items-center hover:bg-[#fff] duration-200 hover:text-[#0F1729]'>View Work 
                <span>
                <HiArrowNarrowRight className='group-hover:translate-x-2 duration-200 ml-4'/>
                </span>
                </button>
            </div> */}
        </div>
    </div>
  )
}

export default Home