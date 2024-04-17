import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import { FaHeartCircleCheck } from "react-icons/fa6";


const index = ({logo}) => {
  return (
    <header className='flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between items-center  bg-slate-300 rounded-md p-4'>
        <div>
          <h1 className='text-3xl font-bold px-5 py-3 text-center'>{logo}</h1>
        </div>
        <div className='flex mb-3 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 flex-row justify-center align-middle align-content-center'>
          <form action="">
            <div className="form-control">
              <label htmlFor="search">
                <input type="text" name="search" placeholder='Search for product...' className='border-slate-600 px-3 mr-2 py-1 border rounded-xl' id="search" />
              </label>
              <input type="button" className='btn btn-primary bg-slate-600 text-white px-3 py-1 border-slate-600 border rounded-xl' value="Search" />
            </div>
          </form>
        </div>
        <div className='flex mb-3 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 flex-row justify-end cursor-pointer w-62'>
          <p className=' w-32 text-center position-relative'><FaCartArrowDown className='w-8 text-xl m-auto text-center' /> Cart - <span className="count  font-bold text-xs">12</span></p>
           
          <p className='w-30 text-center position-relative'><FaHeartCircleCheck className='w-8 text-xl m-auto text-center' /> Wishlist - <span className="count  font-bold text-xs">190</span></p>
          
        </div>
    </header>
  )
}

export default index