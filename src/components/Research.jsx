import React from 'react'
import { FaAward } from 'react-icons/fa';

const Keyword = ({ text }) => (
    <div className="inline-block m-2 p-2 rounded-full border-2 bg-theme-fuchsia-900 text-text-plain-white">
        <p className="text-xs">{text}</p>
    </div>
);

const Research = () => {
    return (
        <div name='research' className='h-120 w-full text-[#0F1729]' >
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-justify'>
                <div>
                    <p className='text-2xl font-bold inline border-b-4 border-[#0f1729]'>Research Interests</p>
                    <p className='text-text-small-slate-dark py-4'>Machine Learning, Computer Vision, Semantic Recognition and Understanding, Medical Imagine Analysis, Bioinformatics </p>
                </div>
                <div className="border-t-2 border-theme-fuchsia-900 w-full my-2"></div>

                <div>
                    <p className='text-2xl font-bold inline border-b-4 border-[#0f1729]'>Publications</p>
                </div>
                
                    

                {/* <div className="border-t-2 border-theme-fuchsia-900 w-full my-2"></div> */}
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>⦿ Computation of Resonant Frequency and Gain from Inset Fed Rectangular Shaped Microstrip Patch Antenna Using Deep Neural Network </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>International Conference on Electrical Information and Communication Technology (EICT), 2019 </p>
                    <div className='ml-2'>
                        <Keyword text="Microstrip patch antenna" />
                        <Keyword text="Multilayer perceptron" />
                        <Keyword text="Root mean squared error" />
                        <Keyword text="Mean absolute percentage error" />
                    </div>
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://ieeexplore.ieee.org/abstract/document/9068758" rel="noreferrer" target="_blank">Paper ⮕</a>
                    </div>
                </div>
                {/* <div className="border-t-2 border-theme-fuchsia-900 w-full my-2"></div> */}
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>⦿ Design of Inset Fed Rectangular Shaped Microstrip Patch Antenna Using Deep Neural Networks </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>International Conference on Computer and Information Technology (ICCIT), 2019 </p>
                    <div className='ml-2'>
                        <Keyword text="Microstrip patch antenna" />
                        <Keyword text="Multilayer perceptron" />
                        <Keyword text="Root mean squared error" />
                        <Keyword text="Mean absolute error" />
                    </div>
                    {/* <div className="border-t-2 border-theme-fuchsia-900 w-full my-2"></div> */}
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://ieeexplore.ieee.org/abstract/document/9038284" rel="noreferrer" target="_blank">Paper ⮕</a>
                    </div>
                </div>
                {/* <div className="border-t-2 border-theme-fuchsia-900 w-full my-2"></div> */}
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>⦿ Polypropylene Sheet Reinforced Textile Antenna with Reduced Bending Effects </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>International Conference on Advances in Electrical Engineering (ICAEE), 2019 </p>
                    <div className='ml-2'>
                        <Keyword text="Microstrip antenna" />
                        <Keyword text="Bending effect" />
                        <Keyword text="Polypropylene sheet" />
                        <Keyword text="Jeans" />
                        <Keyword text="Return Loss" />
                    </div>
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://ieeexplore.ieee.org/abstract/document/8975580" rel="noreferrer" target="_blank">Paper ⮕</a>
                       
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Research