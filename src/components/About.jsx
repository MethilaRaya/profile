import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-theme-fuchsia-900 text-[#f9fafc]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid-cols-2 gap-8'>
                <div className='sm:text-center pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#f9fafc]'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-justify'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hello, I am Methila. Feel free to explore.</p>
                </div>
                <div>
                    <p>Methila holds a Bachelor of Science degree in Electronics and Telecommunication Engineering, and she is an adept researcher and proficient coder. Currently, she is prospering in her position as a Machine Learning Engineer at Zantrik. Her passion lies in the field of Machine Learning, particularly in Computer Vision. Recently, she has developed a keen interest in medical image analysis and bioinformatics.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About