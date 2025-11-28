"use client";
import OurTeamsBanner from '@/components/OurTeams/OurTeamsBanner';
import React from 'react'

const page = ({ params }) => {
  const locale = params?.locale || 'en'; // default to en

  return (
    <div>
      <OurTeamsBanner locale={locale} />
    </div>
  )
}

export default page
