import { FaCartArrowDown } from "react-icons/fa6";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaGlasses } from "react-icons/fa6";

const index = ({products, handleAddToCart, handleAddToWishList}) => {
    
    const handleWishList = (id) => { 
        handleAddToWishList(id);
    }

    const handleCart = (id) => {  
        handleAddToCart(id);
    }
    

  return (
    <div className="products w-2/3">
    <div className="header m-4"><h2 className='font-bold text-gray-800'>Feature Products</h2></div>
    <div className='flex flex-row flex-wrap justify-stretch align-items-center'>
        {(products.length) ? products.map(item => (
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl: xl:w-1/3 bg-slate-300 rounded-md m-4 p-4 text-center hover:bg-slate-400 hover:text-gray-100 product-item shadow-xl' key={item.id}>                
                <img src={`./img/${item.image}`} alt={item.name} className='w-40 block m-auto' />
                <h2 className='text-xl font-bold text-slate-900 my-1'>{item.name}</h2>
                <h2 className='text-sm font-bold'>Category : {item.category}</h2>
                <h2 className='text-xl'>Price : ${item.price}</h2> 
                <h2 className='text-xl'>Rating : {item.rating}/5</h2>
                <div className="action flex flex-row flex-wrap align-bottom align-items-end justify-evenly mt-4">
                    <button className='btn-block bg-neutral-600 text-zinc-100 py-1 px-2 text-sm rounded-md hover:bg-neutral-100 hover:text-zinc-900' onClick={e => handleCart(item.id)}><FaCartArrowDown className='w-8 text-xl m-auto text-center' /></button>
                    <button className='btn-block bg-neutral-600 text-zinc-100 py-1 px-2 text-sm rounded-md hover:bg-neutral-100 hover:text-zinc-900' onClick={e => alert('Product detail page.')}><FaGlasses  className='w-8 text-xl m-auto text-center' /></button>
                    <button className='btn-block bg-neutral-600 text-zinc-100 py-1 px-2 text-sm rounded-md hover:bg-neutral-100 hover:text-zinc-900' onClick={e => handleWishList(item.id)}><FaHeartCircleCheck className='w-8 text-xl m-auto text-center'/></button>
                </div>                
            </div>
        )) : 'No products'}
    </div>
    </div>
  )
}

export default index 