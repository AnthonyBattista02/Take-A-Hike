import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


import { BASE_URL } from '../globals'  

export default function UserDetails() {
    const [user, setUser] = useState()
    const [trls, setTrls] = useState([])
    let {id} = useParams()
    
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

    const removeTrail = async (trailIDVar) => {
        if (confirm("Are you sure you want to remove this trail?")){
        const indexToDelete = user.wantToHike.findIndex((element) => element._id === trailIDVar)
        user.wantToHike.splice(indexToDelete, 1)
        await axios.put(`${BASE_URL}/users/${user._id}`, user)

        // Only a field in user changed, update that property to trigger a re-render
        setUser({
            ...user,
            wantToHike: user.wantToHike
        })
        }
    }

return user ? (
    <div className="detail">
        <div>
            <Link to = {`/trails`}>
                <button>Return to List of Trails</button>
            </Link>
        </div>
        <h2 className="detail-title">User Trails</h2>
        <div>
            <h2>Want to Hike:</h2>
            {user.wantToHike.map((element) => (
                <div>
                    <Link to = {`/trails/${element._id}`} key = {element._id}>
                        <div>
                            <h3>{element.trailName}</h3>
                        </div>
                    </Link> 
                    <div>
                        <button onClick={()=>removeTrail(element._id)}>Remove</button>  
                        <button>Mark as Hiked</button>
                    </div>
                </div>
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