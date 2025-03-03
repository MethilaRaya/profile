import React from 'react'
import ServiceWebWork from '../assets/servicewebtemplate.png';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <div name='experience' className='w-full bg-theme-fuchsia-900 text-[#f9fafc]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#f9fafc] text-[#f9fafc]'>Working Experience</p>
        </div>

        <div className="container mx-auto">
        <ExperienceItem
            date="November 2024- December 2024"
            dateColor="#f9fafc"
            name="Python and Data Science Instructor (Part Time)"
            company="EDGE Bangladesh"
            description="I was responsible to instruct on topics related to Data Science including theoretical concept, practical appliances and real world implementations."
          />

          <ExperienceItem
            date="September 2020 - December 2024"
            dateColor="#f9fafc"
            name="Machine Learning Engineer"
            company="Zantrik"
            description="My primary responsibilities were investigating appropriate deep learning networks, preparing deployment pipelines, and training the networks. I concentrated on Computer Vision Research and Development, where I developed an advanced model for vehicle detection, damage assessment, and license plate recognition. This enabled precise identification, damage evaluation, and efficient tracking. I also contributed to enhancing safety through arm analysis and developed an intuitive chatbot for streamlined customer interactions."
          />

          <ExperienceItem
            date="June 2020 - August 2020"
            dateColor="#f0abfc"
            name="Machine Learning Developer Internship"
            company="Zantrik"
            description="My responsibilities included data preprocessing and annotation tasks. Additionally, I successfully underwent a 4-month training program in Deep Learning Computer Vision, which was conducted by LICT and NUS (Leveraging ICT for Employment and Growth of the IT-ITES Industry)."
          />

          <ExperienceItem
            date="February 2020 - August 2020"
            dateColor="#f0abfc"
            name="Lecturer"
            company="Bangladesh Institue of Science and Technology (BIST)"
            description="In charge of delivered instruction in the field of Electronics and Communication Engineering. The courses I have instructed include:  
⦿ Electrical Instrumentation and Measurements             
⦿ Digital Systems Lab 
⦿ Antenna and Wave Propagation                    
⦿ Computer Networking"
          />

            <ExperienceItem
            date="October 2019 - January 2020"
            dateColor="#f0abfc"
            name="Teaching Assistant"
            company="University of Liberal Arts Bangladesh (ULAB)"
            description="I was responsible for conducting laboratory sessions, supervising examinations, and providing support to faculty members in the Departments of Electrical & Electronic Engineering and Electronics & Telecommunication Engineering. Assisted courses are:  
⦿ Electronics Devices and Circuits I Lab             
⦿ Microwave and Radar Engineering Lab"
          />

            <ExperienceItem
            date="June 2018 - September 2018"
            dateColor="#f0abfc"
            name="Teaching Assistant"
            company="University of Liberal Arts Bangladesh (ULAB)"
            description="I was responsible for conducting laboratory sessions, supervising examinations, and providing support to faculty members in the Departments of Electrical & Electronic Engineering and Electronics & Telecommunication Engineering. Assisted courses are:  
⦿ Chemistry Lab           
⦿ Antenna and Wave Propagation Lab
⦿ Optical Fiber Communications Lab"
          />


          {/* Repeat this for other resume items */}
        </div>
        {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${ServiceWebWork})`}} className='shadow-lg group shadow-[#000] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-150 duration-200'></div>
                <div style={{backgroundImage: `url(${ServiceWebWork})`}} className='shadow-lg group shadow-[#000] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-150 duration-200'></div>
                <div style={{backgroundImage: `url(${ServiceWebWork})`}} className='shadow-lg group shadow-[#000] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-150 duration-200'></div>
                <div style={{backgroundImage: `url(${ServiceWebWork})`}} className='shadow-lg group shadow-[#000] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-150 duration-200'></div>
                <div style={{backgroundImage: `url(${ServiceWebWork})`}} className='shadow-lg group shadow-[#000] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-150 duration-200'></div>
                <div style={{backgroundImage: `url(${ServiceWebWork})`}} className='shadow-lg group shadow-[#000] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-150 duration-200'></div>           
           
            </div> */}
      </div>
    </div>
  )
}

export default Experience