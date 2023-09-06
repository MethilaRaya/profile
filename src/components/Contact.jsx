import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-theme-fuchsia-900 text-[#f9fafc]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid-cols-2 gap-8'>
                    <div className='sm:text-center pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#f9fafc]'>Contact Informations</p>
                    </div>
                </div>
                <div class='max-w-[1000px] w-full gap-4 px-2 mt-4 pl-8 sm: pl-0 text-justify flex flex-col'>
                    <div class='w-full grid sm:grid-cols-2 flex flex-col gap-2 sm:gap-4 sm:flex-row sm:justify-center'>
                        <p class='font-bold text-left text-lg sm:text-right'>Email:</p>
                        <p class='text-left sm:text-left sm:block'>methilaraya@gmail.com</p>
                    </div>
                    <div class='w-full grid sm:grid-cols-2 flex flex-col gap-2 sm:gap-4 sm:flex-row sm:justify-center'>
                        <p class='font-bold text-left text-lg sm:text-right'>Contact number:</p>
                        <p class='text-left sm:text-left sm:block'>+88 01670677352</p>
                    </div>
                    <div class='w-full grid sm:grid-cols-2 flex flex-col gap-2 sm:gap-4 sm:flex-row sm:justify-center'>
                        <p class='font-bold text-left text-lg sm:text-right'>Address:</p>
                        <p class='text-left sm:text-left sm:block'>Khulna 9100, Bangladesh</p>
                    </div>
                    
                </div>


            </div>
        </div>
    )
}

export default Contact