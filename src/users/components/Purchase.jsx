import React from 'react'

function Purchase() {
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
              <img width={'120px'} height={'120px'}  src="https://static.vecteezy.com/system/resources/thumbnails/047/415/760/small/purchase-line-filled-slip-icon-vector.jpg" alt="purchase" />
             </div>
          </div>

          <div className="px-4 mt-4 md:mt-0">
            <img className='w-90' src="https://store.whitefalconpublishing.com/cdn/shop/files/TheEnglish_CoverHB_F_large.jpg?v=1718624085" alt="book" />
            <div className="flex justify-end">

            </div>
          </div>




        </div>
      </div>
    </div>
  )
}

export default Purchase