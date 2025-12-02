import React from 'react'
import carelabzImage from '@/assets/carlabz.jpg'


const OurTeamMilestone = () => {
  return (
    <div>
          <div className='w-full flex flex-col items-center justify-center mt-20'>
              <div className="flex flex-col w-[85%] p-5 text-center
                      2xl:w-[50%]    ">
                          <h2 className='text-[30px] montserrat-font font-semibold mb-4'>Milestones on Our Journey</h2>
                          <p className='text-[18px]   para-text  poppins-font'>A decade of growth in electrical safety expertise.</p>
                      </div>
      <div className="flex flex-col w-[85%] rounded-2xl mt-10 2xl:w-[65%]">

        <div className="w-full bg-amber-300 flex  flex-col gap-10">

            <div className="w-full bg-amber-900 h-[200px] flex justify-between items-center ">

            {/* LEFT BLOCK */}
            <div className="w-[40%] bg-amber-50 flex items-end justify-end rounded-2xl h-full ">
                <div className="w-[80%] text-right p-5 h-full">
                    <p className='text-[14px] poppins-font secondary-color'>2013-2015</p>
                <h2 className='text-[20px] montserrat-font font-semibold'>
                Early field inspections & audits across the GCC
                </h2>
                <p className='text-[14px] para-text poppins-font'>
                Established our foundation in electrical safety with comprehensive site assessments for utilities and industrial facilities.
                </p>
                </div>
            </div>

            {/* RIGHT IMAGE BLOCK */}
            <div className="w-[40%] p-2 h-full">
                <div
                    className=" bg-cover bg-center bg-no-repeat h-full rounded-2xl"
                    style={{ backgroundImage: `url(${carelabzImage.src})` }}
                ></div>
            </div>


            </div>

            <div className="w-full bg-green-400 h-[400px]">
                <div className=" flex items-center justify-end h-[200px]">
                    

                        {/* RIGHT IMAGE BLOCK */}
                        <div className="w-[40%] p-2 h-full">
                            <div
                                className=" bg-cover bg-center bg-no-repeat h-full rounded-2xl"
                                style={{ backgroundImage: `url(${carelabzImage.src})` }}
                            ></div>
                        </div>
                </div>

                <div className=" flex i h-[200px]">
                        <div className="w-[40%] bg-amber-50 flex items-end justify-end rounded-2xl h-full ">
                            <div className="w-[80%] text-right p-5 h-full">
                                <p className='text-[14px] poppins-font secondary-color'>2013-2015</p>
                            <h2 className='text-[20px] montserrat-font font-semibold'>
                            Early field inspections & audits across the GCC
                            </h2>
                            <p className='text-[14px] para-text poppins-font'>
                            Established our foundation in electrical safety with comprehensive site assessments for utilities and industrial facilities.
                            </p>
                            </div>
                        </div>

                    
                </div>
            </div>

        </div>

        </div>

             </div>
    </div>
  )
}

export default OurTeamMilestone
