import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ProjectsList } from './ProjectsList'
import { Cart } from './Cart'
import { NavBar } from './Navbar'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProjectsList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
