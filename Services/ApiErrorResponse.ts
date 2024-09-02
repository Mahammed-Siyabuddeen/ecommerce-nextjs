'use client'
import { ApiErrorResponseType } from "@/components/Types/ApiErrorResponse";
import { AxiosError } from "axios";
import { toast } from "sonner";


export default function ApiErrorResponse(error: any) {
    const axiosError = error as AxiosError<ApiErrorResponseType>;
    if (axiosError.response) {
        console.log(axiosError.response);
        const errorMessage =
            axiosError.response.data.errors?.[0]?.msg ||
            axiosError.response.data.message ||
            'An unexpected error occurred'
        toast.error(errorMessage);
    } else {
        toast.error('An unexpected error occurred');
    }
}