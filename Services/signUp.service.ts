import { fecthData } from "./fecthData";


interface prop{
    first_name:string,
    last_name:string,
    phone_number:string,
    email:string,
    password:string
}
export const SignUpApi=(data:prop)=>fecthData.post('/signup',{...data})