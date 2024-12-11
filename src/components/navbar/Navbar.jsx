import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const {user,logout} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogOut = ()=>{
        logout()
        navigate('/login')
    }

  return (
    <div className='flex items-center text-white justify-between h-12 bg-teal-500 px-5'>
      <p>Welcome {user.username}</p>
      <button className='px-4 py-1 bg-teal-700 hover:bg-teal-800' onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default Navbar
