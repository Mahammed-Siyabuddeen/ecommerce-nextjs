'use client'
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import Image from 'next/image';
import CatergoySelect from './CatergoySelect';
import ShoesCategorys from './ShoesCategorys';
import ClothesSize from './ClothesSize';
import { UploadIcon } from './Icons/Upload';
import { fecthData } from '@/Services/fecthData';
import axios from 'axios';
import { getAllCategory } from '@/Services/category.service';
import { categoryType } from './Types/categoryType';
import { addProduct } from '@/Services/addProduct.services';
import { toast } from 'sonner';
import ApiErrorResponse from '@/Services/ApiErrorResponse';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/features/redux/store';
import { appendToAllProducts } from '@/features/allProductsSlice';
import Loading from './Loading';

interface checkboxData {
    label: string,
    checked: boolean,
}
interface prop {
    setAddproduct: React.Dispatch<React.SetStateAction<boolean>>
}

const AddProduct = ({ setAddproduct }: prop) => {
    const Dispatch = useDispatch<AppDispatch>()
    const[loading,setLoading]=useState(false);
    const [category, setCategory] = useState<string>('');
    const [categoryList, setCategoryList] = useState<categoryType[]>([])
    const [size, setSize] = useState<string>();
    const [sizeType, setSizeType] = useState<string>('none');
    const [image, setImage] = useState<File[]>([])
    const [productname, setProductname] = useState<string>("dmdl");
    const [brand, setBrand] = useState<string>("fdf");
    const [description, setDescription] = useState<string>("fdf");
    const [price, SetPrice] = useState<string>("10");
    const [mrp, setMrp] = useState<string>("10");
    const [stock_quantity, setstock_quantity] = useState<string>("100");

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
    useEffect(() => {
        getAllCategory().then(({ data }: { data: categoryType[] }) => {
            setCategoryList(data)

        })
    }, [])

    const handleImagechange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0])
            return alert("image not selected");

        if (image.length == 4) {
            let newImages = image.splice(0, 1);
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

    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!category.length) return toast.error('select category');
        setLoading(true)
        const selectedSizes = check.filter((size) => size.checked == true).map(item => item.label)
        const form = new FormData()
        form.append('name', productname)
        form.append('file', image[0] as Blob)
        form.append('file', image[1] as Blob)
        form.append('file', image[2] as Blob)
        form.append('file', image[3] as Blob)
        form.append('description', description)
        form.append('brand', brand)
        form.append('price', price),
            form.append('mrp', mrp),
            form.append('stock_quantity', stock_quantity),
            form.append('category_id', category)
        form.append('sizes', JSON.stringify(selectedSizes))

        addProduct(form).then(({ data }) => {
            Dispatch(appendToAllProducts({ ...data, orderQuantity: 0, totalSale: 0 }))
            setLoading(false)
            toast.success('successfully product added')
        }).catch((error) => {

            ApiErrorResponse(error)
        })
    }
    if(loading) return(<Loading/>)
    return (

        <form onSubmit={handleSubmit} className="w-full bg-sky-50 overflow-y-scroll">
            <h1 className="p-4 text-xl font-bold" >Add Product</h1>
            <div className="flex justify-end py-4">
                <button onClick={() => setAddproduct(false)} className="max-w-fit px-2 py-3 bg-black text-white  m-2  rounded-lg flex gap-1 items-center border">View Product</button>
            </div>

            <div className=" w-auto flex gap-2 justify-between  mx-6 ">
                <div className="w-full p-2 bg-white rounded">
                    <div className='py-2'>
                        <label htmlFor="" className="font-bold text-sm py-3">Product Name</label>
                        <input value={productname}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setProductname(e.target.value)} required type="text" className="w-full p-4 outline-none border my-2" />
                        <p className='text-gray-300'>do not exceed more than 20 character</p>
                    </div>
                    <div className='py-2 flex gap-3 justify-between'>
                        <div className="w-full ">
                            <label htmlFor="" className="font-bold text-sm py-3">Category</label>
                            <CatergoySelect category={category} setCategory={setCategory} categoryList={categoryList} />
                        </div>
                        <div className="w-full ">
                            <label htmlFor="" className="font-bold text-sm py-3">Price</label>
                            <input value={price}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => SetPrice(e.target.value)} required type="number" className="w-full p-4 outline-none border my-2 " />
                        </div>

                    </div>
                    <div className="py-2 flex gap-3 justify-between">
                        <div className="w-full ">
                            <label htmlFor="" className="font-bold text-sm py-3">Mrp</label>
                            <input value={mrp}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setMrp(e.target.value)} required type="number" className="w-full p-4 outline-none border my-2 " />
                        </div>
                        <div className="w-full ">
                            <label htmlFor="" className="font-bold text-sm py-3">Stock Quantity</label>
                            <input value={stock_quantity}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setstock_quantity(e.target.value)} required type="number" className="w-full p-4 outline-none border my-2 " />
                        </div>
                    </div>
                    <div className="py-2 ">
                        <label htmlFor="" className="font-bold text-sm py-3">Brand</label>
                        <input value={brand}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setBrand(e.target.value)} required type="text" className="w-full p-4 outline-none border my-2 " />
                    </div>
                    {
                        category ? (
                            <div className="py flex gap-2 items-center">
                                <div className='flex gap-1 items-center'>
                                    <label htmlFor="">none</label>
                                    <input checked={sizeType == 'none'} value={'none'} onChange={(e: ChangeEvent<HTMLInputElement>) => setSizeType(e.target.value)} type="radio" name='size' />
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <label htmlFor="">numeric</label>
                                    <input value={'numeric'} onChange={(e: ChangeEvent<HTMLInputElement>) => setSizeType(e.target.value)} type="radio" name='size' />
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <label htmlFor="">letter</label>
                                    <input value={'letter'} onChange={(e: ChangeEvent<HTMLInputElement>) => setSizeType(e.target.value)} type="radio" name='size' />
                                </div>
                            </div>
                        ) : <></>
                    }

                    <div className="py-2 flex">
                        {
                            sizeType == 'numeric' ? (
                                <ShoesCategorys handleCheckboxChange={handleCheckboxChange} />

                            ) : sizeType == 'letter' ?
                                <ClothesSize handleCheckboxChange={handleCheckboxChange} />
                                : <></>
                        }
                    </div>
                    <div className="py-2">
                        <label htmlFor="" className="font-bold text-sm py-3">Description</label>
                        <textarea value={description}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                            rows={5} name="description" id="description" className="w-full p-4 outline-none border my-2 "></textarea>
                    </div>
                </div>
                <div className="w-full p-2 bg-white rounded">
                    <div className="grid grid-cols-2 gap-4  ">

                        <div className="h-52 relative rounded overflow-hidden">
                            <div className="w-full relative h-full bg-slate-200 grid  flex-col justify-center place-items-center place-content-center text-5xl">
                                {
                                    image.length >= 1 ? (
                                        <img width={'100%'} height={'100%'} alt='nonn' src={URL.createObjectURL(image[0])} />
                                    ) :
                                        <>
                                            <UploadIcon />
                                            <p className="text-blue-400 text-sm">click to upload</p>
                                        </>
                                }
                                <input required onChange={(e: ChangeEvent<HTMLInputElement>) => handleImagechange(e)} type='file' className='w-ful absolute opacity-0 h-full' />
                            </div>
                        </div>
                        <div className="h-52 relative rounded overflow-hidden">
                            <div className="w-full relative h-full bg-slate-200 grid  flex-col justify-center place-items-center place-content-center text-5xl">
                                {
                                    image.length >= 2 ? (
                                        // <></>
                                        <img width={'100%'} height={'100%'} alt='nonn' src={URL.createObjectURL(image[1])} />

                                        // <Image fill alt='nonn' src={URL.createObjectURL(image[1])} />
                                    ) :
                                        <>
                                            <UploadIcon />
                                            <p className="text-blue-400 text-sm">click to upload</p>
                                        </>
                                }
                                <input required onChange={(e: ChangeEvent<HTMLInputElement>) => handleImagechange(e)} type='file' className='w-ful absolute opacity-0 h-full' />
                            </div>
                        </div>
                        <div className="h-52 relative rounded overflow-hidden">
                            <div className="w-full relative h-full bg-slate-200 grid  flex-col justify-center place-items-center place-content-center text-5xl">
                                {
                                    image.length >= 3 ? (
                                        // <></>
                                        <img width={'100%'} height={'100%'} alt='nonn' src={URL.createObjectURL(image[2])} />

                                        // <Image fill alt='nonn' src={URL.createObjectURL(image[2])} />
                                    ) :
                                        <>
                                            <UploadIcon />
                                            <p className="text-blue-400 text-sm">click to upload</p>
                                        </>
                                }
                                <input required onChange={(e: ChangeEvent<HTMLInputElement>) => handleImagechange(e)} type='file' className='w-ful absolute opacity-0 h-full' />
                            </div>
                        </div>
                        <div className="h-52 relative rounded overflow-hidden">
                            <div className="w-full relative h-full bg-slate-200 grid  flex-col justify-center place-items-center place-content-center text-5xl">
                                {
                                    image.length >= 4 ? (
                                        // <></>
                                        <img width={'100%'} height={'100%'} alt='nonn' src={URL.createObjectURL(image[3])} />

                                        // <Image fill alt='nonn' src={URL.createObjectURL(image[3])} />
                                    ) :
                                        <>
                                            <UploadIcon />
                                            <p className="text-blue-400 text-sm">click to upload</p>
                                        </>
                                }
                                <input required onChange={(e: ChangeEvent<HTMLInputElement>) => handleImagechange(e)} type='file' className='w-ful absolute opacity-0 h-full' />
                            </div>
                        </div>

                    </div>
                    <button disabled={loading?true:false} type='submit' className="p-3 px-6 bg-yellow-300 m-3 rounded disabled:bg-yellow-200">Sumbit</button>
                </div>
            </div>
        </form>

    )
}

export default AddProduct