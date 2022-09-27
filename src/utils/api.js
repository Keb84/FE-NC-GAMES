import axios from 'axios'

const reviewsApi = axios.create({
    baseURL : "https://kirstys-game-reviews-app.herokuapp.com/api"
})

export const getReviews = (category) => {
    if(category){
        return reviewsApi.get(`/reviews?category=${category}`).then((res) => {
            return res.data
        })
    }else {

        return reviewsApi.get('/reviews').then((res) => {
            return res.data
        })
    }
}
export const getCategories = () => {
    return reviewsApi.get('/categories').then((res) => {
        return res.data
    })
}
