import React, {useState} from 'react' 
import { FaCcPaypal } from "react-icons/fa6";

const index = ({cartItems}) => { 

    const [cartTotal, setCartTotal] = useState(0);

    if(cartItems.length){
        let sum = 0;
        cartItems.map(item => {
            sum += parseInt(item.price);
        });
        console.log(sum); 
    }


  return (
    <div className="w-1/3 ">
        <div className="header m-4">
            <h2 className='font-bold text-gray-800'>Shopping Cart</h2>
        </div>   
 
        <table className="w-auto sticky top-28 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border rounded-lg">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        No.
                    </th> 
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th> 
                    <th scope="col" className="px-6 py-3">
                        Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                {(cartItems.length > 0) ? cartItems.map((item, index) =>   
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index+1}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {index+1}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.name}
                            </th>
                            <th className="px-6 py-4">
                                1
                            </th>
                            <th className="px-6 py-4">
                                ${item.price}
                            </th>
                        </tr>
                    ) : (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" colSpan={4} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        No products
                    </th>
                </tr>
                )}
            </tbody>
            <tfoot>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4" colSpan="3">
                            Total
                        </td>
                        <td className="px-6 py-4 text-red-500 font-bold">
                            <p className=' block '>${cartItems.reduce((total, currentValue) => total = total + currentValue.price,0)}</p>
                            <button className='btn-block mt-4 bg-neutral-600 text-zinc-100 py-2 px-3 text-sm rounded-md hover:bg-neutral-100 hover:text-zinc-900' onClick={e => alert('Payment page.')}><FaCcPaypal className=' text-5xl m-auto text-center' /></button>
                        </td>                        
                    </tr>
            </tfoot>
        </table> 
        

    </div>
  )
}

export default index 