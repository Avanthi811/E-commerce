import { Routes,Route,Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import PageNotFound from './pages/PageNotFound'
import User from './pages/User'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Product/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path='/home' element={<Navigate to='/'></Navigate>}></Route>
        <Route path='*'element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  ) 
}

export default App
