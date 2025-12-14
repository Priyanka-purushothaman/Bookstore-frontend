import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className='md:grid grid-cols-3 p-10 text-white md:gap-9 bg-black'>
        <div className="flex items-center justify-center flex-col">
          <h3>ABOUT US</h3>
          <p className='text-justify mt-2'>Founded with a passion for literature and a love for community, our bookstore offers a carefully curated selection of bestselling titles, timeless classics, and hidden gems across all genres.
             Whether you're searching for the latest fiction release, a powerful non-fiction read, academic resources, or children's books, we aim to provide a place where every reader finds something special.</p>

        </div>
        <div className=" flex-col text-center mt-2 md:mt-0">
          <h3>NEWS LETTER</h3>
          <p className='mt-3'>Stay updated with our latest trends</p>
          <div className="flex justify-center">
            <input type="text" placeholder='Email Id her ' className='p-2 bg-white placeholder-gray-300 text-black' />
            <button className='p-2  bg-yellow-500 '><FaArrowRight /></button>
          </div>

        </div>
        <div className="flex-col text-center mt-2 md:mt-0">
          <h3>FOLLOW US</h3>
          <p className='my-4'>Let us be social</p>
          <div className="flex justify-center">
            <FaFacebook className='mx-2'/>
            <FaInstagram className='mx-3' />
            <FaTwitter className='mx-3' />
            <FaEnvelope className='mx-2' />

          </div>

        </div>
      </div>
    </>
  )
}

export default Footer