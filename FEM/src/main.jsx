import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ResultSummary } from '../Components/ResultSummary'
import { Router,Routes,Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
    <Routes>
      <Route path='/' element={<ResultSummary/>}/>
    </Routes>
   </Router>
  </React.StrictMode>,
)
