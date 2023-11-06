import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'

import { BASE_URL } from './globals'
import Header from './components/Header'
import Main from './components/Main'
import Home from './components/Home'
import TrailList from './components/TrailList'


function App() {
  const [trails, setTrails] = useState([])

  useEffect(() => {
    const getTrails = async () => {
      const response = await axios.get(`${BASE_URL}/trails`)
      console.log(response.data)
      setTrails(response.data)
    }
    getTrails()
  }, [])


  return (
    <div>
      <Header/>
      <Main/>
        <Routes>
          <Route path = "/" element = {<Home /> } />
          <Route path = "/trails" element = {<TrailList trails={trails}/>} />
        </Routes>
    </div>
        
  )
}

export default App