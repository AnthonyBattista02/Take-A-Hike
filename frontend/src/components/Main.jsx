import { Route, Routes} from 'react-router-dom'
import Home from './Home'


export default function Main(props) {
    return (
        <div className="routes-container">
          <Routes>
          
            <Route path='/' element={<Home/>} />
          
          </Routes>
        </div>
      )
}