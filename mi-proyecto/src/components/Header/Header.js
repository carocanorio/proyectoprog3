import React from 'react';
import {Link} from 'react-router-dom';
import "./headerStyles.css"


function Header (){

    return (
        <nav>
        <Link to='/' className='logo'><img src="/logo.png" alt="Logo" /></Link>
            <ul className='header-container'>                
                <li> 
                    <Link to='/'> Home</Link>
                </li>
                
                <li>                    
                    <div className="dropdown">
                        <p className="dropbtn">View all</p>                                                
                        <div className="dropdown-content">
                        <Link to='/AllMovies'>All billboard movies</Link>
                        <Link to='/AllTvShows'>All popular TV shows</Link>                            
                        </div>
                    </div>
                </li>

                <li>                    
                    <div className="dropdown">
                        <p className="dropbtn">View all</p>                                                
                        <div className="dropdown-content">
                        <Link to='/favourite/movies'>Favourite movies</Link>
                        <Link to='/favourite/series'>Favourite TV shows</Link>                            
                        </div>
                    </div>
                </li>
            
            </ul>
        </nav>
    )
}

export default Header ;