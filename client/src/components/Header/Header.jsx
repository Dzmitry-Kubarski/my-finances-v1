//core
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

//context
import { AuthContext } from '../../context/AuthContext';

//image
import logoSvg from '../../images/logo.svg';


export const Header = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <header className="header">
            <div className='container'>
                <div className='header__inner'>
                    <div className="header-actions">
                        <div className="header-brand">
                            <div className="logo">
                                <img src={logoSvg} alt="logo" />
                            </div>
                            <h1 className="header-brand-text">Finance</h1>
                        </div>
                    </div>

                    <div className='header__email'>{auth.email}</div>

                    <div className="header-actions">
                        <div className="action-item-wrap">
                            <a className='logout' href="/" onClick={logoutHandler}>Выйти</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
