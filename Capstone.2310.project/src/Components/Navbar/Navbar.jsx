import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md';
function Navbar() {

    return (
        <section className="navBarsection">
            <header className="header-flex">

                <div className="logoDiv">
                    <a href="#" className='logo flex'>
                        <h1><MdOutlineTravelExplore className="icon" /> Travel.</h1>
                    </a>
                </div>

                <div className="navBar">
                    <ul className='navLists flex'>
                        <li className='navItem'>
                            <a href="#" className='navLink'>Home</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" className='navLink'>Packages</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" className='navLink'>Shop</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" className='navLink'>About</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" className='navLink'>Pages</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" className='navLink'>News</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" className='navLink'>Contact</a>
                        </li>
                        <button className='btn'>
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>
                    <div className="closeNavbar">

                    </div>
                </div>
            </header>
        </section>
    )
}

export default Navbar