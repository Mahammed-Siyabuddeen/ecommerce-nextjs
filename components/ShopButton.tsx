import { ShopIcon } from "./Icons/ShopIcon";

 export  function ShopButton(){
    return(
        <button className="px-5 py-3 max-w-fit font-medium gap-2 text-center inline-flex items-center text-black bg-white rounded-lg hover:bg-slate-50  ">
        <ShopIcon/>  Shoop Now
      </button>
    )
}