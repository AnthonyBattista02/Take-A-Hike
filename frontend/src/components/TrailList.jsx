import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const TrailList = () => {
    const [trails, setTrails] = useState([])

    useEffect(() => {
        const getTrails = async () => {
        const response = await axios.get(`${BASE_URL}/trails`)
        setTrails(response.data)
        }
        getTrails()
    }, [])

        let navigate = useNavigate()

        const showTrail = (variable) => {
            navigate(`${variable}`)
        }

        return(
            <div className="list-container">
                <h2>List of Trails</h2>

                <div className="grid">

                    {trails.map((trail) => (
                        <div key = {trail._id} onClick={()=>showTrail(trail._id)} className="card">
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


export default TrailList