import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'

import { BASE_URL } from '../globals'  

export default function UserDetails() {
    const [user, setUser] = useState()
    const [trls, setTrls] = useState([])
    let {id} = useParams()
    console.log(id)
    
    useEffect(() => {
        const getUser = async() => {
            const response = await axios.get(`${BASE_URL}/users/654c1403aca523c0ae6541a7`)
            console.log(response.data)
            setUser(response.data)
        }
        const getTrls = async () => {
            const response = await axios.get(`${BASE_URL}/trails`)
            console.log(response.data)
            setTrls(response.data)
        }
        getUser()
        getTrls()
    },[])   

    // let navigate = useNavigate()

    // const showTrail = (variable) => {
    //     navigate(`${variable}`)
    // }

console.log(user)
console.log(trls)

return user ? (
    <div className="detail">
        <h2 className="detail-title">User Trails</h2>
        <div>
            <h2>Want to Hike:</h2>
            {user.wantToHike.map((element) => (
                        <Link to = {`/trails/${element._id}`} key = {element._id}>

                        <div>
                            <h3>{element.trailName}</h3>
                            <button>Mark as Hiked</button>
                        </div>
                        </Link>   
            ))
            }
        </div>
        <div>
            <h2>Have Hiked:</h2>
            {user.haveHiked.map((element) => (
                        <Link to = {`/trails/${element._id}`} key = {element._id}>

                        <div >
                            <h3></h3>
                            <h3>{element.trailName}</h3>
                            <button>Write Review</button>
                        </div>
                        </Link>   
            ))
            }
        </div>
        
    </div>
) : <h3>Finding user...</h3>
}