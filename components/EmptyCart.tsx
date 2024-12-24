import { FC } from "react";


const EmptyCart: FC = () => {
    return (
        <div className="flex items-center justify-center h-96">
            <p className="text-center text-2xl font-bold text-slate-500">Empty Cart</p>
        </div>
    )
}

export default  EmptyCart;