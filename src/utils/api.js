import axios from 'axios'

const reviewsApi = axios.create({
    baseURL : "https://kirstys-game-reviews-app.herokuapp.com/api"
})

export const getReviews = (category, sortBy, orderBy) => {
    
        return reviewsApi.get('/reviews', {params : {category: category,  sort_by: sortBy, order : orderBy}}).then((res) => {
            
            return res.data.reviews
        })
    }

export const getCategories = () => {
     return reviewsApi.get('/categories').then((res) => {
        return res.data
    })
}

export const reviewByID = (review_id) => {

    return reviewsApi.get(`/reviews/${review_id}`).then((res) => {
        
        return res.data
    })
}
export const voteOnReview = (review_id) => {
    return reviewsApi.patch(`/reviews/${review_id}`, {inc_votes : 1}).then((res) => {
        
        return res.data

    })

}
export const getComments = (review_id) => {
    return reviewsApi.get(`/reviews/${review_id}/comments`).then((res) => {
        return res.data
    })
}
export const postComment = (review_id, author, body) => {
    return reviewsApi.post(`/reviews/${review_id}/comments`, {username : author, body : body}).then((res) => {
        
        return res.data.comment
    })
}
export const allUsers = () => {
    return reviewsApi.get('/users').then((res) => {
        return res.data
    })
}