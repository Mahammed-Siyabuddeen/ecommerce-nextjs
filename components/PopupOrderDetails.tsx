'use client'
import { Dialog, DialogPanel, DialogTitle, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChangeEvent, FC } from 'react'
import { Arrowdown } from './Icons/Arrowdown'
import { allOrderType } from './Types/allOrderType'
import { changeOrderStatus } from '@/Services/changeOrderStatus'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/features/redux/store'
import { setOrderstatus } from '@/features/adminOrderSlice'
import { toast } from 'sonner'

interface prop {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    currentOrder:allOrderType|undefined
}
const PopupOrderDetails: FC<prop> = ({ isOpen, setIsOpen,currentOrder }) => {
    console.log(isOpen);
    const Dispatch=useDispatch<AppDispatch>()
    if(typeof currentOrder=='undefined') return<></>

    const handleStatusChange=(value:string)=>{
        console.log('change',value);
        
        changeOrderStatus({order_id:(currentOrder?._id as string),status:value}).then(({data})=>{
            Dispatch(setOrderstatus({order_id:currentOrder._id,status:value}))
            toast.success('successfull updated ')
            setIsOpen(false)
            
        }).catch((err)=>ApiErrorResponse(err))
    }
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative  z-20">
            <div className="fixed inset-0 flex w-screen items-center bg_blur justify-center p-4">
                <DialogPanel className="w-2/4 space-y-4 z-50 bg-white p-12 rounded">
                    <DialogTitle>Order Details</DialogTitle>
                    <div className="grid grid-cols-2 w-full gap-4">
                        <div className="">
                            <p className="text-gray-400">OrderId</p>
                            <input value={currentOrder._id} readOnly type="text" className="p-3 px-4 outline-none border rounded bg-white" />
                        </div>
                        <div className="">
                            <p className="text-gray-400">Product Name</p>
                            <input value={currentOrder.product_name} readOnly type="text" className="p-3 px-4 outline-none border rounded bg-white" />
                        </div>
                        <div className="">
                            <p className="text-gray-400">Customer Name</p>
                            <input value={currentOrder.customer_name} readOnly type="text" className="p-3 px-4 outline-none border rounded bg-white" />
                        </div>
                        <div className="">
                            <p className="text-gray-400">Customer Email</p>
                            <input  value={currentOrder.customer_email}readOnly type="text" className="p-3 px-4 outline-none border rounded bg-white" />
                        </div>
                        <div className="">
                            <p className="text-gray-400">Total</p>
                            <input value={currentOrder.product_total} readOnly type="text" className="p-3 px-4 outline-none border rounded bg-white" />
                        </div>
                        <div className="">
                            <p className="text-gray-400">Quantity</p>
                            <input value={currentOrder.product_quantity} readOnly type="text" className="p-3 px-4 outline-none border rounded bg-white" />
                        </div>
                        <div className="">
                            <p className="text-gray-400">Date</p>
                            <input value={new Date(currentOrder.create_at).toLocaleDateString()} readOnly type="text" className="p-3 px-4 outline-none border rounded bg-white" />
                        </div>
                        <div className=" flex flex-col ">
                            <p className="text-gray-400 ">Status </p>
                            <Popover  className="">
                                <PopoverButton  className=" m-3 p-2 px-4 text-center rounded bg-yellow-400 flex gap-2 items-center">{currentOrder.status} <Arrowdown /> </PopoverButton>
                                <PopoverPanel anchor="bottom start" className="flex flex-col gap-2 mt-3 py-4 pr-8 px-2  z-50 bg-white rounded shadow-lg shadow-orange-100 ">
                                    <p onClick={()=>handleStatusChange('confirmed')} className=' cursor-pointer'>confirmed</p>
                                    <p onClick={()=>handleStatusChange('shipped')}  className=' cursor-pointer'>shipped</p>
                                    <p onClick={()=>handleStatusChange('Delivered')} className=' cursor-pointer'>Deliver</p>
                                    <p onClick={()=>handleStatusChange('canceled')}  className='text-red-600 cursor-pointer'>canceled</p>
                                </PopoverPanel>
                            </Popover>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default PopupOrderDetails