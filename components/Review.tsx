import React from 'react'
import { StarIcon } from './Icons/StarIcon'
import { reviewType } from './Types/reviewType'

const Review = ({review}:{review:reviewType}) => {
    return (
        <div className="w-auto rounded flex flex-col p-2 m-2  gap-2 border-2 ">
            <div className="flex gap-2">
                <div className="flex w-fit gap-1 items-center bg-green-500 py-1 px-2 rounded-lg">{review.rating}<StarIcon /></div>
                <p>{review.customer_name}</p>
            </div>
            <p>{review.comment}</p>
        </div>
    )
}

export default Review