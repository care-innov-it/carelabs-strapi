import React from 'react'

const Footer = () => {
  return (
    <div>
     <div className="w-full footer-background md:h-[350px] lg:h-[400px] py-10 flex justify-center">
    <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row gap-8">

        {/* LOGO & DESCRIPTION */}
        <div className="flex-1 flex flex-col gap-4 text-gray-50">
        <img
            className="w-32 md:w-40"
            src="https://proper-hug-7f40206151.media.strapiapp.com/carelab_logo_552fa645c1.png"
            alt="Logo"
        />
        <p className="text-sm md:text-base">
            Leading the future of electrical safety, compliance, and power system optimization with global expertise and local presence.
        </p>
        <div className="flex gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-black">
            <i className="fa-solid fa-globe"></i>
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-black">
            <i className="fa-solid fa-globe"></i>
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-black">
            <i className="fa-solid fa-globe"></i>
            </div>
        </div>
        </div>

        {/* COLUMNS */}
        {["What We Do", "Company", "Support"].map((title, idx) => (
        <div key={idx} className="flex-1 flex flex-col gap-2 text-gray-50">
            <p className="text-lg font-bold">{title}</p>
            <a href="#" className="text-sm hover:underline">Services Overview</a>
            <a href="#" className="text-sm hover:underline">Services Overview</a>
            <a href="#" className="text-sm hover:underline">Services Overview</a>
        </div>
        ))}

    </div>
    </div>

    </div>
  )
}

export default Footer
 