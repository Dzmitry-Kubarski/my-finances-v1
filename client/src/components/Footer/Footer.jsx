import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer__inner'>
                    <div className='footer__btns'>
                        <NavLink className='footer__btn' to="/home">H</NavLink>
                        <span className='footer__btn'>M</span>
                        <span className='footer__btn'>A</span>
                    </div>

                    <NavLink className='footer__create-btn' to="/create">+</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;