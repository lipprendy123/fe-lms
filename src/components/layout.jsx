import React from 'react'
import Sidebar from './sidebar'
import Header from './header'
// import Courses from '../pages/manager/home/courses'
// import Students from '../pages/manager/home/students'
import { Outlet, useMatch } from 'react-router-dom'

const LayoutDashboard = ({isAdmin = true}) => {
  const isPreviewPage = useMatch('/manager/courses/:id/preview')
  const isStudentPreviewPage = useMatch('/student/detail-course/:id')
  
  return (
    <>
   {isPreviewPage !== null || isStudentPreviewPage !== null ? (
    <Outlet/>
   ): (
     <div className="flex min-h-screen">
        <Sidebar isAdmin={isAdmin}/>
        <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
            <Header/>
           <Outlet/>
        </main>
    </div>
   )}
   </>
  )
}

export default LayoutDashboard