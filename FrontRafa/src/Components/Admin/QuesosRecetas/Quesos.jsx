import React from 'react';
import queso from '../../../assets/queso.png';
function Quesos() {
  const quesos = [
        {
            id: 1,
            name: "Queso Manchego",
            image: queso,
            ingredients: ["Manzana", "Pepino"],
        },
        {
            id: 1,
            name: "Queso Manchego",
            image: queso,
            ingredients: ["Manzana", "Pepino"],
        },
        {
            id: 1,
            name: "Queso Manchego",
            image: queso,
            ingredients: ["Manzana", "Pepino"],
        },
        {
            id: 1,
            name: "Queso Manchego",
            image: queso,
            ingredients: ["Manzana", "Pepino"],
        },
    ];
    return (
        <div>
            <section className=' '>
                <div className='grid grid-cols-2 justify-center gap-10'>
                    {quesos.map((item) => (
                        <div key={item.id} className='text-center flex flex-col justify-center'>

                            <div className='flex justify-center'>
                            <img className='w-64 mt-10' src={item.image} alt={item.name} />
                            </div>
                            <p className='font-bold text-2xl'>{item.name}</p>
                            <p>{item.ingredients}</p>
                            <button className=' p-2 bg-[#2794E3] rounded-2xl  text-white'>Ver más</button>
                        </div>
                    ))}
                </div>


            </section>
        </div>
    )
}

export default Quesos