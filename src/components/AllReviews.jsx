
import {useEffect, useState} from 'react'
import {getReviews} from '../utils/api'
import moment from 'moment';


function AllReviews () {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getReviews()
        .then(({reviews}) => {
            setReviews(reviews)
        }) 
    }, [])
    
    
    return (
        <section>
    <ul>
        
        {reviews.map(review => {
            
            return <li key={review.review_id}><h2>{review.title}</h2><p>Designer : {review.designer}</p><p>Category : {review.category}</p><p>Created : {moment(review.created_at).format('dddd, MMMM Do YYYY')}</p><img src={review.review_img_url} alt={review.title} />
           
</li>
        })}
    </ul>
    </section>
)
}
export default AllReviews