
import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, Navigate } from "react-router";
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Signup from './pages/Signup'
import Login from './pages/Login'


function App() {
  const [isLogin, setIsLogin] = useState(true);
   return (
    <>
      <nav className="navbar">
        <div className="logo">Navbar</div>
     
        {
          (isLogin) ?

            <div className='link'  >
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/product">Product</Link>
              <Link to="/contact">Contact</Link>
            </div>
            :


            <div className='link' >
              <Link to="/">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>

        }
        <button id="Toggle" onClick={() => { setIsLogin(!isLogin) }}>SignUp button</button>
      </nav>
      {
        (isLogin) ?
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product' element={<Product />} />
            <Route path="/signup" element={<Navigate to="/" />} />
          </Routes> :
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>


      }
    </>
  )
}

export default App
