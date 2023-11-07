import { Link } from 'react-router-dom'

const ChooseYourTrail = () => {
    return(
        <div>
            <div>
                <h1>Choose Your Trail</h1>
                <h3>Our trails are amazing.  Go check it out. </h3>
                <button><Link to = {`/trails`}>Trails List</Link></button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ChooseYourTrail