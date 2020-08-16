// core
import React from 'react';
import { NavLink } from 'react-router-dom';

// images
import homeSvg from '../../images/home.svg'
import chartSvg from '../../images/chart.svg'
import categorySvg from '../../images/category.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer__inner'>
                    <div className='footer__btns'>
                        <NavLink className='footer__btn' to="/home">
                            <img className='footer__btn-icon' src={homeSvg} alt="" />
                        </NavLink>

                        <NavLink className='footer__btn' to="/categories">
                            <img className='footer__btn-icon' src={categorySvg} alt="" />
                        </NavLink>

                        <NavLink className='footer__btn' to="/statistics">
                            <img className='footer__btn-icon' src={chartSvg} alt="" />
                        </NavLink>
                    </div>

                    <NavLink className='footer__create-btn' to="/create">+</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;