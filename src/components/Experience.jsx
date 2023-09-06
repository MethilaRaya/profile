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
            date="Sept 2020 - Present"
            dateColor="#f9fafc"
            name="Machine Learning Engineer"
            company="Zantrik"
            description="I've concentrated on Computer Vision Research and Development, developing an advanced model for vehicle detection, damage assessment, and license plate recognition. This enables precise identification, damage evaluation, and efficient tracking. I've also contributed to enhancing safety through arm analysis and developed an intuitive chatbot for streamlined customer interactions."
          />

          <ExperienceItem
            date="Jun 2020 - Aug 2020"
            dateColor="#f9fafc"
            name="Machine Learning Developer Internship,"
            company="Zantrik"
            description="My responsibilities included data preprocessing and annotation tasks. Additionally, I successfully underwent a 4-month training program in Deep Learning Computer Vision, which was conducted by LICT and NUS (Leveraging ICT for Employment and Growth of the IT-ITES Industry)."
          />

          <ExperienceItem
            date="Feb 2020 - Aug 2020"
            dateColor="#f9fafc"
            name="Lecturer"
            company="Bangladesh Institue of Science and Technology (BIST)"
            description="In charge of delivering instruction in the field of Electronics and Communication Engineering. The courses I have instructed include:  
⦿ Electrical Instrumentation and Measurements             
⦿ Digital Systems Lab 
⦿ Antenna and Wave Propagation                    
⦿ Computer Networking"
          />

            <ExperienceItem
            date="Oct 2019 - Jan 2020"
            dateColor="#f9fafc"
            name="Teaching Assistant"
            company="University of Liberal Arts Bangladesh (ULAB)"
            description="I am responsible for conducting laboratory sessions, supervising examinations, and providing support to faculty members in the Departments of Electrical & Electronic Engineering and Electronics & Telecommunication Engineering. Assisted courses are:  
⦿ Electronics Devices and Circuits I Lab             
⦿ Microwave and Radar Engineering Lab"
          />

            <ExperienceItem
            date="Jun 2018 - Sept 2018"
            dateColor="#f9fafc"
            name="Teaching Assistant"
            company="University of Liberal Arts Bangladesh (ULAB)"
            description="I am responsible for conducting laboratory sessions, supervising examinations, and providing support to faculty members in the Departments of Electrical & Electronic Engineering and Electronics & Telecommunication Engineering. Assisted courses are:  
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