import React from 'react';
import {Link} from 'react-router-dom';


function Header (){

    return (
        <nav>
        <Link to='/' className='logo'><img src="/logo.png" alt="Logo" /></Link>
            <ul className='header-container'>                
                <li> 
                    <Link to='/'> Home</Link>
                </li>
                <li> 
                    <Link to='/Favourites'>Favourites</Link>
                </li>
                <li> 
                    <Link to='/All'>View all</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header ;