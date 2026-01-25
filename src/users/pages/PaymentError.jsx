import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa6'

function PaymentError() {
  return (
    <>
     <Header/>
    <div className="min-h-screen flex items-center justify-center md:px-20 px-5  ">
        <div className="md:grid grid-cols-2 gap-10 items-center">
        <div>
            <h1 style={{color:'red'}} className='md:text-4xl my-7'>Sorry!!!!!! Payment failed</h1>
            <h2 className='my-5 md:text-xl'>We apologize for the inconviene caused and appreciate your visit to BookStore.. </h2>
            <Link to={'/books'} className='flex items-center bg-blue-600 text-white p-2 w-60 my-3'><FaBackward  className='me-2'/>Explore More Books!!!!</Link>
       </div>
       <div>
       <img src="https://cdn.dribbble.com/userupload/25755612/file/original-8aa015e52f3416dc252a15deff067cc9.gif" alt="Payment error" />

       </div>
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default PaymentError