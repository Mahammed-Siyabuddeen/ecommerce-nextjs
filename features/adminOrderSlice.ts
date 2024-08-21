import { allOrderType } from "@/components/Types/allOrderType";
import { changeOrderStatusType } from "@/components/Types/changeOrderStatusType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialize } from "next/dist/server/lib/render-server";

const initialState: allOrderType[] = []
interface prop { }
const customerStatusSort = ['ordered', 'shipped','out of delivery', 'delivered', 'canceled'];
const adminOrderSlice = createSlice({
    name: 'AllOrders',
    initialState,
    reducers: {
        setAllorders: (state, action: PayloadAction<allOrderType[]>) => {
            return action.payload;
        },
        setOrderstatus: (state, action: PayloadAction<changeOrderStatusType>) => {
            state.map((item: allOrderType) => {
                if (item._id == action.payload.order_id) {
                    item.status = action.payload.status;
                }
                return item;
            })
        },
        sortArray: (state, action: PayloadAction<string>) => {
            if (action.payload == 'asc') {
                state.sort((a, b) => new Date(a.create_at).getTime() - new Date(b.create_at).getTime())
            } else {
                state.sort((a, b) => new Date(b.create_at).getTime() - new Date(a.create_at).getTime())
            }
        },
        sortarrayByStatus: (state, action: PayloadAction<string>) => {
            state.sort((a, b) => {
                const aIndex = customerStatusSort.indexOf(a.status) 
                const bIndex = customerStatusSort.indexOf(b.status) 
                if (action.payload == 'asc')
                    return aIndex - bIndex
                else
                    return bIndex - aIndex


            })
        }
    }

})

export default adminOrderSlice.reducer;
export const { setAllorders, setOrderstatus, sortArray, sortarrayByStatus } = adminOrderSlice.actions

