import React, { useState, useEffect } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import { FaPen } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import serverURL from '../../services/serverURL'
import { editUserAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';



function AdminProfile() {
  const [userDetails, setUserDetails] = useState({
    id: "", username: "", password: "", role: "", bio: "", picture: ""
  })
  const [confirmPassword, setConfirmPassword] = useState("")
  const [existingPicture, setExistingPicture] = useState("")
  const [preview, setPreview] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({ ...userDetails, id: user._id, username: user.username, role: user.role, bio: user.bio })
      setExistingPicture(user.picture)
    }
  }, [])

  const handleUploadPicture = (imgFile) => {
    setUserDetails({ ...userDetails, picture: imgFile })
    const url = URL.createObjectURL(imgFile)
    setPreview(url)
  }

  const checkPasswordMatch = (data) => {
    setConfirmPassword(data)
    userDetails.password == data ? setPasswordMatch(true) : setPasswordMatch(false)
  }
  const resetForm = () => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({ ...userDetails, id: user._id, username: user.username, role: user.role, bio: user.bio, password: "" })
    setExistingPicture(user.picture)
    setPreview("")
    setConfirmPassword("")
    setPasswordMatch(true)
  }
  const handleProfileUpdate = async () => {
    const { username, password, bio, role, id, picture } = userDetails
    if (!username || !password || !bio || !confirmPassword) {
      toast.info("Please fill the form completely!!!!")
    } else {
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        const reqBody = new FormData()
        for (let key in userDetails) {
          if (key != "picture") {
            reqBody.append(key, userDetails[key])
          } else {
            preview ? reqBody.append("picture", userDetails.picture) : reqBody.append("picture", existingPicture)
          }
        }

        const result = await editUserAPI(id, reqBody, reqHeader)
        if (result.status == 200) {
          toast.success("Profile updated successfully... Please login with new password")
          setTimeout(() => {
            navigate('/login')
          }, 2000);
        } else {
          console.log(result);
          toast.error("Something went wrong!!! ")

        }
      }

    }
  }

  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4 p-10">

          <h1 className="text-center my-3 font-boldtext-3xl">Settings</h1>
          <div className="md:grid grid-cols-2 gap-8">
            {/* text */}
            <div>
              <h4 className='text-xl font-bold mb-4'>Admin Settings Page in Bookstore Management System </h4>
              <p className='text-justify mb-5'>The Account Settings page enables users or administrators to manage their personal account
                information and security preferences. Users can update profile details, change passwords, configure notifications, and
                manage security features like two-factor authentication, ensuring a secure and personalized experience.</p>
              <p> 👤 1. Personal Information
                2. Password & Security
                3. Notification Preferences
                4. Account Actions
                5. Save Changes </p>
            </div>
            {/* form  */}
            <div className="flex justify-center items-center flex-col bg-red-300 p-5 rounded">
              {/* image */}
              <label htmlFor="uploadImg" >
                <input onChange={e => handleUploadPicture(e.target.files[0])} type="file" id='uploadImg' hidden />
                {
                  existingPicture ?
                    <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={preview ? preview : existingPicture.startsWith("https://lh3.googleusercontent.com/") ? existingPicture : `${serverURL}/uploadsa/${existingPicture}`} alt="profile" />
                    :
                    <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={preview ? preview : "https://previews.123rf.com/images/azvector/azvector1802/azvector180200461/95911743-info-people-upload-user-icon-vector-illustration.jpg"} alt="profile" />

                }

                <button style={{ marginTop: '-20px' }} className='bg-dark p-2 text-white rounded'><FaPen /></button>

              </label>

              {/*name  */}
              <div className="mt-10 mb-3 w-full px-5">
                <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='Username' className='border border-gray-200 p-2 rounded w-full' />

              </div>
              {/* password */}
              <div className="mb-3 w-full px-5">
                <input value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type="password" placeholder='New Pssword' className='border border-gray-200 p-2 rounded w-full' />
              </div>
              <div className="mb-3 w-full px-5">
                <input value={confirmPassword} onChange={e => checkPasswordMatch(e.target.value)} type="password" placeholder='Confirm Pssword' className='border border-gray-200 p-2 rounded w-full' />
              </div>
              {
                !passwordMatch && <div className="mb-3 w-full px-5 font-bold text-red-600 text-xs">
                  *Confirm password must match with new password
                </div>
              }

              {/* button */}
              <div className="mb-3 flex justify-center px-5 w-full mt-5">
                <button onClick={resetForm} className="px-3 mx-4 py-2 rounded border bg-red-600 text-white hover:bg-black hover:border-green-600 hover:text-red-600">
                  RESET</button>
                <button className="px-3 py-2 rounded border bg-green-600 text-white hover:bg-black hover:border--600 hover:text-green-600" disabled={!passwordMatch ? true : false}>
                  UPDATE  </button>
              </div>



            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-center" autoClose={5000} theme="colored" />

    </>
  )
}

export default AdminProfile