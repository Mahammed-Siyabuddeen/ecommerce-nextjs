import React from 'react'
import ProductRecord from './ProductRecord'
import { SearchIcon } from './Icons/SearchIcon'

interface prop{
    setAddproduct:React.Dispatch<React.SetStateAction<boolean>>
}
const ProductRecords = ({setAddproduct}:prop) => {

    const switchToAddProduct=()=>{
        console.log('hi');
        
        setAddproduct(true);
    }
    return (
        <div className="w-full">
            <div>
                <div className="flex justify-between p-6 items-center">
                    <h1 className="font-bold text-xl">All Product</h1>
                </div>
                <div className="flex items-center justify-between text-sm mx-3">
                    <div className="basis-2/4 ">
                        <div className="flex w-4/5 border rounded-md overflow-hidden ">
                            <input placeholder='search product' type="text" className="w-4/5 border-r outline-none" />
                            <button  className="w-1/5  p-2 bg-black text-white text-2xl flex  justify-center  "><SearchIcon /></button>
                        </div>
                    </div>
                    <button onClick={switchToAddProduct} className="max-w-fit px-2 py-3 bg-black text-white  m-2  rounded-lg flex gap-1 items-center border">Add Product</button>
                </div>
                <div className=" overflow-x-scroll overflow-y-scroll h-full border-t">
                    <table className="w-full  text-left text-sm">
                        <thead className="text-gray-700 uppercase text-xs mb-3">
                            <th className="px-6 py-3">Product</th>
                            <th className="px-6 py-3">ProdcutId</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Quantity</th>
                            <th className="px-6 py-3">Sale</th>
                        </thead>
                        <tbody>
                            <ProductRecord Product={['dog food kitchen', 'jds']} ProdcutId='#094584' Price={190} Quantity={20094} Sale={700} />
                            <ProductRecord Product={['dog food kitchen', 'jds']} ProdcutId='#094584' Price={190} Quantity={20094} Sale={700} />
                            <ProductRecord Product={['dog food kitchen', 'jds']} ProdcutId='#094584' Price={190} Quantity={20094} Sale={700} />
                            <ProductRecord Product={['dog food kitchen', 'jds']} ProdcutId='#094584' Price={190} Quantity={20094} Sale={700} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductRecords