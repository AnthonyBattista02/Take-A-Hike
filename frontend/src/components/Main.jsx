import { Route, Routes} from 'react-router-dom'
import Home from './Home'

import TrailList from './TrailList'

export default function Main(props) {
    return (
        <div className="routes-container">
          <Routes>
          
            <Route path='/' element={<Home/>} />
            <Route path ="/trails" element={<TrailList/>}/>
          
          </Routes>
        </div>
      )
}