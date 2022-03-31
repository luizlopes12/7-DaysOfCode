import React from 'react'
import { HeaderStyle } from './styled'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <img src={logo} alt="Casa Verde" />
      </div>
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