import React from 'react'
import AdminNavHome from '../Components/Admin/AdminNavHome'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import FormAnadirTrabajadores from '../Components/Admin/AnadirTrabajadores/FormAnadirTrabajadores'

function AnadirTrabajadores() {
    return (
        <div className='bg-[#FAFBF] h-screen w-full'>
            <AdminNavHome />
            <AdminNavbar />
            <FormAnadirTrabajadores/>
        </div>
    )
}

export default AnadirTrabajadores