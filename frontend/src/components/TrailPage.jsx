import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import './Trails.css'

import { BASE_URL } from '../globals'

export default function TrailDetails() {
    const [trail, setTrail] = useState()
    let {id} = useParams()
    console.log(id)
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        const getTrail = async() => {
            const response = await axios.get(`${BASE_URL}/trails/${id}`)
            setTrail(response.data)
        }
        const getReviews = async () => {
            const response = await axios.get(`${BASE_URL}/reviews`)
            setReviews(response.data)
        }
        getTrail()
        getReviews()
    },[])


return trail ? (
    <div className="detail">
        <button id = 'ssbutton'><Link to = "/trails">See List of Trails</Link></button>
        <h2 className="detail-title" id = "trailName">{trail.trailName}</h2>
        <ul className='details'>
            <li>Distance: {trail.miDistance} mi.</li>
            <li>Difficulty: {trail.difficulty}</li>
            <li>Approximate Hiking Time: {trail.hikingTimeHrs} hrs.</li>
            <li>Trail Surface: {trail.trailSurface}</li>
            <li>Fees and Permits: {trail.feesPermits}</li>
            <li>Schedule: {trail.schedule}</li>
            <li>Image link: {trail.image}</li>
        </ul>
        <div>
            <h3 id = "trailName">{trail.trailName} Reviews</h3>
            <div>
                {reviews.filter((review) => review.trailName === trail.trailName).map((trailReview) => (
                    <div className='details' id='reviewsdiv'key = {trailReview._id}>
                        <h6>{trailReview.reviewText}</h6>
                        <h6>Review by {trailReview.userName}</h6>
                    </div>
                ))
                }
            </div>
        </div>
        
    </div>
) : <h3>Finding trail...</h3>
}