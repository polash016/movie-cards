import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Component/NavBar'
import Footer from './Component/Footer'

function App() {

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
