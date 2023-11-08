import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function Review (props) {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getReviews = async () => {
        const response = await axios.get(`${BASE_URL}/reviews`)
        setReviews(response.data)
        console.log(response.data)
        }
        getReviews()
    }, [])

    return(
        <div className="review-container">
            {reviews.map((review)=>(
                <div className='review-card' key={review.reviewText}>
                    <h2 id='trailName'> {review.trailName} </h2>
                    <h3 id='userName'> {review.userName} </h3>
                    <h5 id='reviewText'> {review.reviewText} </h5>
                </div>
            ))}
                
        </div>
    )
}