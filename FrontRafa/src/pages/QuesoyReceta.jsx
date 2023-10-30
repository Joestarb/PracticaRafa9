import React from 'react'
import AdminNavHome from '../Components/Admin/AdminNavHome'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import FormQuesoReceta from '../Components/Admin/QuesosRecetas/FormQuesoReceta'
import Quesos from '../Components/Admin/QuesosRecetas/Quesos'

function QuesoyReceta() {
    return (
        <div>
            <AdminNavHome />
            <AdminNavbar />
            <div className='girdquesoreceta'>
                <FormQuesoReceta />
                <Quesos />
            </div>
        </div>
    )
}

export default QuesoyReceta