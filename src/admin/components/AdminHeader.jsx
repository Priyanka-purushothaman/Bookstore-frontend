import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
    {/* header part */}
    <div className='flex justify-between items-center p-3 md:px-20'>
       {/* /logo with tiltle */}
      <div className="flex items-center">
       
        <img width={'80px'} height={'80px'} src="https://thumbs.dreamstime.com/b/hand-book-logo-illustration-art-background-43965136.jpg" alt="logo" />
            <p className="font-bold text-2xl">BOOKSTORE</p>

      </div>
       
      {/* logout */}
      <button className="bg-black px-3 py-2 border rounded text-white 
      flex items-center justify-end hover:bg-white hover:text-black">
        <FaPowerOff className='me-2' />LOG OUT</button>
        </div>
      {/* header lower part */}
      <div className="bg-black p-2">
        <marquee ><p className="text-white">Welcome, Admin! You're all set to manage and monitor the system.Let's get into work!</p></marquee>
     
    </div>
    </>
  )
}

export default AdminHeader