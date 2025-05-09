import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

// Default imports (make sure both files use `export default`)
import App from './App'
import Page from '@/app/dashboard/page' // use alias if configured

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Page />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
