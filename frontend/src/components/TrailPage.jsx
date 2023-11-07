import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

import { BASE_URL } from '../globals'

export default function TrailDetails() {
    const [trail, setTrail] = useState()
    let {id} = useParams()
    console.log(id)

    useEffect(() => {
        const getTrail = async() => {
            const response = await axios.get(`${BASE_URL}/trails/${id}`)
            setTrail(response.data)
        }
        getTrail()
    },[])

return trail ? (
    <div className="detail">
        <h2 className="detail-title">{trail.trailName}</h2>
        <ul>
            <li>Distance: {trail.miDistance}</li>
            <li>Difficulty: {trail.difficulty}</li>
            <li>Approximate Hiking Time: {trail.hikingTimeHrs}</li>
            <li>Trail Surface: {trail.trailSurface}</li>
            <li>Fees and Permits: {trail.feesPermits}</li>
            <li>Schedule: {trail.schedule}</li>
            <li>Image link: {trail.image}</li>
        </ul>
        <button><Link to = "/trails">Return to Trails List</Link></button>
    </div>
) : <h3>Finding trail...</h3>
}