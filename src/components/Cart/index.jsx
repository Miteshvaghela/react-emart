import React from 'react' 

const index = ({}) => {
  return (
    <div className="w-1/3">
        <div className="header m-4">
            <h2 className='font-bold text-gray-800'>Shopping Cart</h2>
        </div>   
 
        <table className="w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border rounded-lg">
                <tr>
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
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th> 
                    <td className="px-6 py-4">
                        1
                    </td>
                    <td className="px-6 py-4">
                        $2999
                    </td>
                </tr>
            </tbody>
            <tfoot>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4" colSpan="2">
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