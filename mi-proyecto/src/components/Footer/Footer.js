import React from 'react';
import "./footerStyles.css"

function Footer (){

    return (
        <footer>
            <p>By: 
                 <a href="https://www.linkedin.com/in/carolina-canorio-hellwing-756735207/" className='footerNames'> Carolina Canorio </a>
                , 
                <a href="https://www.linkedin.com/in/inaki-valencia/ " className='footerNames'> Iñaki Valencia </a>
                and 
                <a href="https://www.linkedin.com/in/quill%C3%A9n-bucciero-78ba56207/" className='footerNames'> Quillén Bucciero </a>
            </p>   
            <p>Copyright © 2022</p>
        </footer>
    )
}

export default Footer ;