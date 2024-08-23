'useclient';
import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react'
import { OutlineStarIcon, StarIcon } from './Icons/StarIcon';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';
import { RootState } from '@/features/redux/store';
import { AddReviewApi } from '@/Services/addReview.service';
import ApiErrorResponse from '@/Services/ApiErrorResponse';

interface prop{
    setOpenReviewComponent: React.Dispatch<React.SetStateAction<boolean>>,
    orderitem_id: string 
}
const AddReview = ({ orderitem_id,setOpenReviewComponent }: prop) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState<string | undefined>(undefined);
    const user = useSelector((state: RootState) => state.user)
    const handleReviewSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (rating <= 0 || rating > 5) return toast("please Rate the product");
        if (!user._id) return;
        AddReviewApi({ orderItem_id: orderitem_id, rating, comment, user_id: user._id })
            .then(() => toast.success("Thank you for reviewing the product."))
            .catch((error) => ApiErrorResponse(error))
            setOpenReviewComponent(false);
    }
    return (
        <form onSubmit={handleReviewSubmit} className="">
            <div className=" flex flex-col gap-4 p-4">
                <div>
                    <h1 className="font-semibold text-base mb-2">Rate this Product</h1>
                    <div className="flex gap-2 text-xl">
                        {Array.from({ length: 5 }).map((_, index) => {
                            if (index + 1 <= rating) return (<StarIcon className="cursor-pointer" onClick={() => setRating(index + 1)} />)
                            else return (<OutlineStarIcon className="cursor-pointer" onClick={() => setRating(index + 1)} />)
                        })}
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-base  mb-2">Review this product</h1>
                    <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)} name="comments" rows={5} id=""></textarea>
                </div>
                <button type='submit' className='w-3/4 rounded-lg  p-4 px-6 bg-yellow-400 hover:bg-yellow-500 '>Submit</button>
            </div>
        </form>
    )
}

export default AddReview