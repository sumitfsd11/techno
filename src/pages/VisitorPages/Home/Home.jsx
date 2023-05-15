import React from 'react';
import TopBanner from './components/TopBanner';
import DatailBanner from './components/DatailBanner';
import CouseList from './components/CouseList';
import ApplyBanner from './components/ApplyBanner';
import Feedback from './components/Feedback';
import UpcomingEvent from './components/UpcomingEvent';
import BlogList from './components/BlogList';
export default function Home() {
  return (
    <React.Fragment>
      <div className='bg-[#f0fdf8]'>
        <TopBanner />
        <DatailBanner />
      </div>
      <CouseList />
      <ApplyBanner />
      <Feedback />
      <UpcomingEvent />
      <BlogList />
    </React.Fragment>
  )
}
