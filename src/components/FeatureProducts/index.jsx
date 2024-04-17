import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import { FaHeartCircleCheck } from "react-icons/fa6";

const index = ({products}) => {
  return (
    <div className="products">
    <div className="header m-4"><h2 className='font-bold text-gray-800'>Feature Products</h2></div>
    <div className='flex flex-row flex-wrap'>
        {(products.length) ? products.map(item => (
            <div className='w-1/3 bg-slate-300 rounded-md m-4 p-4 text-center shadow-xl hover:bg-slate-400 hover:text-gray-100 product-item' key={item.id}>
                <img src={`./img/${item.image}`} alt={item.name} className='w-40 block m-auto' />
                <h2 className='text-xl'>{item.name}</h2>
                <h2 className='text-sm'>Category : {item.category}</h2>
                <h2 className='text-xl'>{item.price}</h2>
                <h2 className='text-xl'>{item.name}</h2>
                <div className="action flex flex-row flex-wrap justify-between">
                <button className=' bg-neutral-600 text-zinc-100 py-1 px-2 text-sm rounded-md' ><FaCartArrowDown className='w-8 text-xl m-auto text-center' /></button>
                <button className=' bg-neutral-600 text-zinc-100 py-1 px-2 text-sm rounded-md' ><FaHeartCircleCheck className='w-8 text-xl m-auto text-center' /></button>
                </div>
            </div>
        )) : 'No products'}
    </div>
    </div>
  )
}

export default index 