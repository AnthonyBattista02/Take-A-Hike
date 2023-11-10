import ChooseYourTrail from "./ChooseYourTrailHome"
import UserTrailData from "./UserTrailDataHome";
import Footer from "./Footer";

export default function Home () {

    return(
        <div>
            <h1> I am Home </h1>
            <ChooseYourTrail />
            <UserTrailData />
            <Footer />
        </div>
    )
}