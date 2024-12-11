import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const protectedRoutes = ({children,requiredId}) => {

  const {user,loading} = useContext(AuthContext)

  if(loading){
    return <div>Loading...</div>
  }

  if(!requiredId.includes(user.id)){
    <Navigate to='unAuthorized'/>
  }

  return user ? children : <Navigate to='/login'/>
 
}

export default protectedRoutes
