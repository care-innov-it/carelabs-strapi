import React, { useState, useEffect } from 'react'
import { GET_TESTIMONIALS } from '@/lib/api-Collection';
import client from '@/lib/appollo-client';
import { Quote } from 'lucide-react';


const HomeTestimonials = () => {

  const [testimonialData, setTestimonialData] = useState(null)
  const [current, setCurrent] = useState(0);
 

  //   const testimonials = [
  //   {
  //     quote:
  //       "Carelabs transformed our power system reliability. Their expertise in compliance and safety audits helped us achieve 99.9% uptime across all facilities.",
  //     name: "Ahmed Al-Mansouri",
  //     position: "Facilities Director",
  //     company: "Gulf Energy Corporation",
  //   },
  //   {
  //     quote:
  //       "Carelabs helped us improve energy efficiency by identifying critical faults early. Excellent service and highly professional team.",
  //     name: "Sarah Johnson",
  //     position: "Chief Engineer",
  //     company: "International Mining Solutions",
  //   },
  //   {
  //     quote:
  //       "The power system studies conducted by Carelabs identified critical vulnerabilities before they became issues. Their proactive approach saved us significant downtime costs.",
  //     name: "Michael Chen",
  //     position: "Plant Supervisor",
  //     company: "SunTech Industries",
  //   },
  // ];

  const fetchTestimonials = async () => {
    try {
      const response = await client.query({
        query:GET_TESTIMONIALS
      })
       console.log("testimonial Data:", response.data.testimonialsSection)
       setTestimonialData(response.data.testimonialsSection)
    } catch (error) {
      console.log("Error fetching testimonials:", error);
    }
  }

  useEffect(()=> {
   fetchTestimonials()
  },[])

  if(!testimonialData) return null

  const testimonials = testimonialData.testimonials || [];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  return (
    <div>
        <div className="text w-full h-auto flex flex-col items-center justify-center mt-40 lg:mt-60">

    <div  
    data-aos="fade-up"
     data-aos-anchor-placement="top-center"
    className="quotes w-11/12 sm:w-4/5 xl:w-[80%] flex items-center justify-center text-center flex-col gap-5 p-4">
    
    {/* Heading */}
    <h1 className="text-xs flex items-center justify-center gap-2 sm:text-sm md:text-base px-3 py-1 rounded-full border border-[#157de5] poppins-font">
        <div className="text-[#157de5]">
              <Quote size={18} />
          </div>
        {testimonialData.badge}
      </h1>
    
    {/* Title */}
    <p className="gradient-text w-full py-4  font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] montserrat-font"
       dangerouslySetInnerHTML={{ __html: testimonialData.title }}
    >
        {/* {testimonialData.title} */}
    </p>
    
    {/* Description */}
    <p className="px-4 sm:px-8 text-base sm:text-lg md:text-xl text-[#65758B] poppins-font">
        {/* See what our clients say about working with Carelabs for their electrical safety and compliance needs. */}
        {testimonialData.description}
    </p>

    </div>

        </div>

     <div className="w-full flex justify-center py-16">
      <div 
       data-aos="fade-up"
     data-aos-anchor-placement="top-center"
      className="bg-white rounded-3xl card-shadow  w-[90%] md:w-[80%] 2xl:w-[65%] p-20 lg:p-10 2xl:p-20 text-center relative">
        
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-3xl text-blue-500">❝</span>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-xl   md:text-2xl 2xl:px-0 text-gray-700 leading-relaxed poppins-font">
          {/* "{testimonials[current].quote}" */}
          {testimonials[current]?.feedback}
        </p>

        {/* Name + Position */}

        {/* <div className="mt-6 ">
          <p className="font-bold text-lg">{testimonials[current].name}</p>
          <p className="text-sm text-gray-500">{testimonials[current].position}</p>
          <p className="text-sm text-blue-600">{testimonials[current].company}</p>
        </div> */}
        
        <div className="mt-6">
            <p className="font-bold text-lg poppins-font">{testimonials[current]?.name}</p>
            <p className="text-[14px] text-gray-500 poppins-font">
              {testimonials[current]?.position}
            </p>
            <p className="text-[12px] text-blue-600 poppins-font">
              {testimonials[current]?.company}
            </p>
          </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"
            onClick={prevSlide}
          >
            <i className="fa-solid fa-arrow-left fa-xl"></i>
          
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>

          <button
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"
            onClick={nextSlide}
          >
             <i className="fa-solid fa-arrow-right fa-xl"></i>
          </button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default HomeTestimonials
