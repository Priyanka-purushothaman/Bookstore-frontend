import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaSearch } from 'react-icons/fa'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { getHomePageBooksAPI } from '../../services/allAPI'
import { searchContext } from '../../contextAPI/ShareContext'


function Home() {
  const navigate = useNavigate()
  // const[searchKey,setSearchKey] = useState("")
  const {searchKey,setSearchKey } = useContext(searchContext)
  const [homeBooks, setHomeBooks] = useState([])

  console.log(homeBooks);

  useEffect(() => {
    getHomeBooks()
  }, [])
  const getHomeBooks = async () => {
    const result = await getHomePageBooksAPI()
    // console.log(result);
    if (result.status == 200) {
      setHomeBooks(result.data)
    } else {
      console.log(result);

    }

  }

  const handleSearch = () => {
    if (!searchKey) {
      toast.warning("please provide a Book title here!!!")
    } else if (!sessionStorage.getItem("token")) {
      toast.warning("Plese Login to search Book!!!!")
      setTimeout(() => {
        navigate('/login')
      }, 2500);
    } else if (sessionStorage.getItem("token") && searchKey) {
      navigate('/books')
    } else {
      toast.error("Something went wrong!!!!")
    }
  }
  return (
    <>
      <Header />
      <div>
        {/* landing part -serch */}
        <div style={{ height: '500px' }} className='flex justify-center items-center flex-col bg-[url(/bg1.png)] bg-cover bg-center text-white'>
          <div style={{ height: '500px', backgroundColor: 'rgba(0,0,0,0.5)' }} className='w-full flex justify-center items-center flex-col'>
            <h1 className='text-5xl font-bold mb-2'>Wonderful Gifts</h1>
            <p>Gift your family and friends a book</p>
            {/* search */}
            <div className="mt-9 flex">
              <input onChange={e => setSearchKey(e.target.value)} type="text"
                className='bg-white rounded-3xl text-black w-120 placeholder-gray-500 p-2' placeholder='Search Books Here' />
              <button onClick={handleSearch} className='text-gray-500' style={{ marginLeft: '-40px' }}><FaSearch /></button>

            </div>
          </div>

        </div>

        {/* new arrival */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
          <h2 className='text-xl ms-1 md:ms-4 '>Explore Our Latest Collection</h2>
          {/* book row & col */}
          <div className="md:grid grid-cols-4 w-full mt-10">
            {/* duplicate book card div */}
            {
              homeBooks?.length > 0 ?
                homeBooks?.map(book => (
                  <div key={book?._id} className="shadow rounded p-5 mx-4 mb-5 md:mb-0">
                    <img className='w-full md:w-full' src={book?.imageURL} alt="book" />
                    <div className='flex justify-center items-center flex-col mt-4'>
                      <h3 className='text-yellow-600 font-bold text-lg'>{book?.author}</h3>
                      <h4 className='text-lg'>{book?.title}</h4>
                      <h4>{book?.discountPrice}</h4>
                    </div>
                  </div>
                ))
                :
                <p className='font-bold'>Loading ...</p>
            }

          </div>
          {/* all books link */}
          <div className="text-center mt-20">
            <Link to={'/books'} className='p-3 bg-black text-white underline'>Explore More....</Link>
          </div>

        </section>

        {/* author */}
        <section className="md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10">
          <div className='text-center' >
            {/* author content */}
            <div className='text-center'>
              <h2 className='text-2xl font-bold'>FEATURED AUTHORS</h2>
              <h2 className='text-xl mb-5'>Captivatives With Every Word </h2>
              <p className='text-justify mt-9'>With a passion for storytelling and a love for the written word, creates books that inspire, entertain, and connect with readers of all ages.
                Their work blends creativity, emotion, and imagination inviting you into worlds you’ll never want to leave.creates engaging stories that captivate readers of all ages.
                Their books are known for strong characters, vivid worlds, and memorable storytelling.has always believed in the power of stories to transform, inspire, and connect us. When not writing, can be found.
                Each book is written with care, heart, and a passion for storytelling—inviting readers into worlds full of imagination and meaning.</p>
              <p className='text-justify mt-4'>With a growing presence in the literary world, has established a reputation for crafting thoughtful, beautifully written works.
                Their books, celebrated for depth and creativity, reflect a unique voice that continues to resonate with readers across the globe.writing is more than a profession it’s a passion. Each story they create comes from a place of curiosity, heart, and imagination.
                Their books offer readers a chance to explore new worlds and experience unforgettable journeys.</p>
            </div>
          </div>
          {/* author image */}
          <div className="p-5 flex justify-center items-center">
            <img className='w-full md:w-full' src="https://m.media-amazon.com/images/S/amzn-author-media-prod/9ss08alr2cr47j8artsvkgalla.jpg" alt="author" />

          </div>


        </section>

        {/* testimony */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold'>TESTIMONIAL</h1>
          <h2 className='text-2xl mb-5 ms-5'>See What Others Are Saying</h2>
          <div className="my-5 flex justify-center items-center flex-col">
            {/* user images */}
            <img width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} src="https://mockmind-api.uifaces.co/content/human/80.jpg" alt="user" />
            {/* user feedback */}
            <p className='mt-3'>Acel Halton</p>
            <p className='text-justify mt-4 ms-2'><span className='font-bold me-2'>"The variety of books is impressive! I found titles that I couldn’t find on other online bookstores." </span>I loved the curated selection especially the local authors’ section. Staff were friendly and helped me find exactly what I needed.
              Great place to relax and discover new books. The reading corners are cozy, and the café inside makes a perfect reading spot.
              Highly recommend.I loved how easy it is to browse through different genres. The website loads fast and the layout is really clean!</p>
          </div>
        </section>
      </div>
      <Footer />
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />


    </>
  )
}

export default Home