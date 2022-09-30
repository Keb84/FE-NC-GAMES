import {useEffect, useState} from 'react'
import { getComments } from '../utils/api'
import {useParams} from 'react-router-dom'
import moment from 'moment'
import AddComment from './AddComment'


function Comments () {
    const [allComments, setAllComments] = useState([])

    const {review_id} = useParams()

    useEffect(() => {
        getComments(review_id)
        .then(({comments}) => {
            setAllComments(comments)
        })
    }, [review_id, allComments])
    return (
        <section>
            <ul>
                {allComments.map(comments => {
                    return <li key={comments.comment_id}><h3>Comment by: {comments.author}</h3><p>{comments.body}</p><p>Posted : {moment(comments.created_at).format('dddd, MMMM Do YYYY')}</p><p>Votes : {comments.votes}</p>

                    </li>
                })}
                <AddComment/>
            </ul>
        </section>
        
        
    )
}

export default Comments