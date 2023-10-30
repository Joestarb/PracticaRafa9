import React from 'react'
import AdminNavHome from '../Components/Admin/AdminNavHome'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import CrudTrabajadores from '../Components/Admin/CrudTrabajadores'

function HomePage() {
    return (
        <div className=' bg-[#FAFBFD]'>
            <AdminNavHome />
            <AdminNavbar/>
            <CrudTrabajadores/>
        </div>
    )
}

export default HomePage