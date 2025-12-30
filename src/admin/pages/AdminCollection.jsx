import React, { useState, useEffect } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import { getAllAdminBooksAPI, getAllUsersAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'
// import { ToastContainer, toast } from 'react-toastify';
// import  {updateBookStatusAPI} from '../../services/allAPI'


function AdminCollection() {
  const [tab, setTab] = useState(1)
  const [allBooks, setAllBooks] = useState([])
  const [allUsers, setAllUsers] = useState([])

  console.log(allBooks);
  console.log(allUsers);

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (token) {
      if (tab == 1) {
        getAllBooks(token)
      } else if (tab == 2) {
        getAllUsers(token)
      }
    }
  }, [tab])

  const getAllBooks = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAllAdminBooksAPI(reqHeader)
    if (result.status == 200) {
      setAllBooks(result.data)
    } else {
      console.log(result);

    }
  }
  const getAllUsers = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAllUsersAPI(reqHeader)
    if (result.status == 200) {
      setAllUsers(result.data)
    } else {
      console.log(result);

    }
  }

  // const updateBookStatus = async (id) => {
  //   const token = sessionStorage.getItem("token")
  //   if(token){
  //    const reqHeader = {
  //     "Authorization": `Bearer ${token}`
  //   }
  //    const result = await updateBookStatusAPI(id,reqHeader)
  //   if (result.status == 200) {
  //     toast.success("Book Status updated!!!")
  //     getAllBooks(token)
  //   } else {
  //     console.log(result);

  //   }
  //   }
    
   
  // }




  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4 p-8">
          <h1 className="my-2 text-center text-3xl font-bold">All Collection</h1>
          {/* tabs */}
          <div className="flex my-10 justify-center text-3xl font-bold">
            <p onClick={() => setTab(1)} className={tab == 1 ? "font-bold border-gray-100 text-xl border-t border-l border-r p-3 text-blue-600 cursor-pointer" :
              "border-b font-bold border-gray-200 text-xl p-3"}>Books</p>
            <p onClick={() => setTab(2)} className={tab == 2 ? "font-bold border-gray-100 text-xl border-t border-l border-r p-3 text-blue-600 cursor-pointer" :
              "border-b font-bold border-gray-200 text-xl p-3"}>Users</p>
          </div>
          {
            tab == 1 &&
            <div className='md:grid grid-cols-4 w-full my-3'>
              {/* duplicate book card */}
              {
                allBooks?.length > 0 ?
                  allBooks?.map(book => (
                    <div key={book?._id} className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
                      <img width={'250px'} height={'25{book?.discountPrice}0px'} src={book?.imageURL} alt="book" />
                      <div className='flex justify-center items-center flex-col mt-4'>
                        <h3 className='text-yellow-600 font-bold text-lg'>{book?.author}</h3>
                        <h4 className='text-lg'>{book?.title}</h4>
                        <h4>${book?.discountPrice}</h4>
                        <div className='grid mt-3 w-full'>
                            {
                              book?.status !="approved"?
                            <button className='bg-green-600 mt-3 py-3 text-white'>APPROVE</button>
                              :
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Check_icon.svg/1024px-Check_icon.svg.png" alt="check icon" />
                            }
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <p>Loading</p>
              }
            </div>
          }
          {
            tab == 2 &&
            <div className='md:grid grid-cols-4 w-full my-3'>
              {/* duplicate Users card */}
              {
                allUsers?.length > 0 ?
                  allUsers?.map(user => (
                    <div key={user?._id} className="rounded bg-gray-200 p-2 m-2 text-wrap">
                      <p className="text-red-600 font-bold">ID : {user?._id}</p>
                      <div className="flex items-center text-wrap mt-2">
                        {/* user image */}
                        <img width={'50px'} height={'50px'} style={{ borderRadius: '50%' }} 
                        src={user?.picture ? user?.picture.startsWith("https://lh3.googleusercontent.com/") ? user?.picture : `${serverURL}/uploads/${user.picture}` : "https://mockmind-api.uifaces.co/content/human/80.jpg"} alt="user" />
                        {/* content */}
                        <div className="ms-5">
                          <h4 className="font-bold text-2xl text-blue-800">{user?.email}</h4>
                          <p>{user?.email}</p>
                        </div>

                      </div>
                    </div>
                  ))
                  :
                  <p>Loading...</p>
              }

            </div>
          }

        </div>
      </div>
      <Footer />
      {/* <ToastContainer position="top-center" autoClose={5000} theme="colored" /> */}
      
    </>
  )
}

export default AdminCollection