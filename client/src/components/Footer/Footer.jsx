import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer__inner'>
                    <div className='footer__btns'>
                        <NavLink className='footer__btn' to="/home">H</NavLink>
                        <NavLink className='footer__btn' to="/categories">К</NavLink>
                        {/* <NavLink className='footer__btn' to="/test">тест</NavLink> */}
                    </div>

                    <NavLink className='footer__create-btn' to="/create">+</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;