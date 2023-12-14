import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import HeaderSection from './components/ui/HeaderSection/HeaderSection'
import SidebarSection from './components/ui/SidebarSection/SidebarSection'

const App = () =>
{
  return (
    <Router>
      <HeaderSection/>
      <SidebarSection/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/product' element={ <Product/> }></Route>
      </Routes>
    </Router>
  )
}

export default App
