const db = require('../db')
const Trail = require('../models/trail')

db.on('error', consol.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const trails = [
        {
            trailName: "Dove Springs",
            miDistance: 1.6,
            difficulty: "Easy",
            hikingTimeHrs: 1,
            trailSurface: "Crushed gravel and dirt",
            feesPermits: "None",
            schedule: "5:00am to 10:00pm daily",
            image: "backend/assets/doveSprings.jpg"
        },
        {
            trailName: "McKinney Roughs Nature Park: Buckeye Trail",
            miDistance: 3,
            difficulty: "Moderate",
            hikingTimeHrs: 1.5,
            trailSurface: "Dirt path, sand",
            feesPermits: "Day-use fee",
            schedule: "8:00am to 5:00pm daily",
            image: "backend/assets/mckinneyRoughs.jpg",
        },
        {
            trailName: "McKinney Falls State Park: Homestead Trail",
            miDistance: 3,
            difficulty: "Moderate",
            hikingTimeHrs: 1.5,
            trailSurface: "Dirt path with some limestone outcrops",
            feesPermits: "Day-use fee",
            schedule: "8:00am to 10:00pm daily",
            image: "backend/assets/McKinney Falls.jpg",
        },
        {
            trailName: "Blunn Creek Preserve",
            miDistance: 1.5,
            difficulty: "Easy",
            hikingTimeHrs: 1,
            trailSurface: "Dirt with some rock",
            feesPermits: "None",
            schedule: "5:00am to 10:00pm daily",
            image: "backend/assets/blunnCreek.jpg",
        },
        {
            trailName: "St. Edwards Park: Hill and Creek Trails",
            miDistance: 1.2,
            difficulty: "Moderate",
            hikingTime: 1.5,
            trailSurface: "Dirt, stones, limestone outcrops",
            feesPermits: "None",
            schedule: "5:00am to 10:00pm daily",
            image: "backend/assets/stEds.jpg",
        },
        {
            trailName: "Wild Basin Wilderness Preserve",
            miDistance: 2.1,
            difficulty: "Moderate",
            hikingTime: 2,
            trailSurface: "Dirt, limestone",
            feesPermits: "Voluntary day-use fee based on the honor system",
            schedule: "Sunrise to sunset daily",
            image: "backend/assets/wildBasin.jpg",
        },
        {
            trailName: "Emma Long Metropolitan Park: Turkey Creek Trail",
            miDistance: 2.6,
            difficulty: "Moderate",
            hikingTime: 1.5,
            trailSurface: "Dirt path",
            feesPermits: "None",
            schedule: "7:00am to 10:00pm daily",
            image: "backend/assets/emmaLong.jpg",
        },
        {
            trailName: "Commons Ford: Lake Austin Loop",
            miDistance: 1.6,
            difficulty: "Easy",
            hikingTime: .75,
            trailSurface: "Dirt, grass",
            feesPermits: "None",
            schedule: "1:0pam to 6:00pm Tuesday through Sunday",
            image: "backend/assets/commonsFord.jpg",
        },
        {
            trailName: "Barton Creek Greenbelt: Gaines Creek Access",
            miDistance: 3.2,
            difficulty: "Moderate",
            hikingTime: 2.5,
            trailSurface: "Dirt and rock",
            feesPermits: "None",
            schedule: "5:00am to 10:00pm daily",
            image: "backend/assets/bartonCreek.jpg",
        },
        {
            trailName: "Balcones Canyonlands National Wildlife Refuge: Cactus Rocks Trail",
            miDistance: 3.6,
            difficulty: "Moderate",
            hikingTime: 2.5,
            trailSurface: "Dirt, gravel, limestone outcrop",
            feesPermits: "None",
            schedule: "Sunrise to sunset daily",
            image: "backend/assets/balconesCanyonlands.jpg",
        },
    ]
    await Trail.insertMany(trails)
    console.log('Created some trails!')
}

const run = async () => {
    await main()
    db.close()
}

run()