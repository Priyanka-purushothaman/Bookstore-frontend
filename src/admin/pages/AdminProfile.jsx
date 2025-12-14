import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import { FaPen } from 'react-icons/fa6'


function AdminProfile() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4 p-10">

          <h1 className="text-center my-3 font-boldtext-3xl">Settings</h1>
          <div className="md:grid grid-cols-2 gap-8">
            {/* text */}
            <div>
              <h4 className='text-xl font-bold mb-4'>Admin Settings Page in Bookstore Management System </h4>
              <p className='text-justify mb-5'>The Account Settings page enables users or administrators to manage their personal account 
                information and security preferences. Users can update profile details, change passwords, configure notifications, and 
                manage security features like two-factor authentication, ensuring a secure and personalized experience.</p>
              <p> 👤 1. Personal Information
                2. Password & Security
                3. Notification Preferences
                4. Account Actions
                5. Save Changes </p>
            </div>
            {/* form  */}
            <div className="flex justify-center items-center flex-col bg-red-300 p-5 rounded">
              {/* image */}
              <label htmlFor="uploadImg" >
                <input type="file" id='uploadImg' hidden />
                <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src="https://mockmind-api.uifaces.co/content/human/80.jpg" alt="profile" />

              </label>
              <button style={{ marginTop: '-20px' }} className='bg-dark p-2 text-white rounded'><FaPen /></button>

              {/*name  */}
              <div className="mt-10 mb-3 w-full px-5">
                <input type="text" placeholder='Username' className='bg-gray-300 p-1 rounded w-full' />

              </div>
              {/* password */}
              <div className="mb-3 w-full px-5">
                <input type="password" placeholder='New Pssword' className='bg-gray-300 p-1 rounded w-full' />
              </div>
              <div className="mb-3 w-full px-5">
                <input type="password" placeholder='Confirm Pssword' className='bg-gray-300 p-1 rounded w-full' />
              </div>

              {/* button */}
              <div className="mb-3 flex justify-center px-5 w-full mt-5">
                <button className="px-3 mx-4 py-2 rounded border bg-red-600 text-white hover:bg-black hover:border-green-600 hover:text-red-600">
                  RESET</button>
                <button className="px-3 py-2 rounded border bg-green-600 text-white hover:bg-black hover:border--600 hover:text-green-600">
                  UPDATE  </button>
              </div>



            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminProfile