import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
<Navbar />
    <Routes>
    <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
<Footer/>
    </Router>
  )
}

export default App
