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
                    <div className="dropdown">
                        <p className="dropbtn">View all</p>                                                
                        <div className="dropdown-content">
                        <Link to='/All'>All billboard movies</Link>
                        <Link to='/All'>All popular TV shows</Link>                            
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Header ;