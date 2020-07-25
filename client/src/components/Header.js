import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import logoSvg from '../images/logo.svg';

export const Header = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    console.log('header', auth);

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        // <nav>
        //     <div className="nav-wrapper blue darken-1">
        //         <span className="brand-logo">Сокращение ссылок</span>

        //         <ul id="nav-mobile" className="right hide-on-med-and-down">
        //             <li><NavLink to="/create">Создать</NavLink></li>
        //             <li><NavLink to="/links">Ссылки</NavLink></li>
        //             <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        //         </ul>
        //     </div>
        // </nav>



        <header className="header">
            <div className="header-actions">
                <div className="header-brand">
                    <div className="logo">
                        <img src={logoSvg} alt="logo" />
                    </div>
                    <h1 className="header-brand-text">Finance</h1>
                </div>
            </div>

            {/* <div className="header-actions search-bar">
                <div className="interactive-input dark">
                    <input type="text" id="search-main" name="search_main" placeholder="Поиск транзакций" />
                    <div className="interactive-input-icon-wrap">
                        <svg className='interactive-input-icon icon-magnifying-glass' id="svg-magnifying-glass" viewBox="0 0 20 20" preserveAspectRatio="xMinYMin meet">
                            <path d="M8,2c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S4.691,2,8,2 M8,0C3.582,0,0,3.582,0,8c0,4.418,3.582,8,8,8c4.418,0,8-3.582,8-8C16,3.582,12.418,0,8,0L8,0z"></path>
                            <path d="M19.171,15.168l-3.134-3.134c-0.309,0.613-0.679,1.19-1.113,1.714l2.833,2.834c0.323,0.324,0.323,0.851,0,1.175C17.545,17.969,17.298,18,17.17,18c-0.129,0-0.376-0.031-0.588-0.243l-2.834-2.833c-0.523,0.435-1.101,0.805-1.714,1.113l3.134,3.134C15.721,19.724,16.445,20,17.169,20c0.725,0,1.449-0.276,2.002-0.829C20.276,18.065,20.276,16.273,19.171,15.168z"></path>
                        </svg>
                    </div>
                </div>
            </div> */}

            <div className='header__email'>{auth.email}</div>

            <div className="header-actions">
                <div className="action-item-wrap">
                    <a className='logout' href="/" onClick={logoutHandler}>Выйти</a>
                </div>
            </div>
        </header>

    )
}
