import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/dashboard/AdminSidebar';
import Navbar from '../../components/navbar/Navbar';

const Admin = () => {
  const { user, loading } = useContext(AuthContext); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className='flex'>
    <AdminSidebar/>
    <div className='flex-1 ml-64 bg-gray-100 h-screen'>
    <Navbar/>
    <Outlet/>
    </div>
    </div>
    </>
  );
};

export default Admin;
