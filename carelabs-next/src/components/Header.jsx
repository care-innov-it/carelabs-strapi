"use client";
import { GET_BLOG, GET_NAVBAR } from '@/lib/api-Collection';
import client from '@/lib/appollo-client';
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  const [navbarData,setNavbarData]=useState();

  const openMenus =()=>{
    setMenuOpen(!menuOpen);
  }

  const fetchNavbarData = async () => {
    try{
      const res= await client.query({
                  query: GET_NAVBAR,
                 });

      const res1= await client.query({
         query: GET_BLOG,
      })          
      
       console.log("Blog data:", res1.data.blogs);

      console.log("Navbar data:", res.data.navbar);
      setNavbarData(res.data.navbar.Logo);

    }catch(err){
      console.log("Error fetching navbar data:", err);
    }
  }

  useEffect(() => {
    fetchNavbarData();
  }, []);

  return (
    <>
      <div className='header-cvr bg-[#0d1222f2]  w-full h-[80px] flex items-center justify-between  relative p-3 '>
        <div className="logo w-[45%]   h-full flex items-center justify-center sm:w-[35%] 2xl:w-[25%]">
          <img className='h-[60%] lg:h-[80%] ' src={navbarData?.url||"https://carelabz.com/wp-content/uploads/2016/04/Carelabs-logo.jpg"} alt="" />
        </div>
        <div className="menubar p-3 sm:hidden" onClick={openMenus}>
          {menuOpen ? (
          <i className="fa-solid fa-xmark fa-2xl" style={{ color: "white" }}></i>
        ) : (
          <i className="fa-solid fa-bars fa-2xl" style={{ color: "white" }}></i>
        )}
        </div>

        <div className="menus hidden h-full sm:w-[75%] sm:flex sm:items-center sm:justify-end sm:text-[14px]
        md:text-[16px] 2xl:text-xl">
          <ul className='flex h-full items-center justify-evenly  text-[#2575b6] sm:w-full md:w-[90%] lg:w-[80%] 2xl:w-[65%]'>
            <li className=' hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] 2xl:p-1'>HOME</li>
            <li className=' hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] 2xl:p-1'>ABOUT US</li>
            <li className=' hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] 2xl:p-1'>SERVICES</li>
            <li className=' hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] 2xl:p-1'>BLOG</li>
            <li className=' hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] 2xl:p-1'>CONTACT</li>
            <li className=' hover:text-[#f15c30]'><i className="fa-solid fa-magnifying-glass fa-xl"></i></li>
          </ul> 
        </div>
      </div>



     {menuOpen && (
       <div className="menu-list w-full absolute h-fit right-0 top-[80px]  ">
        <ul className=' bg-[#0d1222f2] text-white p-3'>
          {/* <li className='text-end text-3xl p-3' onClick={openMenus}><i className="fa-solid fa-xmark fa-lg"></i></li> */}
          <li className='text-center text-xl hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>Home</li>
          <li className='text-center text-xl hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>Services</li>
          <li className='text-center text-xl hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>Impact</li>
          <li className='text-center text-xl hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>Blog</li>
          <li className='text-center text-lg  p-3'>
            <button className='bg-red-300 px-3 py-1 rounded'>Enquire Now</button>
          </li>
        </ul>
      </div>
     )}
    </>

  )
} 

export default Header
