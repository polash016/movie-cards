import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar'
import Footer from './Footer'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
