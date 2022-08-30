import React from 'react';
import {Link} from 'react-router-dom';


function Header (){

    return (
        <nav>
        <Link to='/' className='logo'><img src="/logo192.png" alt="Logo" /></Link>
            <ul className='header-container'>                
                <li> 
                    <Link to='/'> Home | </Link>
                </li>
                <li> 
                    <Link to='/Favorites'>Favoritos | </Link>
                </li>
                <li> 
                    <Link to='/All'>Ver todas</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header ;