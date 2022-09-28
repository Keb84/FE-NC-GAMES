import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { reviewByID } from "../utils/api"


function ReviewCard () {

    const [singleReview, setSingleReview] =useState({})

        const {review_id} = useParams()

    useEffect(() => {
        reviewByID(review_id)

        .then(({reviews}) => {

            setSingleReview(reviews)
        })      
    }, [review_id])
    return (
        <section>
        <h2>Username : {singleReview.owner}</h2>
        <p>Review title : {singleReview.title}</p>
        <p>Game designer : {singleReview.designer}</p>
        <p>{singleReview.review_body}</p>
        <p>Game category : {singleReview.category}</p>
        <p>Votes : {singleReview.votes}</p>
        <img src={singleReview.review_img_url} alt={singleReview.owner}/>

        </section>
    )
}

export default ReviewCard