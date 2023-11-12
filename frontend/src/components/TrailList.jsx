import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import './Trails.css'

const TrailList = () => {
    const [trails, setTrails] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getTrails = async () => {
        const response = await axios.get(`${BASE_URL}/trails`)
        setTrails(response.data)
        }
        const getUser = async () => {
        const userResponse = await axios.get(`${BASE_URL}/users`) 
        setUsers(userResponse.data)
        }
        getTrails()
        getUser()
    }, [])   

        let navigate = useNavigate()

        const showTrail = (variable) => {
            navigate(`${variable}`)
        }


        const addWantToHike = async (trailIDVar) => {
            let currentUser = users[0]
            const found = currentUser.wantToHike.find((element) => element === trailIDVar)
            if (!found) {
                currentUser.wantToHike.push(trailIDVar)
                console.log(currentUser)
                await axios.put(`${BASE_URL}/users/${currentUser._id}`, currentUser)
            }
        }

        return(
            <div className="list-container">
                <h2 id = "title">LIST OF TRAILS</h2>

                <div className="grid">

                    {trails.map((trail) => (
                        <div key = {trail._id} className="sscard">
                            <Link to = {`/trails/${trail._id}`}>
                            <h3 id = "trailName">{trail.trailName}</h3>
                            <ul className='details'>
                                <li>Distance: {trail.miDistance} mi.</li>
                                <li>Difficulty: {trail.difficulty}</li>
                            </ul>
                            </Link>
                            <div>
                            {users.map((user) => (
                                <Link to = {`/users/${user._id}`} key = {user._id}><button id="ssbutton" onClick={()=> addWantToHike(trail._id)}>Want to Hike</button></Link>
                            ))}
                            </div>
                                
                        </div>
                    ))}
                </div>
                
            </div>
            
        )}      

export default TrailList