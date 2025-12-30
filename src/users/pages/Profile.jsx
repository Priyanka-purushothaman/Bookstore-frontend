import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'
import serverURL from '../../services/serverURL'



function Profile() {

  const [tab, setTab] = useState(1)
  const [dp, setDp] = useState("")
  const [username, setUsername] = useState("")

  console.log(dp);
  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      console.log(user);
      console.log(dp);

      setDp(user?.pictures)
      setUsername(user?.username)
    }
  }, [])
  return (
    <>
      <Header />
      {/* black div */}
      <div style={{ height: '300px' }} className="bg-black ">
      </div>
      {/* profile image */}
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className="bg-white p-3">
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} 
        src={dp?dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${serverURL}/uploads/${dp}`: "https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg"} alt="profile picture" />

    
      </div>
      {/* name with edit block */}
      <div className="md:flex justify-between items-center my-5 md:px-20 px-7">
        <h2 className='text-2xl font-bold flex items-center'>{username}<FaCircleCheck className='text-blue-400 ms-4' /></h2>
        <Edit />
      </div>
      <p className='text-justify md:px-20 px-5 my-5'>A personalized space designed to enhance your reading experience. Here, you'll find everything you need to manage your account,
        track your reading journey, and discover new books tailored just for you.Your profile keeps all your preferences, purchases, and recommendations in one convenient place.
        Enjoy a smoother, smarter, and more personal way to experience our bookstore.Whether you're building your wishlist, reviewing past reads, or exploring curated suggestions,
        this dashboard helps you stay connected to the stories you love.</p>
      {/* tab with contents */}
      <div className="md:px-40">
        {/* tabs */}
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p onClick={() => setTab(1)} className={tab == 1 ? 'text-blue-600 border-gray-200 border-t border-l border-r p-3 cursor-pointer' : 'border-gray-200 border-b  p-3 cursor pointer'} >Sell Books</p>
          <p onClick={() => setTab(2)} className={tab == 2 ? 'text-blue-600 border-gray-200 border-t border-l border-r p-3 cursor-pointer' : 'border-gray-200 border-b  p-3 cursor pointer'} >Book Status</p>
          <p onClick={() => setTab(3)} className={tab == 3 ? 'text-blue-600 border-gray-200 border-t border-l border-r p-3 cursor-pointer' : 'border-gray-200 border-b  p-3 cursor pointer'} >Purchase History</p>
        </div>
        {/* contents */}
        {
          tab == 1 &&
          <SellBook />
        }

        {
          tab == 2 &&
          <BookStatus />
        }
        {
          tab == 3 &&
          <Purchase />

        }
      </div>
      <Footer />
    </>

  )
}

export default Profile