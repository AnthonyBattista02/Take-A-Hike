import { Link } from "react-router-dom"
import './Footer.css'

export default function Footer () {


    return(
        <div className="footer">
            <img src='src/assets/logo.png' placeholder="logo"/>
            <h3>Take a Hike</h3>
            <div id="navbar">
                <Link to ="/"> <h5> Home </h5> </Link>
            </div>
            <p>copyright @ 2023</p>
        </div>
    )
}