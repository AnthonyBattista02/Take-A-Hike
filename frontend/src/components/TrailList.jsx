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

                    {props.trails.map((trail) => (
                        <div key = {trail._id} onClick={()=>showTrail(key)} className="card">
                            <h3>{trail.trailName}</h3>
                            <ul>
                                <li>Distance: {trail.miDistance}</li>
                                <li>Difficulty: {trail.difficulty}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        )}
}

export default TrailList