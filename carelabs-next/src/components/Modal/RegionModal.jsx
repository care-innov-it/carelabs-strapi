import React from 'react'

const RegionModal = () => {

      const regions = [
    "Global",
    "Middle East & Africa",
    "Asia-Pacific",
    "Europe",
    "Americas",
    "Canada"
  ];

  return (
    <div>
        <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
              >
                <div className="relative w-[90%] md:w-[70%] lg:w-[30%] rounded-2xl shadow-xl p-6 bg-white">
      
                  {/* Close Button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-xl text-gray-500 hover:text-black hover:bg-gray-100 "
                  >
                    <X size={24} />
                  </button>
      
                  <div className="text-center flex  flex-col items-center justify-center xl:flex-row gap-2 mb-6">
      
                    <Globe size={24} className="xl:mt-2 text-blue-600 mb-3" />
                    <h2 className="text-xl font-semibold">Explore Carelabs in your region</h2>
                  </div>
      
                  {/* SELECT DROPDOWN */}
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-white border border-gray-300 rounded-full px-4 py-3 pr-10 flex justify-between items-center"
                    >
                      {selectedRegion}
      
                      <ChevronDown
                        className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
      
                    {isDropdownOpen && (
                      <ul className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border overflow-hidden z-10">
                        {regions.map((region) => (
                          <li
                            key={region}
                            onClick={() => {
                              setSelectedRegion(region);
                              setIsDropdownOpen(false);
      
                              setIsModalOpen(false);
      
                              if (region === "Canada") {
                                router.push("/ca");
                              }
                              if (region === "G") {
                                router.push("/ca");
                              }
      
                            }}
                            className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                          >
      
                            {region}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
      
      
                  <p className="text-center text-sm text-gray-600 p-3">
                    You're viewing: <span className="font-semibold">{selectedRegion} site</span>
                  </p>
                  <div className=" w-full flex items-center justify-center">
                    <p className='text-sm'>
                      Go to: www.carelabs.com
                    </p>
                    <Mail size={14} />
                  </div>
      
                </div>
              </div>
    </div>
  )
}

export default RegionModal
