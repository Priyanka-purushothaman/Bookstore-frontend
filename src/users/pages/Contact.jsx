import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationDot ,FaEnvelope, FaPaperPlane, FaPhone} from 'react-icons/fa6'

function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-40 p-5'>
        <div className="text-center my-1">
          <h1 className='text-3xl font-bold mb-5 '> Contact Us</h1>
          <p className='text-justify'>Thank you for visiting our website.
            If you have any inquiries regarding our books, orders, author submissions, or general support, please reach out to us using the contact form below.
            Our team aims to respond promptly and provide the assistance you need. Your feedback is always appreciated.
            Whether you’re looking for book suggestions, need help navigating the site, or want to collaborate, this is the place to reach us.
            Share your message through the form below, and we’ll be in touch soon. Let’s talk books!</p>
        </div>
        <div className="md:flex justify-evenly text-center ms-5 ">
          <div className="flex items-center w-75 mt:md-0 mt-5 ms-5 ">
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className="flex justify-center items-center bg-gray-200 me-3 mb-2">
              <FaLocationDot className='mb-2' />
            </div>
            <p>123 Main Street , Apt 48, Anytown, CA 91234</p>
          </div>
          <div className="flex items-center w-75 mt:md-0 mt-5 ms-5">
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className="flex justify-center items-center bg-gray-200 me-3 mb-2">
              <FaPhone className='mb-2' />
            </div>
            <p>+91 9656458956</p>
          </div>
          <div className="flex items-center w-75 mt:md-0 mt-5">
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className="flex justify-center items-center bg-gray-200 me-3 mb-2">
              <FaEnvelope className='mb-2' />
            </div>
            <p>contact@bookstore.com</p>
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-10 md:px-30 mt-5 md:mt-0">
          {/* form */}
          <div className="bg-gray-200 p-5">
            <h1 className='text-xl text-center'>  Send me Message</h1>
            <div className="my-3">
              <input placeholder='Name' type="text" className='bg-white p-2 w-full rounded' />
            </div>
            <div className="my-3">
              <input placeholder='Email' type="text" className='bg-white p-2 w-full rounded' />
            </div>
            <div className="my-3">
              <input placeholder='Message' type="text" className='bg-white p-2 w-full rounded' />
            </div>
            <div className="my-3">
              <button className='bg-black p-2 w-full text-white flex justify-center items-center'>Send
                <FaPaperPlane className='ms-2' /></button>
            </div>

          </div>

          {/* map */}
          <div className="mt-1 w-full md:mt-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31447.05665552484!2d76.3911017429453!3d9.860259275224278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08768c43136d6d%3A0xa8eb1df61b20853b!2sKanjiramattom%2C%20Kerala!5e0!3m2!1sen!2sin!4v1764381249266!5m2!1sen!2sin" 
            width={"100%"} height="400" style={{border:'0'}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default Contact