import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';

const Navbar =  () => {
return (
   <>
     <Nav>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <NavLink to="/">
        <h1>H$$A</h1>
      </NavLink>
      <Bars/>
      <NavMenu>
        <NavLink to="/about" activeStyle>
            Sobre Nosotros
        </NavLink>
        <NavLink to="/servicios" activeStyle>
            Servicios
        </NavLink>
        <NavLink to="/contacto" activeStyle>
            Contacto
        </NavLink>
        <NavLink to="/registrarse" activeStyle>
            Registrarse
        </NavLink>
      </NavMenu>
      <NavBtn>
          <NavBtnLink to="/sigin">Iniciar Sesion</NavBtnLink>
      </NavBtn>
     </Nav>
   </>
)}


export default Navbar;