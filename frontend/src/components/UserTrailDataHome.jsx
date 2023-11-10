import { Link } from 'react-router-dom'

const UserTrailData = () => {
    return(
        <div>
            <div>
                <h1>User Trail Data</h1>
                <h3>We can record your trails and reviews. </h3>
                {/* PROPS OR PARAMS FOR USER/ID? */}
                <button><Link to = {`/users/654c1403aca523c0ae6541a7`}>User Trails</Link></button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default UserTrailData