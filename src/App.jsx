import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './users/pages/Home'
import Books from './users/pages/Books'
import Contact from './users/pages/Contact'
import Profile from './users/pages/Profile'
import View from './users/pages/View'
import AdminHome from './admin/pages/AdminHome'
import AdminCollection from './admin/pages/AdminCollection'
import AdminProfile from './admin/pages/AdminProfile'
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'
import Preloader from './components/Preloader'
import { useContext, useState } from 'react'
import PaymentSuccess from './users/pages/PaymentSuccess'
import PaymentError from './users/pages/PaymentError'
import { routeGuardContext } from './contextAPI/GuardContex'

function App() {
  const { role, setAuthorised } = useContext(routeGuardContext)
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3500)

  return (
    <>
      <Routes>
        <Route path='/' element={loading ? <Preloader /> : <Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<Books />} />

        {
          role == 'user' &&
          <>
            <Route path='/user/profile' element={<Profile />} />
            <Route path='/books/:id/view' element={<View />} />
            <Route path='/user/payment-success' element={<PaymentSuccess />} />
            <Route path='/user/payment-error' element={<PaymentError />} />
          </>
        }


      {
          role == 'admin' &&
          <>
            <Route path='/admin/home' element={<AdminHome />} />
            <Route path='/admin/profile' element={<AdminProfile />} />
            <Route path='/admin/resources' element={<AdminCollection />} />
          </>
      }
        <Route path='/*' element={<Pnf />} />

      </Routes>
    </>
  )
}

export default App
