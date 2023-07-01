import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Cart } from './cart/Cart'
import { NavBar } from './components/Navbar'
import HomePage from './views/HomePage'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
