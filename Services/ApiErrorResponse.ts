import { ApiErrorResponseType } from "@/components/Types/ApiErrorResponse";
import { AxiosError } from "axios";


export default function ApiErrorResponse(error:any) {
    const axiosError = error as AxiosError<ApiErrorResponseType>;
    if (axiosError.response) {
        console.log(axiosError.response.data.message); // Accessing error message
    } else {
        console.log('An unexpected error occurred');
    }
}