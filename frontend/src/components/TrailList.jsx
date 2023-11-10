import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

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
        userID = userResponse.data[0]._id
        }
        getTrails()
        getUser()
    }, [])

        //If adding multiple user profiles, revise this to find user.
        

        const button = document.getElementById("wantToHike")

        let navigate = useNavigate()

        const showTrail = (variable) => {
            navigate(`${variable}`)
        }

        
        let userID

        const addWantToHike = async (trailIDVar) => {
            let currentUser = users[0]
            const found = currentUser.wantToHike.find((element) => element === trailIDVar)
            if (!found) {
                currentUser.wantToHike.push(trailIDVar)
                console.log(currentUser)
                await axios.put(`${BASE_URL}/users/${currentUser._id}`, currentUser)
                button.disabled=true
                button.innerText= "On your list!"
            }
        }

        return(
            <div className="list-container">
                <h2>List of Trails</h2>

                <div className="grid">

                    {trails.map((trail) => (
                        <div key = {trail._id} className="card">
                            <h3>{trail.trailName}</h3>
                            <ul>
                                <li>Distance: {trail.miDistance} mi.</li>
                                <li>Difficulty: {trail.difficulty}</li>
                            </ul>
                            <button onClick={()=>showTrail(trail._id)}>Trail Details</button>
                            <Link to = {`/users/${userID}`}><button id="wantToHike" onClick={()=> addWantToHike(trail._id)}>Want to Hike</button></Link>
                        </div>
                    ))}
                </div>
            </div>
        )}      

export default TrailList