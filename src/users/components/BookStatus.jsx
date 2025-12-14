import React from 'react'

function BookStatus() {
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
      {/* book div duplicate */}
      <div className="bg-gray-200 p-5 rounded">
        <div className="md:grid grid-cols-[3fr_1fr]">
          <div>
            <h2 className="text-2xl">Title</h2>
            <h3 className="text-xl">Author</h3>
            <h4 className="text-lg text-white">$ 400</h4>
            <p className='text-justify'>Abstract</p>
            <div className="flex mt-5 ">
              {/* pending */}
              <img width={'120px'} height={'120px'} className='me-4' src="https://t4.ftcdn.net/jpg/06/97/20/59/360_F_697205989_y34XwJrodVe5YqIHmW4GNKxxYdhAjFnD.jpg" alt="pending" />
              {/* approved */}
              <img width={'100px'} height={'100px'}  className='me-4' src="https://media.tenor.com/eD_V6tkKm9IAAAAM/agree-seal.gif" alt="approved" />

              {/* sold */}
              <img width={'90px'} height={'90px'}  className='me-4' src="https://previews.123rf.com/images/123vector/123vector1506/123vector150600044/41490808-illustration-of-red-sold-stamp-design-icon.jpg" alt="sold" />

            </div>
          </div>

          <div className="px-4 mt-4 md:mt-0">
            <img className='w-90' src="https://store.whitefalconpublishing.com/cdn/shop/files/TheEnglish_CoverHB_F_large.jpg?v=1718624085" alt="book" />
            <div className="flex justify-end">
              <button className="p-2 bg-red-600 text-white mt-5">DELETE</button>

            </div>
          </div>




        </div>
      </div>
    </div>
  )
}

export default BookStatus