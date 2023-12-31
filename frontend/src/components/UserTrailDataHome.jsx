import { Link } from 'react-router-dom'
import './Trails.css'

//HOMEPAGE INTRO & LINK TO USER DATA PAGE
const UserTrailData = () => {
    return(
            <div id="sshomediv">
                <h1 id = "title">User Trails Record</h1>
                <h3 id = "trailName">Remember life's simple pleasures. </h3>
                <button id = 'ssbutton'><Link to = {`/users/654c1403aca523c0ae6541a7`}>User Trails</Link></button>
            </div>
    )
}

export default UserTrailData