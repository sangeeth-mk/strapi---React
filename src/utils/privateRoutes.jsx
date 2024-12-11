import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const privateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    if(loading){
      return  <div>Loading...</div>
    }

    return user ? children : <Navigate to='/login'/>
}

export default privateRoutes
