import { Link } from "react-router-dom"
import './Footer.css'

export default function Footer () {


    return(
        <div className="footer">
            <img src='src/assets/logo.png' placeholder="logo"/>
            <h3 className="footer-title">Take a Hike</h3>
            <div id="navbar">
                <Link to ="/"> <h5 className="footer-link"> Home </h5> </Link>
                <Link to='/trails'> <h5 className="footer-link"> Trails </h5> </Link>
                <Link to='/reviews'> <h5 className="footer-link"> Reviews </h5></Link>
            </div>
            <p>copyright @ 2023</p>
        </div>
    )
}