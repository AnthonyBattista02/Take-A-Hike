import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import './Trails.css'

import { BASE_URL } from '../globals'  

//COMPONENT UTILIZES USER & TRAIL DATA
export default function UserDetails() {
    const [user, setUser] = useState()
    const [trls, setTrls] = useState([])
    let {id} = useParams()
    
    useEffect(() => {
        //GET- FUNCTIONS TO FETCH USER & TRAIL DATA
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

    //PUT- FUNCTION TO REMOVE A TRAIL FROM THE USER MODEL WANT-TO-HIKE PROPERTY ARRAY
    const removeWantToHikeTrail = async (trailIDVar) => {
        const indexToDelete = user.wantToHike.findIndex((element) => element._id === trailIDVar)
        user.wantToHike.splice(indexToDelete, 1)
        await axios.put(`${BASE_URL}/users/${user._id}`, user)

        //ONLY A FIELD IN USER CHANGED, UPDATE THAT PROPERTY TO TRIGGER A RE-RENDER.
        setUser({
            ...user,
            wantToHike: user.wantToHike
        })
        //}
    }

    //PUT- FUNCTION TO REMOVE A TRAIL FROM THE USER MODEL WANT-TO-HIKE PROPERTY ARRAY THEN ADD (PUSH) IT INTO THE HAVE-HIKED ARRAY.
    const moveTrail = async (trail) => {
        const indexToDelete = user.wantToHike.findIndex((element) => element._id === trail._id)
        user.wantToHike.splice(indexToDelete, 1)

        const found = user.haveHiked.find((element) => element === trail._id)
        if (!found) {
            user.haveHiked.push(trail)        
        }
        await axios.put(`${BASE_URL}/users/${user._id}`, user)

        //ONLY A FIELD IN USER CHANGED, UPDATE THAT PROPERTY TO TRIGGER A RE-RENDER.
        setUser({
            ...user,
            haveHiked: user.haveHiked,
            wantToHike: user.wantToHike
        })
    }

    //PUT- FUNCTION TO REMOVE A TRAIL FROM THE USER MODEL HAVE-HIKED ARRAY
    const removeHikedTrail = async (trailIDVar) => {
        const indexToDelete = user.haveHiked.findIndex((element) => element._id === trailIDVar)
        user.haveHiked.splice(indexToDelete, 1)
        await axios.put(`${BASE_URL}/users/${user._id}`, user)

        //ONLY A FIELD IN USER CHANGED, UPDATE THAT PROPERTY TO TRIGGER A RE-RENDER.
        setUser({
            ...user,
            haveHiked: user.haveHiked
        })
    }

return user ? (
    <div className="detail">
        <div>
            <Link to = {`/trails`}>
                <button id="ssbutton">See List of Trails</button>
            </Link>
        </div>
        <h2 id = "title" className="detail-title">USER TRAILS</h2>
        <div className='sscontainer'>
            <h2 id = "title">WANT TO HIKE:</h2>
            {user.wantToHike.map((element) => (
                <div key = {element._id}>
                    <Link to = {`/trails/${element._id}`} >
                        <div>
                            <h3 id = "trailName">{element.trailName}</h3>
                        </div>
                    </Link> 
                    <div>
                        <button id="ssbutton" onClick = {() => removeWantToHikeTrail(element._id)}>Remove</button>  
                        <button id="ssbutton" onClick = {() =>moveTrail(element)}>Mark as Hiked</button>
                    </div>
                </div>
            ))
            }
        </div>
        <div className= 'sscontainer' key = {user._id}>
            <h2 id = "title">HAVE HIKED:</h2>
            {user.haveHiked.map((element) => (
                <div key = {element._id}>
                    <Link to = {`/trails/${element._id}`} >
                        <div>
                            <h3 id = "trailName">{element.trailName}</h3>
                        </div>
                    </Link>  
                    <div>
                        <button id="ssbutton" onClick = {() => removeHikedTrail(element._id)}>Remove</button> 
                        <Link to = {`/reviews`} >
                            <button id="ssbutton">Write Review</button>
                        </Link>
                    </div>
                </div>
            ))
            }
        </div>
        
    </div>
    
) : <h3>Finding user...</h3>
}