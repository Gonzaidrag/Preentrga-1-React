import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <header>
      <Link to={"/"}><h1 className='Nav'>Dfusion TM</h1> </Link>


      <nav>
        <ul>
             <li>
                  <NavLink to={"/categoria/1"}> Remeras </NavLink>
                </li>

                <li>
                  <NavLink to={"/categoria/2"}> Bermudas </NavLink>
                </li>
        </ul>
       
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar
