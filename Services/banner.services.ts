import { fecthData, fecthFormData } from "./fecthData";

export const addBanner = (data: FormData) => fecthFormData.post('/banner/addbanner',data)
export const getBanners=()=>fecthData.get('/banner/getbanners')