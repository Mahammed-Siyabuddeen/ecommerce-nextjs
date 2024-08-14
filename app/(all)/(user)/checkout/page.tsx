'use client'
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import StateList from '../../../../components/StateList';
import CartTotal from '../../../../components/CartTotal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/features/redux/store';
import { setAddress } from '@/features/addressSlice';
import { useRouter } from 'next/navigation';
import AddressComponent from '@/components/AddressComponent';
import Billing from '@/components/Billing';

const Page: FC = () => {

    const [billing, setBilling] = useState(false);




    return (
        <>
            {
                billing ?(<Billing />): ( <AddressComponent />)

            }
        </>

    )
}

export default Page