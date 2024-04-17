import React from 'react' 

const index = ({cartItems}) => {
  return (
    <div className="w-1/3">
        <div className="header m-4">
            <h2 className='font-bold text-gray-800'>Shopping Cart</h2>
        </div>   
 
        <table className="w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
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
                {cartItems.length ? (
                    cartItems.map((item, index) => {
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {index}
                            </th> 
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.name}
                            </th> 
                            <td className="px-6 py-4">
                                1
                            </td>
                            <td className="px-6 py-4">
                                ${item.price}
                            </td>
                        </tr>
                    })
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
                        <td className="px-6 py-4">
                            Total
                        </td>                        
                    </tr>
            </tfoot>
        </table> 

    </div>
  )
}

export default index 