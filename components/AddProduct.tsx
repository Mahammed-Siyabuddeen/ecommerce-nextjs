'use client'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Image from 'next/image';
import CatergoySelect from './CatergoySelect';
import ShoesCategorys from './ShoesCategorys';
import ClothesSize from './ClothesSize';
import { UploadIcon } from './Icons/Upload';
import { categoryType } from './CategoryType';

interface checkboxData {
    label: string,
    checked: boolean,
}
const AddProduct = () => {
    const [category, setCategory] = useState<categoryType>("Books");
    const [size, setSize] = useState<string>();
    const [image, setImage] = useState<File[]>([])
    const [productname, setProductname] = useState<string>("");
    const [brand, setBrand] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [check, setcheck] = useState<checkboxData[]>([
        { label: '7', checked: false },
        { label: '8', checked: false },
        { label: '9', checked: false },
        { label: '10', checked: false },
        { label: '11', checked: false },
        { label: '12', checked: false },
        { label: 'S', checked: false },
        { label: 'M', checked: false },
        { label: 'L', checked: false },
        { label: 'XL', checked: false },
        { label: 'XXL', checked: false },
        { label: 'XXXL', checked: false },

    ])
    useEffect(() => {
        setcheck([{ label: '7', checked: false },
        { label: '8', checked: false },
        { label: '9', checked: false },
        { label: '10', checked: false },
        { label: '11', checked: false },
        { label: '12', checked: false },
        { label: 'S', checked: false },
        { label: 'M', checked: false },
        { label: 'L', checked: false },
        { label: 'XL', checked: false },
        { label: 'XXL', checked: false },
        { label: 'XXXL', checked: false },
        ])

    }, [category])

    const handleImagechange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0])
            return alert("image not selected");

        if (image.length == 4) {
            let newImages = image.splice(0, 1);
            console.log(newImages);

            return setImage([...newImages, e.target.files[0]])

        }


        setImage([...image, e.target.files[0]])
    }

    const handleCheckboxChange = (value: string) => {
        setcheck(prevstate =>
            prevstate.map(data =>
                data.label === value ? { ...data, checked: true } : data
            )
        )
        console.log(check);;


    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className="basis-4/5 bg-sky-50">
            <h1 className="p-4 text-xl font-bold" >Add Product</h1>
            <div className=" w-auto flex gap-2 justify-between  mx-6 ">
                <div className="w-full p-2 bg-white rounded">
                    <div className='py-2'>
                        <label htmlFor="" className="font-bold text-sm py-3">Product Name</label>
                        <input type="text" className="w-full p-4 outline-none border my-2" />
                        <p className='text-gray-300'>do not exceed more than 20 character</p>
                    </div>
                    <div className='py-2 flex gap-3 justify-between'>
                        <div className="w-full ">
                            <label htmlFor="" className="font-bold text-sm py-3">Category</label>
                            <CatergoySelect category={category} setCategory={setCategory} />
                        </div>
                        <div className="w-full ">
                            <label htmlFor="" className="font-bold text-sm py-3">Brand</label>
                            <input type="text" className="w-full p-4 outline-none border my-2 " />
                        </div>
                    </div>

                    <div className="py-2 flex">
                        {
                            category == 'Shoes' ? (
                                <ShoesCategorys handleCheckboxChange={handleCheckboxChange} />

                            ) : category == 'Womens' || category == 'Mens' ?
                                <ClothesSize handleCheckboxChange={handleCheckboxChange} />
                                : <></>
                        }
                    </div>
                    <div className="py-2">
                        <label htmlFor="" className="font-bold text-sm py-3">Description</label>
                        <textarea rows={5} name="description" id="description" className="w-full p-4 outline-none border my-2 "></textarea>
                    </div>
                </div>
                <div className="w-full p-2 bg-white rounded">
                    <div className="grid grid-cols-2 gap-4  ">

                        <div className="h-52 relative rounded overflow-hidden">
                            <div className="w-full relative h-full bg-slate-200 grid  flex-col justify-center place-items-center place-content-center text-5xl">
                                {
                                    image.length >= 1 ? (
                                        <Image fill alt='nonn' src={URL.createObjectURL(image[0])} />
                                    ) :
                                        <>
                                            <UploadIcon />
                                            <p className="text-blue-400 text-sm">click to upload</p>
                                        </>
                                }
                                <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleImagechange(e)} type='file' className='w-ful absolute opacity-0 h-full' />
                            </div>
                        </div>
                        <div className="h-52 relative rounded overflow-hidden">
                            <div className="w-full relative h-full bg-slate-200 grid  flex-col justify-center place-items-center place-content-center text-5xl">
                                {
                                    image.length >= 2 ? (
                                        <Image fill alt='nonn' src={URL.createObjectURL(image[1])} />
                                    ) :
                                        <>
                                            <UploadIcon />
                                            <p className="text-blue-400 text-sm">click to upload</p>
                                        </>
                                }
                                <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleImagechange(e)} type='file' className='w-ful absolute opacity-0 h-full' />
                            </div>
                        </div>
                        <div className="h-52 relative rounded overflow-hidden">
                            <div className="w-full relative h-full bg-slate-200 grid  flex-col justify-center place-items-center place-content-center text-5xl">
                                {
                                    image.length >= 3 ? (
                                        <Image fill alt='nonn' src={URL.createObjectURL(image[2])} />
                                    ) :
                                        <>
                                            <UploadIcon />
                                            <p className="text-blue-400 text-sm">click to upload</p>
                                        </>
                                }
                                <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleImagechange(e)} type='file' className='w-ful absolute opacity-0 h-full' />
                            </div>
                        </div>
                        <div className="h-52 relative rounded overflow-hidden">
                            <div className="w-full relative h-full bg-slate-200 grid  flex-col justify-center place-items-center place-content-center text-5xl">
                                {
                                    image.length >= 4 ? (
                                        <Image fill alt='nonn' src={URL.createObjectURL(image[3])} />
                                    ) :
                                        <>
                                            <UploadIcon />
                                            <p className="text-blue-400 text-sm">click to upload</p>
                                        </>
                                }
                                <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleImagechange(e)} type='file' className='w-ful absolute opacity-0 h-full' />
                            </div>
                        </div>

                    </div>
                    <button className="p-3 px-6 bg-yellow-300 m-3 rounded ">Sumbit</button>
                </div>
            </div>
        </form>

    )
}

export default AddProduct