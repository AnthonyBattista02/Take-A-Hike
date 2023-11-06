import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const TrailList = (props) => {
    if (!props.trails) {
        return<h2>Loading trails please wait...</h2>
    } else {
        let navigate = useNavigate()

        const showTrail = (key) => {
            navigate(`${key}`)
        }

        return(
            <div className="list-container">
                <h2>List of Trails</h2>

                <div className="grid">

                    {props.trails.map((trail, key) => (
                        <div key = {key} onClick={()=>showTrail(key)} className="card">
                            <h3>{trail.trailName}</h3>
                            <ul>
                                <li>Distance: {trail.miDistance}</li>
                                <li>Difficulty: {trail.difficulty}</li>
                                <li>Approximate Hiking Time: {trail.hikingTimeHrs}</li>
                                <li>Trail Surface: {trail.trailSurface}</li>
                                <li>Fees and Permits: {trail.feesPermits}</li>
                                <li>Schedule: {trail.schedule}</li>
                                <li>Image link: {trail.image}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        )}
}

export default TrailList