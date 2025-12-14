import React from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function AdminSideBar() {
  return (
    <div className='bg-red-200 md:min-h-screen h-fit md:flex flex-col text-center'>
      {/* admin image */}
      <div className="my-10 flex justify-center items-center"><img width={'120px'} height={'170px'} 
      style={{ borderRadius: '50%' }} src="https://img.freepik.com/premium-photo/
      photo-smiling-positive-asian-woman-beige-suit-looking-confidently-camera_630290-10096.jpg" alt="user" />

      </div>
      {/* name */}
      <h1 className="text-xl font-bold mb-5">name</h1>
      {/* links */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="mb-3">
          <Link to={'/admin/home'} className='flex items-center'><FaHome className='me-2' />Dashboard</Link>
        </div>
        <div className="mb-3 me-2">
          <Link to={'/admin/resources'} className='flex items-center'><FaBookReader className='me-2' />Resources</Link>
        </div>
        <div className=" me-4">
          <Link to={'/admin/profile'} className='flex items-center'><FaGear className='me-2' />Settings</Link>
        </div>
      </div>


    </div>
  )
}

export default AdminSideBar