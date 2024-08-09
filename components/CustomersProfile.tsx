import Image from 'next/image'
import React from 'react'

const CustomersProfile = () => {
    return (
        <div className="w-full p-4">
            <h1 className="text-xl font-bold my-4">Customer Information</h1>
            <div className=" overflow-x-scroll overflow-y-scroll h-full border-t">
                <table className="w-full  text-left ">
                    <thead className="text-gray-700 uppercase text-xs mb-3">
                        <th className="px-6 py-3">user</th>
                        <th className="px-6 py-3">Phone</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3 opacity-0">Action</th>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-slate-400 ">
                            <td className="px-6 py-3 flex gap-4 items-center " >
                                <div className='relative w-16 h-16 rounded-full overflow-hidden'>
                                    <Image src='/images/download (2).png' alt='' fill/>
                                </div>
                                <p>mohd</p>
                                <p>shihab</p>
                            </td>
                            <td className="px-6 py-3" >{'ProdcutId'}</td>
                            <td className="px-6 py-3" >{'ProdcutId'}</td>
                            <td className="px-6 py-3" >
                                <button className=" p-2 px-4 font-medium bg-red-500 text-end text-white rounded">Block</button>

                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomersProfile