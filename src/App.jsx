import { useState } from 'react'
import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import CounterPage from './CounterPage'
import TimerPage from './TimerPage'

function App() {

  return (
    <>
      <header>
        <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? "menu-active" : undefined}>Hem</NavLink>
          <NavLink to="/counter/" className={({ isActive }) => isActive ? "menu-active" : undefined}>Räknare</NavLink>
          <NavLink to="/timer/" className={({ isActive }) => isActive ? "menu-active" : undefined}>Timer</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter/" element={<CounterPage />} />
          <Route path="/timer/" element={<TimerPage />} />
        </Routes>
      </main>
      <footer>
        &copy; 2024 Javascript 3 - Övning 5
      </footer>
    </>
  )
}

export default App
