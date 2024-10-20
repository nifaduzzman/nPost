import Sidebar from '@/components/adminComponents/Sidebar'
import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout({children}:any) {
  return (
    <>
      <ToastContainer theme='dark'/>
      <Sidebar/>
      {children}
    </>
  )
}

export default Layout
