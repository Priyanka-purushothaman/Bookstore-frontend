import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function PaymentSuccess() {
  return (

    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center text-blue-600 md:px-20 px-5">
        <div className="md:grid grid-cols-2 gap-10 items-center">
          <div>
            <h1 className='md:text-4xl text-green-600 my-3'>Congratulation!!!!!!!</h1>
            <h2 className='my-10 md:text-xl'>Thank you for purchasing with BookStore. Hope you have a good time with us</h2>
            <Link to={'/books'} className='flex items-center bg-green-700 my-5 p-2 w-60 text-white'>Explore More Books!!!!</Link>
          </div>
          <div>
            <img src="https://cdn.dribbble.com/userupload/42508534/file/original-3e8dadaf638a34f2ac2a1ff8e7aed0f0.gif" alt="Payment success" />

          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default PaymentSuccess