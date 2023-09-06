import React from 'react'

const Education = () => {
    return (
        <div name='education' className='h-120 sm:h-screen w-full text-[#0F1729]' >
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-justify'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0f1729]'>Education</p>
                    <p className='text-text-small-slate-dark py-4'>I graduated with a Bachelor's degree in <b>Electronics and Telecommunication Engineering</b> from the <a class="underline italic" href="https://ulab.edu.bd/" rel="noreferrer" target="_blank"><b>University of Liberal Arts Bangladesh (ULAB)</b></a> in the year 2018.</p>

                    <p className='text-text-small-slate-dark py-2'>My undergraduate journey began in 2014 with a major in <b>Electronics and Telecommunication Engineering</b>, complemented by a minor in <b>Computer Science</b>. During this time, I undertook a significant research endeavor, focusing on the <b>Design of an Optimized Textile Antenna with Reduced Bending Effects</b>. The motivation for this project stemmed from the observation that when the antenna is worn on the body, its frequency exhibits a significant shift, nearly 10%. To mitigate this issue, I conducted experiments and successfully reduced the frequency shift by approximately 5% by incorporating a polypropylene sheet into the antenna design. Notably, this enhancement also resulted in an increase in the antenna's bandwidth. Subsequently, in <b>2019</b>, I had the privilege of publishing a paper on this innovative work titled <b>Polypropylene Sheet Reinforced Textile Antenna with Reduced Bending Effects</b> in ICAEE.</p>

                    <p className='text-text-small-slate-dark py-2'>A few years ago, I ventured into the world of machine learning, resulting in two significant publications. The first, <b>Design of Inset Fed Rectangular Shaped Microstrip Patch Antenna Using Deep Neural Network</b> published in <b>ICCIT</b>, focused on predicting microstrip patch antenna dimensions with machine learning. This model enables the design of rectangular microstrip patch antennas at any desired frequency.</p>

                    <p className='text-text-small-slate-dark py-2'>My second paper, <b>Computation of Resonant Frequency and Gain from Inset Fed Rectangular Shaped Microstrip Patch Antenna Using Deep Neural Network</b> published in <b>EICT</b>, utilized machine learning to predict antenna resonant frequency and gain. It offers a versatile tool for determining these parameters for inset-fed rectangular microstrip patch antennas, regardless of their dimensions.</p>
                </div>

            </div>
        </div>
    )
}

export default Education