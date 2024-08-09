import { AppDispatch } from "@/features/redux/store"
import axios from "axios"
import { useDispatch } from "react-redux"
import { fecthData } from "./fecthData"

interface dataObj{
    clientId:string,
    credential:string
}
interface prop{
    data:dataObj
}
export const  googleAuth=({data}:prop)=>fecthData.post('/google-auth',{...data})
