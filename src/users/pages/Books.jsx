import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Books() {
  const [showCategoryList,setShowCategoryList] = useState(false)
  const [token,setToken] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
       setToken(userToken) 
    }
  },[])

  return (
    <>
      < Header />
               {/* login - book page */}

      {
        token ?
        <>
      {/* title & search book */}
        <div className="flex flex-col justify-center items-center my-3">
          {/* title */}
          <h1 className='text-3xl font-bold my-3'>All Books</h1>
          {/* search box */}
          <div className="flex my-2 ">
            <input placeholder='Search By Title' type="text" className='border p-2 border-gray-400 min-w-full' />
            <button className='bg-black p-2 text-white'>Search</button>
          </div>
        </div>
        {/* book & filter grid */}
        <div className="md:grid grid-cols-4 md:px-20 mb-10">
          {/* filter */}
          <div className="col-span-1">
            {/* filter title */}
            <div className="flex justify-between">
              <h1 className='text-2xl font-semibold'>Filter</h1>
              <button onClick={()=>setShowCategoryList(!showCategoryList)}  className='text-2xl md:hidden'><FaBars /></button>
            </div>
            {/* filter option */}
            <div className={showCategoryList?"block":"md:block hidden"}>
              {/* category 1 */}
              <div className="mt-3">
                <input type="radio" name='flter' id='all' />
                <label htmlFor="all" className='ms-3'>All</label>
              </div>
              <div className="mt-3">
                <input type="radio" name='flter' id='demo' />
                <label htmlFor="demo" className='ms-3'>Category Name</label>
              </div>
            </div>
          </div>

          {/* book row */}
          <div className="col-span-3">
             <div className="md:grid grid-cols-4 mt-5 md:mt-0">
           {/* book card div1 */}
              <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0 ">
              <img width={'350px'} height={'350px'} src="https://store.whitefalconpublishing.com/cdn/shop/files/TheEnglish_CoverHB_F_large.jpg?v=1718624085" alt="book" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                <h4 className='text-lg'>Title</h4>
                <Link to={'/books/:id/view'} className='bg-black py-2 px-5 mt-2 text-white'>View</Link>
              </div>
            </div>
             {/* book card div2 */}
           
              <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0 ">
              <img width={'350px'} height={'350px'} src="https://store.whitefalconpublishing.com/cdn/shop/files/TheEnglish_CoverHB_F_large.jpg?v=1718624085" alt="book" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                <h4 className='text-lg'>Title</h4>
                <Link to={'/books/:id/view'} className='bg-black py-2 px-5 mt-2 text-white'>View</Link>
              </div>
            </div>
              {/* book card div3 */}
        
         <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0 ">
              <img width={'350px'} height={'350px'} src="https://store.whitefalconpublishing.com/cdn/shop/files/TheEnglish_CoverHB_F_large.jpg?v=1718624085" alt="book" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                <h4 className='text-lg'>Title</h4>
                <Link to={'/books/:id/view'} className='bg-black py-2 px-5 mt-2 text-white'>View</Link>
              </div>
            </div>
               
          {/* book card div4 */}
         
      <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0 ">
              <img width={'350px'} height={'350px'} src="https://store.whitefalconpublishing.com/cdn/shop/files/TheEnglish_CoverHB_F_large.jpg?v=1718624085" alt="book" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                <h4 className='text-lg'>Title</h4>
                <Link to={'/books/:id/view'} className='bg-black py-2 px-5 mt-2 text-white'>View</Link>
              </div>
            </div>
          
             </div>
          </div>
        
          
        
       
        </div>
      </>
      :
      <div className='w-full h-screen flex justify-center items-center flex-col'>
      {/* not login book page */}
       <img className='w-45' src="https://cdn-icons-gif.flaticon.com/15968/15968647.gif" alt="lock screen" />
       <p className='text-2xl font-bold my-15'>Please <Link to={'/login'} className='underline text-blue-500'>Login</Link> to Explore More!!!!</p>
      </div>
      }

      < Footer />
    </>
  )
}

export default Books