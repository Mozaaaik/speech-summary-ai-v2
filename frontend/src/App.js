// src/App.js
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
import ProfileMenu from './components/ProfileMenu'
import logo from './components/icon.svg'
import { FaRegUser } from 'react-icons/fa'
import './App.css'
import AuthProvider from './context/AuthProvider'

const AppContent = () => {
  const location = useLocation()
  const token = localStorage.getItem('token')
  const isAuthPage = ['/login', '/register'].includes(location.pathname)
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem("token")
      localStorage.clear()
    }, 1000 * 60 * 2)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <header className="app-header">
        <img src={logo} alt="Logo" className="logo" />
        {!isAuthPage && (
          <FaRegUser
            className="profileIcon"
            onClick={() => setShowDropdown(prev => !prev)}
          />
        )}
      </header>

      <Navbar show={!isAuthPage} refreshKey={1} />

      {!isAuthPage && (
        <ProfileMenu show={showDropdown} onClose={() => setShowDropdown(false)} />
      )}
      {!token && (
        <Navigate to="/login" replace />
      )}
      <main className={isAuthPage ? 'main' : 'main-active'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  )
}

const App = () => (
  <AuthProvider>
    <Router>
      <AppContent />
    </Router>
  </AuthProvider>
)

export default App
