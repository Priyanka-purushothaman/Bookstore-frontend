import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link ,useParams} from 'react-router-dom'
import { FaX } from 'react-icons/fa6'
import { viewBookAPI } from '../../services/allAPI'
import {serverURL} from '../../services/serverURL'



function View() {

  const [modalSatus, SetModalStatus] = useState(false)
  const {id} = useParams()
  console.log(id);
  
  const[book,setBook] = useState({})
  console.log(book);

   useEffect(()=>{
   getBookDetails()
   },[])
  

  const getBookDetails = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
       const reqHeader = {
      "Authorization":`Bearer ${token}`
    }
    const result = await viewBookAPI(reqHeader,id)
    if(result.status==200){
      setBook(result.data)
    } else{
      console.log(result);
      
    }
    }
  }
  return (
    <>
      < Header />
      <div className="md:m-10 m-5">
        <div className="shadow border p-5 border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
            {/* image column */}
            <div className="col-span-1">
              <img width={'250px'} height={'250px'} src="https://store.whitefalconpublishing.com/cdn/shop/files/TheEnglish_CoverHB_F_large.jpg?v=1718624085" alt="book" />

            </div>
            {/* book details column */}
            <div className="col-span-3">
              <div className="flex justify-between items-center mt-2 md:mt-0">
                <h1 className='text-2xl font-black'>{book?.title}</h1>
                <button onClick={() => SetModalStatus(true)} className='text-gray-400'><FaEye /></button>
              </div>

              <p className='my-2 text-red-900'> {book?.author}</p>
              <div className="md:grid grid-cols-3 gap-1 my-5">
                <p className='font-bold'>{book?.publisher} </p>
                <p className='font-bold'>{book?.language}</p>
                <p className='font-bold'>{book?.pages} </p>
                <p className='font-bold'>{book?.discountPrice}</p>
                <p className='font-bold'>{book?.isbn}</p>
                <p className='font-bold'>{book?.category}</p>
                <p className='font-bold'>{book?.sellerMail}</p>
              </div>
              <div className="md:my-10 my-2">
                <p className='font-bold text-lg'>
                  {book?.sellabstracterMail}
                </p>
              </div>
              <div className="flex justify-end">
                <Link to={'/books'} className='bg-blue-700 text-white flex items-center rounded p-2'>
                  <FaBackward className='me-3 ' />Back</Link>
                <button className='bg-green-700 p-2 rounded text-white ms-5'>Buy $ 300</button>
              </div>

            </div>
          </div>
        </div>

      </div>
      {/* modal */}
      {
        modalSatus &&
        <div onClick={() => SetModalStatus(false)} className="relative z-10">
          <div className="bg-gray-500/75 fixed inset-0">
            <div className="flex justify-center items-center min-h-screen">
              <div className="bg-white rounded-2xl md:w-250 w-50">
                {/* modal title */}
                <div className="bg-black text-white p-3 flex justify-between items-center">
                  <h3>Books images</h3>
                  <FaX onClick={() => SetModalStatus(false)} />
                </div>
                {/* modal body */}
                <div className="relative p-5">
                  <p className='text-blue-600 flex items-center'><FaCamera className='me-2' />Camer clicks of the book in the hand of seller</p>
                  {/* book images in row*/}
                  <div className="md:flex flex-wrap my-4 ">
                    {
                      book?.uploadImages?.map((filename)=>(
                      <img key={filename} className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src={`${serverURL}/uploads/${filename}`} alt="book" />

                      ))
                    }
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      }
      < Footer />
    </>
  )
}

export default View