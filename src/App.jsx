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
import { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 7500)

  return (
    <>
      <Routes>
        <Route path='/' element={loading ? <Preloader /> : <Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<Books />} />

        <Route path='/user/profile' element={<Profile />} />
        <Route path='/books/:id/view' element={<View />} />

        <Route path='/admin/home' element={<AdminHome />} />
        <Route path='/admin/profile' element={<AdminProfile />} />
        <Route path='/admin/resources' element={<AdminCollection />} />

        <Route path='/*' element={<Pnf />} />







      </Routes>
    </>
  )
}

export default App
