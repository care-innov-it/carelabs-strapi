"use client";
import { GET_NAVBAR } from '@/lib/api-Collection';
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
      <div className='header-cvr   w-full h-[80px] flex items-center justify-between  relative'>
        <div className="logo w-[45%]   h-full flex items-center justify-center sm:w-[35%] 2xl:w-[25%]">
          <img className='h-[60%] lg:h-[80%] ' src={navbarData?.url||"https://carelabz.com/wp-content/uploads/2016/04/Carelabs-logo.jpg"} alt="" />
        </div>
        <div className="menubar p-3 sm:hidden" onClick={openMenus}>
          <i className="fa-solid fa-bars fa-2xl"></i>
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
       <div className="menu-list w-full absolute h-fit right-0 top-0  ">
        <ul className=' bg-white text-[#2575b6] p-3'>
          <li className='text-end text-3xl p-3' onClick={openMenus}><i className="fa-solid fa-xmark fa-lg"></i></li>
          <li className='text-center text-3xl hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>HOME</li>
          <li className='text-center text-3xl hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>ABOUT US</li>
          <li className='text-center text-3xl hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>SERVICES</li>
          <li className='text-center text-3xl hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30] p-3'>BLOG</li>
          <li className='text-center text-3xl hover:text-[#f15c30] hover:border-b-2 hover:border-[#f15c30]p-3'>CONTACT</li>
        </ul>
      </div>
     )}
    </>

  )
} 

export default Header
