import React from 'react'

const Page = () => {
  return (
    <div className="container mx-auto">
       <div className="container ml-auto mr-auto w-2/6 my-12 flex flex-col gap-4">
            <div>
                <h1 className='text-3xl font-semibold'>Billing</h1>
                <div className="flex justify-between p-3">
                <p className='text-sm font-medium'>total : </p>
                <p className='text-sm font-medium'>509 </p>

                </div>
            </div>
            <div className="relative  justify-start gap-1 p-3 border rounded-md  font-medium flex items-center  shadow-sm">
                <input type="radio" className='  outline-none   ' />
                <label htmlFor="">COD</label>
            </div>
            <div className="relative  justify-start gap-1 p-3 border rounded-md  font-medium flex items-center  shadow-sm">
                <input type="radio" className='  outline-none   ' />
                <label htmlFor="">Online Payment</label>
            </div>
            <button  className="text-center bg-yellow-400  p-3 rounded-md ">Order</button>

            
        </div>
    </div>
  )
}

export default Page