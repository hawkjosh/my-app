import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'

import './assets/styles/App.css'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}