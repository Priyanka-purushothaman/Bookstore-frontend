import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'

function AdminCollection() {
  const [tab, setTab] = useState(1)
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4 p-8">
          <h1 className="my-2 text-center text-3xl font-bold">All Collection</h1>
          {/* tabs */}
          <div className="flex my-10 justify-center text-3xl font-bold">
            <p onClick={() => setTab(1)} className={tab == 1 ? "font-bold border-gray-100 text-xl border-t border-l border-r p-3 text-blue-600 cursor-pointer" :
              "border-b font-bold border-gray-200 text-xl p-3"}>Books</p>
            <p onClick={() => setTab(2)} className={tab == 2 ? "font-bold border-gray-100 text-xl border-t border-l border-r p-3 text-blue-600 cursor-pointer" :
              "border-b font-bold border-gray-200 text-xl p-3"}>Users</p>
          </div>
          {
            tab == 1 &&
            <div className='md:grid grid-cols-4 w-full my-3'>
              {/* duplicate book card */}
              <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
                <img width={'250px'} height={'250px'} src="https://store.whitefalconpublishing.com/cdn/shop/files/TheEnglish_CoverHB_F_large.jpg?v=1718624085" alt="book" />
                <div className='flex justify-center items-center flex-col mt-4'>
                  <h3 className='text-yellow-600 font-bold text-lg'>Author</h3>
                  <h4 className='text-lg'>Title</h4>
                  <h4>$price</h4>
                  <div className='grid mt-3 w-full'>
                    <button className='bg-green-600 mt-3 py-3 text-white'>APPROVE</button>

                  </div>
                </div>
              </div>
            </div>
          }
          {
            tab == 2 &&
            <div className='md:grid grid-cols-4 w-full my-3'>
              {/* duplicate Users card */}
              <div className="rounded bg-gray-200 p-2 m-2 text-wrap">
                <p className="text-red-600 font-bold">ID : dr3ri3o9908</p>
                <div className="flex items-center text-wrap mt-2">
                  {/* user image */}
                  <img width={'80px'} height={'80px'} style={{ borderRadius: '50%' }} src="https://mockmind-api.uifaces.co/content/human/80.jpg" alt="user" />
                  {/* content */}
                  <div className="ms-5">
                    <h4 className="font-bold text-2xl text-blue-800">name</h4>
                    <p>demo@gmail.com</p>
                  </div>

                </div>
              </div>

            </div>
          }

        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminCollection