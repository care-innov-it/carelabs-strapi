"use client";
import { Dot, Zap } from 'lucide-react';
import React from 'react'

const OurTeamsDrivesUs = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-20'>
        <h2 className='text-[36px] montserrat-font font-semibold text-center  my-10'>What Drives Us</h2>
            <div className="flex flex-col w-[85%] rounded-2xl 
               
                lg:flex-row
                2xl:w-[65%] ">
                <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="glass-panel p-8">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-[50px] h-[50px] rounded-full light-blue flex items-center justify-center">
                                 <Zap size={24}/>
                            </div>
                            <p className='montserrat-font text-[24px] font-semibold'>Why We Exist</p>
                        </div>

                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45}/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>

                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45}/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>


                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45}/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>

                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45}/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>


                

                      
                    </div>

                     <div className="glass-panel p-8">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-[50px] h-[50px] rounded-full light-blue flex items-center justify-center">
                                 <Zap size={24}/>
                            </div>
                            <p className='montserrat-font text-[24px] font-semibold'>Why We Exist</p>
                        </div>

                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45}/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>

                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45}/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>


                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45}/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>

                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45}/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>
                      
                    </div>
                    
                </div>
            </div> 
    </div>
  )
}

export default OurTeamsDrivesUs
