import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
      <h1 className='Nav'>Dfusion TM</h1>


      <nav>
        <ul>
            <li>Remeras</li>
            <li>Shorts</li>
            <li>Conjuntos</li>

            
        </ul>
       
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar
