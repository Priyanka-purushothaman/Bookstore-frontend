import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaAddressCard, FaBars, FaFacebook, FaInstagram, FaPowerOff, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  const [listStatus, setListSattus] = useState(false)
  const [dp,setDp] = useState("")
  const [token,setToken] = useState("")
  const [dropDown,setDropdown] = useState(false)
 console.log(dp);
  
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.picture)
    }
  }, [token])

  const menuBtnClick = () => {
    setListSattus(!listStatus)
  }
  return (
    <>
      {/* upper part- title & login */}
      <div className='grid grid-cols-3 p-3 mt-2'>
        {/* logo with title */}
        <div className="flex items-center">
          <img width={'70px'} height={'70px'} src="https://thumbs.dreamstime.com/b/hand-book-logo-illustration-art-background-43965136.jpg" alt="logo" />
          <h1 className='text-2xl font-bold ms-1 md:hidden'>BOOKSTORE</h1>
        </div>
        {/* title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold">BOOK STORE</h1>
        </div>
        {/* login */}
        <div className="md:flex justify-end items-center hidden">
          {/* insta,facebook,twitter */}
          <FaInstagram />
          <FaFacebook className='mx-2' />
          <FaTwitter />

          {/* login link */}
          {
            !token ?
              <Link to={'/login'} className='ms-4 border rounded py-2 hover:bg-black hover:text-white flex items-center'>
                <FaUser className='me-1' />Login</Link>
              :
              <div className="relative inline-bolck text-left ms-2">
                <button onClick={() => setDropdown(!dropDown)} className="w-full bg-white px-3 py-2 shadow hover:bg-gray-50">
                  <img width={'40px'} height={'40px'} style={{ borderRadius: "50%" }}
                    src={dp? dp: "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"} alt="profile picture" />

                </button>
                {
                  dropDown &&
                  <div className='absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right 
                 ring-1 ring-black/5 focus:outline-hidden'>
                    <Link to={'/user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'>
                      <FaAddressCard className='me-2' />Profile</Link>
                    <button className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2' />Logout</button>

                  </div>

                }

              </div>
          }

        </div>

      </div>
      {/* header lower part - link &menu + login btn  */}
      <nav className="w-full p-2 bg-black text-white md:flex justify-center items-center">
        {/* div -menu bar & login btn in mobile screen*/}
        <div className="flex justify-between items-center text-2xl md:hidden">
          {/* menu bar btn */}
          <button className='cursor-pointer'><FaBars /></button>
          {/* login link */}

          {
            !token ?
              <Link to={'/login'} className='ms-4 border rounded py-2 hover:bg-black hover:text-white flex items-center'>
                <FaUser className='me-1' />Login</Link>
              :
              <div className="relative inline-bolck text-left ms-2">
                <button onClick={() => setDropdown(!dropDown)} className="w-full bg-white px-3 py-2 shadow hover:bg-gray-50">
                  <img width={'40px'} height={'40px'} style={{ borderRadius: "50%" }}
                    src={dp ? dp : "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"} alt="profile picture" />
                </button>
                {
                  dropDown &&
                  <div className='absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right 
                 ring-1 ring-black/5 focus:outline-hidden'>
                    <Link to={'/user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'>
                      <FaAddressCard className='me-2' />Profile</Link>
                    <button className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2' />Logout</button>

                  </div>

                }

              </div>
          }


        </div>
        {/* ul - links */}

        <ul className={listStatus ? "flex flex-col" : "md:flex justify-center items-center hidden"}>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} className='md:mx-4 '>HOME</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/books'} className='md:mx-4'>BOOKS</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'} className='md:mx-4'>CONTACT</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header