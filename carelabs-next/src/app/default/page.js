"use client";

import { Zap } from 'lucide-react';
import Link from 'next/link';
import carelabzImage from '@/assets/carlabz.jpg'
import React from 'react'

const page = () => {
  return (
    <div>
        <section>
            <div className='w-full flex items-center justify-center p-5 -blue '>

                <div className='mt-[100px] p-5 w-full lg:w-[70%] glass-panel1 rounded-[40px] lg:p-10 flex flex-col lg:flex-row items-center justify-center' >
                    <div className='w-full lg:w-[50%]  h-full flex flex-col  justify-center gap-10 p-5'>
                          <div className='w-full h-[30%]  flex items-center justify-center lg:justify-start'>
                           <div className='flex items-center justify-start gap-4 px-6 py-1 bg-amber-100 w-fit rounded-[16px]'>
                             <Zap size={18}/>
                             <p>Carelabz Badge</p>
                           </div>
                          </div>
                          <div className='w-full lg:w-[65%] h-[40%] flex flex-col gap-3'>
                            <h1 className='text-[40px] leading-10  title-Text'>
                            How We Partner With You
                          </h1>
                          <p className='text-[16px] poppins-font para-text'>Established our foundation in electrical safety with comprehensive site assessments for utilities and industrial facilities. Early field inspections & audits across the GCC</p>
                          </div>
                        <div className="w-full h-[30%] flex justify-start">
                            <div className="w-full h-[30%] flex justify-start items-center">
                                <Link href="/" className="px-10 py-2 bg-[#2575b6] poppins-font rounded-[40px] text-white ">
                                    <p>Explore More</p>
                                </Link>
                            </div>
                        </div>


                        
                    </div>
                       <div className='w-full lg:w-[50%] h-full flex items-center justify-center '>

                        <div className='w-full h-[300px] rounded-[16px] lg:w-[85%] lg:h-[450px] lg:rounded-[40px] bg-cover bg-center bg-no-repeat'
                            style={{ backgroundImage: `url(${carelabzImage.src})` }}
                        >

                        </div>

                    </div>
                </div>

            </div>
        </section>

  
        <section>
            <div className='w-full flex items-center justify-center  p-5  '>
                <div className='w-full p-5 lg:w-[70%] glass-panel1 lg:p-15 '>

                    <h2 className='text-[36px] font-semibold montserrat-font text-center lg:text-left'>Introduction</h2>
                 <div className=' p-5 w-full lg:w-[90%]'>
                          <p className='text-[16px] poppins-font para-text'>
                        Established our foundation in electrical safety with
                         comprehensive site assessments for utilities and industrial
                          facilities. Early field inspections & audits across the GCC
                          Established our foundation in electrical safety with
                         comprehensive site assessments for utilities and industrial
                          facilities. Early field inspections & audits across the GCC
                          Established our foundation in electrical safety with
                         comprehensive site assessments for utilities and industrial
                          facilities. Early field inspections & audits across the GCC
                          </p><br/>

                    <p className='text-[16px] poppins-font para-text'>
                        Established our foundation in electrical safety with
                         comprehensive site assessments for utilities and industrial
                          facilities. Early field inspections & audits across the GCC
                          Established our foundation in electrical safety with
                         comprehensive site assessments for utilities and industrial
                          facilities. Early field inspections & audits across the GCC
                          </p>

                    <p className='text-[16px] poppins-font para-text'>
                        Established our foundation in electrical safety with
                         comprehensive site assessments for utilities and industrial
                          facilities. Early field inspections & audits across the GCC</p>


                      <p className='text-[16px] poppins-font para-text'>
                        Established our foundation in electrical safety with
                         comprehensive site assessments for utilities and industrial
                          facilities. Early field inspections & audits across the GCC</p>                

                 </div>

                </div>

            </div>
        </section>  

    </div>
  )
}

export default page
