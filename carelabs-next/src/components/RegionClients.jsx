"use client";

import { Zap } from 'lucide-react';
import React from 'react'

const RegionClients = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center py-5 '>
        <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                  className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%] 2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4 not-odd:">
                  
                      {/* Heading */}
                      <h1 className="text-xs flex items-center justify-center gap-2 sm:text-sm md:text-base px-3 py-1 rounded-full border border-[#157de5] poppins-font">
                          <div className="text-[#157de5]">
                              <Zap size={18} />
                          </div>
      
                          {/* Global Reach */}
                          Our Clients
                     
                      </h1>
                      
                      {/* Title */}
                      <p className="gradient-text  text-3xl sm:text-4xl md:text-5xl lg:text-[60px] py-4 font-semibold montserrat-font">
                      {/* Comprehensive Power Solutions */}
                          Trusted by Canadian Leaders
                      </p>
                      
                      {/* Description */}
                      <p className="px-4 sm:px-8 text-lg  md:text-xl poppins-font para-text">
                        {/* From analysis to optimization, we deliver end-to-end power system solutions backed by cutting-edge technology and decades of expertise. */}
                        Working with organizations across Canada — from utilities and industrial sites to campuses and commercial property portfolios.
                      </p>
          
   
      
      
        </div>


        <div className="w-[65%] bg-amber-300">

        </div>
 
       


    </div>
  )
}

export default RegionClients
