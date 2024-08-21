import { fecthData } from "./fecthData"


export const getTotalCustomers=()=>fecthData.get('/admin/dashboard/totalcustomer')
export const getTotalOrders=()=>fecthData.get('/admin/dashboard/totalorders')
export const getTotalProducts=()=>fecthData.get('/admin/dashboard/totalproducts')
export const getTotalSales=()=>fecthData.get('/admin/dashboard/totalsales')
export const getTotalSalesByMonth=()=>fecthData.get('/admin/dashboard/salesbymonth')
export const getProductByCategories=()=>fecthData.get('/admin/dashboard/totalproductbycategory')
export const getOrderByCity=()=>fecthData.get('/admin/dashboard/totalorderbycity')