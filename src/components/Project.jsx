import React from 'react'
import { FaAward } from 'react-icons/fa';

const Keyword = ({ text }) => (
    <div className="inline-block m-2 p-2 rounded-full border-2 bg-theme-fuchsia-900 text-text-plain-white">
        <p className="text-xs">{text}</p>
    </div>
);

const Project = () => {
    return (
        <div name='project' className='h-120 w-full text-[#0F1729]' >
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-justify'>
                {/* <div>
                    <p className='text-2xl font-bold inline border-b-4 border-[#0f1729]'>Research Interests</p>
                    <p className='text-text-small-slate-dark py-4'>Machine Learning, Computer Vision, Semantic Recognition and Understanding, Medical Imagine Analysis, Bioinformatics </p>
                </div> */}

                <div>
                    <p className='text-2xl font-bold inline border-b-4 border-[#0f1729]'>Projects</p>
                </div>    

                
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>1. Brain Tumour Detection </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>I have undergone training to implement the YOLOv4 object detection model for the purpose of detecting brain tumors. </p>
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://github.com/MethilaRaya/Brain-Tumour-Detection" rel="noreferrer" target="_blank">Github project link ⮕</a>
                    </div>
                </div>
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>2. Langchain based Data Indexing of Facebook Business Page </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>Developed a React application to retrieve information from a chosen Facebook page and then save that information as embedded vectors inside a Langchain pipeline. </p>
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://github.com/MethilaRaya/fb_data_scrapping" rel="noreferrer" target="_blank">Github project link ⮕</a>
                    </div>
                </div>
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>3. Autobot </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>Developed customized chatbot by utilizing react app and ChatGPT</p>
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://autobot.zantrik.com/" rel="noreferrer" target="_blank">Project link ⮕</a>
                    </div>
                </div>
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>4. Digital Driver </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>The application, driven by artificial intelligence, prioritizes passenger and driver safety.  My involvement included activities like data preparation, augmentation and training YOLOv4 and YOLOv5 object detection models to locate arms. </p>
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://driver.zantrik.com/" rel="noreferrer" target="_blank">Project link ⮕</a>
                    </div>
                </div>
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>5. Digital Garage </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>A system that can detect and record vehicles and their license plates as they enter a garage using the Kivy framework also has the ability to identify and differentiate between different kinds of vehicles.</p>
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://drive.google.com/drive/folders/11aLf4lHtKwPjJPh68cuKCaz_kmqImUpc?usp=sharing" rel="noreferrer" target="_blank">Project link ⮕</a>
                    </div>
                    
                </div>
                
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>6. Car Parts Detection, Parts Segmentation, Damage Identification </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>The YOLACT architecture, known for instance segmentation, was employed to detect car damage.</p>
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://drive.google.com/drive/folders/1owVcpPunI4R7gTma-C_szJQoIqI8y3Kk?usp=sharing" rel="noreferrer" target="_blank">Project link ⮕</a>
                    </div>
                </div>
                
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>7. Autonomous Car </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>An Arduino-based experiment was conducted in which a vehicle demonstrated autonomous movement and the ability to adjust its path when encountering obstacles.</p>
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://drive.google.com/drive/folders/1qPWRPgyjmfvJ-F0aS9WHR8f_tJZw2yPP?usp=sharing" rel="noreferrer" target="_blank">Project link ⮕</a>
                    </div>
                </div>
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>8. Creation of Bluetooth Communication and Android controlled Robo-Car </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>This Arduino-based project utilized Bluetooth technology to enable remote control of a vehicle.</p>
                </div>
                
            </div>
        </div>
    )
}

export default Project