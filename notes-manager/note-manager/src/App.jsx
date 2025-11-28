import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import './App.css'

function App() {
  const [isAuthenticadet, setIsAuthenticadet] = useState(!!localStorage.getItem('auth'))


return (
  <Routes>
    <Route path="/"
      element={isAuthenticadet ?
         <HomePage onLogOut={() => setIsAuthenticadet(false)}/> : <Navigate to='/login' />}
    />
    <Route path="/login"
      element={!isAuthenticadet ? 
      <LoginPage onLogin={() => setIsAuthenticadet(true)} /> : <Navigate to='/' />}
    />
  </Routes>
)
}


export default App
