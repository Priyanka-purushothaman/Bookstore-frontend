import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { routeGuardContext } from '../contextAPI/GuardContex'

function Pnf() {
  const {role,authorised} = useContext(routeGuardContext)
  const navigate = useNavigate()
  const backHome= () =>{
    if(authorised){
    role=="user"? navigate('/') : navigate('')

    } else{
      navigate('/')
    }
  }
  return (
    <>
      
    <div className="h-screen flex items-center flex-col justify-center" >
    
      <img width={'25%'} src="https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif" alt="page not found" />
      <p className='font-bold text-2xl'>Oh!!! No..</p>
       <h1 style={{color:'blue'}} className='text-blue-800'>Page Not Found</h1>
       <h2>We Couldn't find this Page </h2>
      
      <button onClick={backHome} className='bg-blue-800 py-2 px-5 mt-4 text-white'>Home</button>
     </div>
      
     </>
  )
}

export default Pnf