import React from 'react'
import Navbar from '../components/Navbar';
import LeftSideBar from '../components/sidebars/LeftSideBar';
import RightSideBar from '../components/sidebars/RightSideBar';
import Main_Content from '../components/Main_Content';

function LandingPage() {
  return (
    <div className='landing-page'>
      <Navbar />
      <div className='content'>
        <div className='sidebars'>
          <LeftSideBar/>
          <RightSideBar/>
        </div>
        <div className='main-content'>
          <Main_Content />
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
