import { Route, Routes } from 'react-router-dom'
import Home from './Home'

import TrailList from './TrailList'
import TrailPage from './TrailPage'
import Review from './Review'
import UserPage from './UserPage'

export default function Main(props) {
    return (
        <div className="routes-container">
          <Routes>
            <Route path = '/' element={<Home/>} />
            <Route path = "/trails" element={<TrailList/>}/>
            <Route path = "/trails/:id" element = {<TrailPage/>} />
            <Route path = "/reviews" element = {<Review />} />
            <Route path = "/users/:id" element = {<UserPage/>} />
          </Routes>
        </div>
      )
}