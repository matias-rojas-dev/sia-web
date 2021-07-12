import React from 'react'
import { Link } from 'react-router-dom';
import MenuResponsive from '../components/MenuResponsive';
const Header = () => (
    <>
        <header>
            <div className="nav-header">
                <Link to='/'>
                    <h3>Press on Nails</h3>
                </Link>
                <div className="nav-container-list">
                    <ul className="nav-list">
                        <Link to='/products'>
                            <li>PRODUCTOS</li>
                        </Link>
                        <Link to='/featured'>
                            <li>DESTACADOS</li>
                        </Link>
                        <Link to='/about-us'>
                            <li>NOSOTROS</li>
                        </Link>
                        <Link to='/contact'>
                            <li>CONTACTO</li>
                        </Link>
                    </ul>
                </div>
                <div className="aux-btn">
                    <MenuResponsive />
                </div>
            </div>
        </header>
    </>
)


export default Header;