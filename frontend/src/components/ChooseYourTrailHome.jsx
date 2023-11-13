import { Link } from 'react-router-dom'
import './Trails.css'

//HOMEPAGE INTRO & LINK TO TRAILS LIST INDEX PAGE
const ChooseYourTrail = () => {
    return(
            <div id="sshomediv">
                <h1 id = "title">Choose Your Trail</h1>
                <h3 id = "trailName">To those who savor the outdoors, we offer a portal to nature's bounty.  </h3>
                <button id = 'ssbutton'><Link to = {`/trails`}>Trails List</Link></button>
            </div>
    )
}

export default ChooseYourTrail