import React, { useState } from 'react';
import TablaUsuarios from './TablaUsuarios';
function CrudTrabajadores() {
    const [usuarios, setUsuarios] = useState([
        {
            userid: 1,
            username: 'Usuario1',
            userlevel: 'Nivel 1',
            enable: true,
        },
        {
            userid: 2,
            username: 'Usuario2',
            userlevel: 'Nivel 2',
            enable: false,
        },
        // Agrega más usuarios según sea necesario
    ]);

    const handleEditar = (userid) => {
        // Lógica para editar el usuario con el userid proporcionado
        console.log(`Editar usuario con ID ${userid}`);
    };

    const handleEliminar = (userid) => {
        // Lógica para eliminar el usuario con el userid proporcionado
        console.log(`Eliminar usuario con ID ${userid}`);
    };
    return (
        <div className='h-[90vw] mt-10'>
            <div className='flex   justify-around'>
                <div className='flex gap-3'>
                    <p className='m-auto'>User</p> <input type="text" placeholder='search' className=' m-auto block' />
                </div>
                <div >
                    <button className=' bg-[#2794E3] rounded-xl p-3 text-white'> Add new +</button>
                </div>
            </div>

            <div className=' grid place-content-center'>
                <div>
                    <TablaUsuarios data={usuarios} onEditar={handleEditar} onEliminar={handleEliminar} />
                </div>

        </div>
        </div >
    )
}

export default CrudTrabajadores