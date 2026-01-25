import React ,{useState,useEffect}from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import serverURL from '../../services/serverURL'


function AdminSideBar() {
    const [dp, setDp] = useState("")
    const [username, setUsername] = useState("")
  
    // console.log(dp);
    useEffect(() => {
      if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
        const user = JSON.parse(sessionStorage.getItem("user"))
     
        setDp(user?.picture)
        setUsername(user?.username)
      }
    }, [])
  return (
    <div className='bg-red-200 md:min-h-screen h-fit md:flex flex-col text-center'>
      {/* admin image */}
      <div className="my-10 flex justify-center items-center"><img width={'120px'} height={'170px'} 
      style={{ borderRadius: '50%' }} 
      src={dp?dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${serverURL}/uploads/${dp}`: "https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg"} alt="profile picture" />


      </div>
      {/* name */}
      <h1 className="text-xl font-bold mb-5">{username}</h1>
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