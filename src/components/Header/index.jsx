import React, { useState } from 'react'
import { HeaderStyle, NavButton } from './styled'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
const Header = () => {
  const [toggled, setToggled] = useState(true)
  const navOpen = () =>{
    setToggled(!toggled)
    console.log(toggled)
  }
  return (
    <HeaderStyle toggled={toggled}>
      <div>
        <img src={logo} alt="Casa Verde" />
      </div>
      <NavButton onClick={navOpen} toggled={toggled}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
      </NavButton>
      <nav>
        <ul>
          <li>
            <Link to='/'>Como Fazer / </Link>
          </li>
          <li>
            <Link to='/'>Ofertas / </Link>
          </li>
          <li>
            <Link to='/'>Depoimentos / </Link>
          </li>
          <li>
            <Link to='/'>Videos / </Link>
          </li>
          <li>
            <Link to='/'>Meu Carrinho</Link>
          </li>
        </ul>
      </nav>

    </HeaderStyle>
  )
}

export default Header