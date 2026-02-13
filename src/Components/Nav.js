import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./nav.css";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useSelector } from 'react-redux';

const Nav = () => {
    const sinanum = useSelector((state)=>state.sinacola.counter);
  return (
    <nav>
        <span>Logo</span>
        <ul>
            <li>
                <NavLink to="/" >Home</NavLink>
            </li>

            <li>
                <NavLink to="/about" >About</NavLink>
            </li>

            <li>
                <NavLink to="/contact" >Contact</NavLink>
            </li>

             <li>
                <NavLink to="/products" ><MdOutlineProductionQuantityLimits size={30}/>Products</NavLink>
            </li>

            <li>
                <NavLink to="/sinacola" >{sinanum}SinaCola</NavLink>
            </li>


        </ul>
      
    </nav>
  )
}

export default Nav
