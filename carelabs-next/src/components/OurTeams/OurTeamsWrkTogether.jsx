"use client";

import React from 'react'

const OurTeamsWrkTogether = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-20'>
        <div className="flex flex-col w-[85%] p-5 text-center
                2xl:w-[65%]    ">
                    <h2 className='text-[30px] montserrat-font font-semibold mb-4'>How We Work Together</h2>
                    <p className='text-[16px] lg:text-[14px] para-text  poppins-font'>These values guide every study, inspection, and client interaction.</p>
                </div>

        <div className="flex flex-col w-[85%] p-5 rounded-2xl glass-panel
            2xl:w-[65%]">
            <div className="w-full grid grid-cols-1">
                <div className="">
                    <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center light-blue"></div>
                </div>
            </div>
        </div>       
    </div>
  )
}

export default OurTeamsWrkTogether
