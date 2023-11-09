import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Home from './components/Home'
import TrailList from './components/TrailList'
import TrailPage from './components/TrailPage'
import UserPage from './components/UserPage'

function App() {

  return (
    <div>
      <Header/>
      <Main/>
    </div>
        
  )
}

export default App