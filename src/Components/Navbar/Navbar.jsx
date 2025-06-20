import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Asserts/logo.png'
import cart_icon from '../Asserts/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className="nav_logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav_menu">
            <li onClick={() => {setMenu("shop")}}><Link style={{ textDecoration:'none' }} to="/">Shop</Link>{menu==="shop" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("men")}}><Link style={{ textDecoration:'none' }} to="/mens">Men</Link>{menu==="men" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("women")}}><Link style={{ textDecoration:'none' }} to="/womens">Women</Link>{menu==="women" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link style={{ textDecoration:'none' }} to="/kids">Kids</Link>{menu==="kids" ? <hr /> : <></>}</li>
        </ul>
        <div className="nav_login_cart">
            <Link to="/login"><div className='cart'><button>Login</button></div></Link>
            <Link to="/cart"><img className='cart' src={cart_icon} alt="" /></Link>
            <div className='nav_cart_count'>{getTotalCartItems()}</div>
        </div>
      
    </div>
  )
}

export default Navbar
