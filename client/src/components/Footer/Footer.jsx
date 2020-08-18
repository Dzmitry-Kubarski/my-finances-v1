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
                            <span className='footer__btn-title'>Главная</span>
                        </NavLink>

                        <NavLink className='footer__btn' to="/categories">
                            <img className='footer__btn-icon' src={categorySvg} alt="" />
                            <span className='footer__btn-title'>Категории</span>
                        </NavLink>

                        <NavLink className='footer__btn' to="/statistics">
                            <img className='footer__btn-icon' src={chartSvg} alt="" />
                            <span className='footer__btn-title'>Статистика</span>
                        </NavLink>
                    </div>

                    {/* <NavLink className='footer__create-btn' to="/create">+</NavLink> */}
                    <NavLink className='footer__btn  footer__create-btn' to="/create">+</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;