import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Footer from "./Footer";
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

        //If adding multiple user profiles, revise this to find user.
        //userID = userResponse.data[0]._id
        }
        getTrails()
        getUser()
    }, [])   

        let navigate = useNavigate()

        const showTrail = (variable) => {
            navigate(`${variable}`)
        }

        //let userID

        const addWantToHike = async (trailIDVar) => {
            let currentUser = users[0]
            const found = currentUser.wantToHike.find((element) => element === trailIDVar)
            if (!found) {
                currentUser.wantToHike.push(trailIDVar)
                console.log(currentUser)
                await axios.put(`${BASE_URL}/users/${currentUser._id}`, currentUser)
                
                //const button = document.getElementById("wantToHike")
                
                //button.disabled=true
                // if (this.innerText == "Want to Hike") {
                //     this.innerText == "On your list!"
                // }
                // button.innerHTML= "On your list!"
            }
        }

        return(
            <div className="list-container">
                <h2>List of Trails</h2>

                <div className="grid">

                    {trails.map((trail) => (
                        <div key = {trail._id} className="card">
                            <Link to = {`/trails/${trail._id}`}>
                            <h3>{trail.trailName}</h3>
                            <ul>
                                <li>Distance: {trail.miDistance} mi.</li>
                                <li>Difficulty: {trail.difficulty}</li>
                            </ul>
                            </Link>
                            <div>
                            {users.map((user) => (
                                <Link to = {`/users/${user._id}`} key = {user._id}><button id="wantToHike" onClick={()=> addWantToHike(trail._id)}>Want to Hike</button></Link>
                            ))}
                            </div>
                                
                        </div>
                    ))}
                </div>
                
            </div>
            
        )}      

export default TrailList