import Link from "next/link";
import { ShopIcon } from "./Icons/ShopIcon";

 export  function ShopButton({id}:{id:string}){
    return(
        <Link href={`/productdetails/${id}`} className="px-5 py-3 max-w-fit font-medium gap-2 text-center inline-flex items-center text-black bg-white rounded-lg hover:bg-slate-50  ">
        <ShopIcon/>  Shop Now
      </Link>
    )
}