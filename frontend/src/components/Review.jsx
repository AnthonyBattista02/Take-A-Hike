import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import ReviewForm from './ReviewForm'
import './Review.css'
import Footer from './Footer'

export default function Review () {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getReviews = async () => {
        const response = await axios.get(`${BASE_URL}/reviews`)
        setReviews(response.data)
        }
        getReviews()
    }, [])
    
    
    const handleClick = (reviewId) => {
        axios.delete(`${BASE_URL}/reviews/${reviewId}`)
        window.location.reload();
    }

    return(
        <div className="review-container">
            {reviews.map((review)=>(
                <div className='review-card' key={review._id}>
                    <div onClick={() => handleClick(review._id)} id='x-button'>X</div>
                    <h2 id='trailName'> {review.trailName} </h2>
                    <h3 id='userName'> {review.userName} </h3>
                    <h5 id='reviewText'> {review.reviewText} </h5>
                </div>
            ))}
            <ReviewForm />
            <Footer />
                
        </div>
    )
}