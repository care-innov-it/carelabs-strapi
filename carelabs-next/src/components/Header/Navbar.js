// components/Navbar.js
import React from 'react';
import Header from '../Header';
import client from '@/lib/appollo-client';
import { GET_NAVBAR } from '@/lib/api-Collection';

const Navbar = async () => {
  let navbarData = null;

  try {
    const res = await client.query({ query: GET_NAVBAR });
    navbarData = res.data.navbar;
  } catch (err) {
    console.error("Navbar fetch failed:", err);
  }

  return <Header navbarData={navbarData} />;
};

export default Navbar;
