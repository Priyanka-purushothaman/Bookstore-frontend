import React, { useEffect, useState } from 'react'
import { getAllUserBoughtBooksAPI } from '../../services/allAPI';

function Purchase() {
  const [userBoughtBooks, setUserBoughtBooks] = useState([])

  console.log(userBoughtBooks);

  useEffect(()=>{
    getUserBougtBooks()
  },[])

  const getUserBougtBooks = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllUserBoughtBooksAPI(reqHeader)
      if (result.status == 200) {
        setUserBoughtBooks(result.data)
      } else {
        console.log(result);

      }
    }
  }
1
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
      {/* book div duplicate */}
       {
        userBoughtBooks?.length>0?
        userBoughtBooks?.map(book=>(
          <div className="bg-gray-200 p-5 rounded">
        <div className="md:grid grid-cols-[3fr_1fr]">
          <div>
            <h2 className="text-2xl">{book?.title}</h2>
            <h3 className="text-xl">{book?.author}</h3>
            <h4 style={{color:'red'}} className="text-lg">$ {book?.discountPrice} </h4>
            <p className='text-justify'>{book?.abstract}</p>
            <div className="flex mt-5 ">
             {/* purchase */}
             <img width={'160px'} height={'160px'} src="https://thumbs.dreamstime.com/b/purchase-button-rounded-sign-white-background-isolated-196834801.jpg" alt="purchase" />

            </div>
          </div>

          <div className="px-4 mt-4 md:mt-0">
            <img className='w-90' src={book?.imageURL} alt="book" />
           
          </div>
        </div>
      </div>
        ))
        :
        <div className="text-center my-5 font-bold">
          You didn't purchase any books yet!!!
        </div>
      }



    </div>
  )
}

export default Purchase