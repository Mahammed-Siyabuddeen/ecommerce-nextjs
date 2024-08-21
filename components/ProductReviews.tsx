import React, { useEffect, useState } from 'react'
import { StarIcon } from './Icons/StarIcon'
import Review from './Review'
import { getReviewApi } from '@/Services/getReviews.service'
import { reviewType } from './Types/reviewType'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { getRating } from '@/Services/getRating'

const ProductReviews = ({ product_id }: { product_id: string }) => {
    const [reviews, setReviews] = useState<reviewType[]>([])
    const [totalRating, setTotalRating] = useState<number | null>(null)
    useEffect(() => {
        async function get() {
            const data = await Promise.all([getReviewApi({ product_id }), getRating({ product_id })])
            //   .catch(()=>{console.log('error');}) 
            setReviews(data[0].data)
            setTotalRating(data[1].data)
        }
        get()
    },[])
    if (!reviews.length) return <></>
    return (
        <div className='m-1 box_shadow rounded'>
            <h1 className="font-semibold text-2xl p-2 px-4">Ratings & Reviews</h1>
            <div className="flex h-96">
                <div className="flex-1 h-full ">
                    <div className="flex h-full text-7xl font-bold gap-2 place-items-center justify-center">
                        <p>{totalRating}</p>
                        <StarIcon className='text-yellow-400' />
                    </div>
                </div>
                <div className="flex-1 overflow-scroll">
                    {
                        reviews.map((review: reviewType) => (
                            <Review review={review} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductReviews