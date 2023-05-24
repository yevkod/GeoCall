import React from 'react'
import LoginPage from './LoginPage/LoginPage'
import MapPage from './MapPage/MapPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<LoginPage />}/>
        <Route path='/map' element={<MapPage />}/>
      </Routes>
    </Router>
  )
}


export default App