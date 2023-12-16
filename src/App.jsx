import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import HeaderSection from './components/ui/HeaderSection/HeaderSection'
import SidebarSection from './components/ui/SidebarSection/SidebarSection'
import DetailProduct from './pages/DetailProduct'

const App = () =>
{
  return (
    <Router>
      <SidebarSection>
        <HeaderSection/>
        <Routes>
          <Route index element={ <Home/> }></Route>
          <Route path='/product' element={ <Product /> }></Route>
          <Route path='/detail/:slug' element={ <DetailProduct /> }></Route>
        </Routes>
      </SidebarSection>
    </Router>
  )
}

export default App
