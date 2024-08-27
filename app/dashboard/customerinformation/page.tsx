'use client'
import CustomersProfile from '@/components/CustomersProfile'
import { userType } from '@/components/Types/userType'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { getAllCustomers } from '@/Services/getAllCustomer.service'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const[customers,setCustomers]=useState<userType[]>([])
   useEffect(()=>{
    getAllCustomers().then(({data})=>setCustomers(data))
    .catch((error)=>ApiErrorResponse(error))
   },[])
    return (
            <CustomersProfile customers={customers}/>
    )
}

export default Page