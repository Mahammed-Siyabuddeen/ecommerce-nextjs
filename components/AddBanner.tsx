'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { UploadIcon } from './Icons/Upload'
import { addBanner } from '@/Services/banner.services'
import { toast } from 'sonner'
import ApiErrorResponse from '@/Services/ApiErrorResponse'

interface prop {
  setAddbanner: React.Dispatch<React.SetStateAction<boolean>>
}
const AddBanner = () => {
  const [heading, setHeading] = useState<string>("");
  const [productId, setProductId] = useState<string>("");
  const [subheading, setSubHeading] = useState<string>("");
  const [image, setImage] = useState<File>()
  const [loading, setLoading] = useState(false);
  const handleImagechange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData()
    form.append('file',image as Blob)
    form.append('product_id',productId)
    form.append('sub_heading',subheading)
    form.append('heading',heading)
    addBanner(form)
      .then(() => toast.success("banner added successfully"))
      .catch((error) => ApiErrorResponse(error))
      setLoading(false)
  }
  return (
    <form onSubmit={handleSubmit} className="w-full bg-sky-50 overflow-y-scroll">
      <h1 className="p-4 text-xl font-bold" >Add Banner</h1>

      <div className=" w-auto flex gap-2 justify-between  mx-6 ">
        <div className="w-full p-2 bg-white rounded">
          <div className='py-2'>
            <label htmlFor="" className="font-bold text-sm py-3">Product ID</label>
            <input value={productId}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setProductId(e.target.value)} required type="text" className="w-full p-4 outline-none border my-2" />
          </div>
          <div className='py-2'>
            <label htmlFor="" className="font-bold text-sm py-3">Heading</label>
            <input value={heading}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setHeading(e.target.value)} required type="text" className="w-full p-4 outline-none border my-2" />
            <p className='text-gray-300'>do not exceed more than 10 character</p>
          </div>
          <div className='py-2'>
            <label htmlFor="" className="font-bold text-sm py-3">Sub Heading</label>
            <input value={subheading}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSubHeading(e.target.value)} required type="text" className="w-full p-4 outline-none border my-2" />
            <p className='text-gray-300'>do not exceed more than 10 character</p>
          </div>
        </div>
        <div className="w-full p-2 bg-white rounded">

          <div className="h-52 w-full  relative rounded overflow-hidden">
            <div className="w-full relative h-full bg-slate-200 grid  flex-col justify-center place-items-center place-content-center text-5xl">
              {
                image ? (
                  <img width={'100%'} height={'100%'} alt='image' src={URL.createObjectURL(image)} />
                ) :
                  <>
                    <UploadIcon />
                    <p className="text-blue-400 text-sm">click to upload</p>
                  </>
              }
              <input required onChange={(e: ChangeEvent<HTMLInputElement>) => handleImagechange(e)} type='file' className='w-ful absolute opacity-0 h-full' />
            </div>
          </div>
          <button disabled={loading ? true : false} type='submit' className="p-3 px-6 bg-yellow-300 m-3 rounded disabled:bg-yellow-200">Sumbit</button>
        </div>
      </div>
    </form>
  )
}

export default AddBanner