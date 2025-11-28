"use client";

import { ArrowDownFromLine } from 'lucide-react';
import React from 'react'

const OurTeamsBanner = () => {
  return (
    <div className=' w-full flex items-center justify-center mt-[] bg-amber-300'>

        <div className="w-[65%] bg-white p-5 mt-[120px]">
            <div className="left_section bg-red-500 w-[50%] p-5">
                <h1 className='text-[60px] montserrat-font font-semibold leading-14 mb-5 '>
                    The people behind safer electrical systems
                </h1>
                <p className='text-[18px] poppins-font para-text mb-5'>Carelabs is a cross-functional team of electrical engineers
                    , field technicians, and compliance specialists
                     working across 50+ countries to keep power systems safe, compliant, and optimized.</p>
                <div className=" flex  gap-3">
                    <div className="flex items-center justify-center">
                        <p className='montserrat-font'>10+</p>
                        <p>years in the field</p>
                    </div>
                      <div className="flex items-center justify-center">
                        <p className='montserrat-font'>25+</p>
                        <p>certified engineers</p>
                    </div>
                    
                 
                </div> 

                <div className=" flex gap-3">
                   <button>Meet the Leadership</button>  
                   <button>Work With Our Team</button> 
  
                </div>   
                <div className="flex">
                    <p>Scroll to meet our team </p>
                <ArrowDownFromLine/>
                </div>
            </div>
            <div className="right_section "></div>
        </div>

        
     
    </div>
  )
}

export default OurTeamsBanner
