import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'
import { BiSolidMoon, BiMoon } from 'react-icons/bi';

const Navbar = () => {
  const {state, dispatch} = useContextGlobal();

  return (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/Contacto">Contacto</Link>
      <Link to="/Destacados">Destacados</Link>
      {
        state.theme ? <BiSolidMoon onClick={() => {dispatch({ type: "SWITCH THEME" }) }} style={{fontSize:"20px", padding:"5px 0px 0px 5px"}}/> :
        <BiMoon onClick={() => {dispatch({ type: "SWITCH THEME" }) }} style={{fontSize:"20px", padding:"5px 0px 0px 5px"}}/>
      }
    </nav>
  )
};

export default Navbar;