import React, { useState } from 'react'
import PostComponent from '../component/PostComponent';
import LeftDashboard from '../component/LeftDashboard';
import RightDashboard from '../component/RightDashboard';
// import Bottombar from '../component/Bottombar';

const Dashboard = () => {
  // const [bottomslide, setbottomslide] = useState(false)

  // const togglebottomslide = function () {
  //   setbottomslide(!bottomslide)
  // }

  return (
    <>
      <div className="flex md:flex-row flex-col justify-center md:justify-between gap-2 mx-4 my-7">
        <LeftDashboard />
        <PostComponent />
        <RightDashboard />
        {/* bottm bar implement if needed  */}
        {/* <button className={`${bottomslide ? 'opacity-0 h-0' : 'opacity-100 h-12'} transition-all duration-500 ease-in-out fixed bottom-16 left-1/2 z-20 block md:hidden rounded-2xl -translate-x-1/2 bg-black text-white text-lg px-4`}
         onClick={togglebottomslide}>menu</button>
        <Bottombar togglebottomslide={togglebottomslide} bottomslide={bottomslide} /> */}
      </div>
    </>
  )
}

export default Dashboard