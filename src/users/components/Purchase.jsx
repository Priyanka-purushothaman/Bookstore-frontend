import React, { useEffect, useState } from 'react'

function Purchase() {
  const [userBoughtBooks, setUserBoughtBooks] = useState([])

  console.log(userBoughtBooks);

  const getUserBougntBooks = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllUserBooksAPI(reqHeader)
      if (result.status == 200) {
        setUserBooks(result.data)
      } else {
        console.log(result);

      }
    }
  }

  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
      {/* book div duplicate */}


      {
        userBoughtBooks?.length > 0 ?
          userBoughtBooks?.map(book => (
            <div className="bg-gray-200 p-5 rounded">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div>
                  <h2 className="text-2xl">{book?.title}</h2>
                  <h3 className="text-xl">{book?.author}</h3>
                  <h4 className="text-lg text-white">$ {book?.discountPrice} </h4>
                  <p className='text-justify'>{book?.abstract}</p>
                  <div className="flex mt-5 ">
                    {/* pending */}
                    <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/thumbnails/047/415/760/small/purchase-line-filled-slip-icon-vector.jpg" alt="purchase" />


                  </div>
                </div>

                <div className="px-4 mt-4 md:mt-0">
                  <img className='w-90' src={book?.imageURL} alt="book" />
                  <div className="flex justify-end">
                    <button className="p-2 bg-red-600 text-white mt-5">DELETE</button>

                  </div>
                </div>




              </div>
            </div>
          ))
          :
          <div className="text-center my-5 font-bold">
            Books are not uploaded yet!!!
          </div>
      }



    </div>
  )
}

export default Purchase