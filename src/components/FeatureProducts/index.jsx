import React from 'react'

const index = ({products}) => {
  return (
    <div className='flex flex-row flex-wrap m-2'>
        {(products.length) ? products.map(item => (
            <div className='w-1/3 bg-slate-300 rounded-md m-2 p-2 text-center shadow-xl' key={item.id}>
                <h2 className='text-xl'>{item.name}</h2>
                <h2 className='text-sm'>Category : {item.category}</h2>
                <h2 className='text-xl'>{item.price}</h2>
                <h2 className='text-xl'>{item.name}</h2>
                <div className="action flex flex-row flex-wrap justify-between">
                <input type="button" className=' bg-neutral-600 text-zinc-100 py-1 px-2 text-sm rounded-md' value="Add to cart" />
                <input type="button" className=' bg-neutral-600 text-zinc-100 py-1 px-2 text-sm rounded-md' value="Add to wishlist" />
                </div>
            </div>
        )) : 'No products'}
    </div>
  )
}

export default index