import Home from "./pages/Home"
import Profile from './pages/Profile'
import ContactMe from './pages/ContactMe'
import Projects from './pages/Projects'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  
  )
  }

export default App
